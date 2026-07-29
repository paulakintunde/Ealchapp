#!/usr/bin/env python3
"""Deterministic French conjugation gate (master plan Phase 2.D).

Runs ONLY in the publish/CI environment, invoked as a subprocess from
publish-content.ts — never in the Metro bundle, never on device. Reads a
corpus's items as JSON on stdin, checks every item that carries a
`verbCheck` target against a real conjugator (verbecc), and writes a JSON
report to stdout: which items failed and why. It never decides pass/fail
itself — that stays in publish-content.ts, exactly like validateCorpus.

Input  (stdin,  utf-8 JSON): {"items": [{"id": str, "fr": str, "verbCheck": {...} | null}, ...]}
Output (stdout, utf-8 JSON): {"checked": int, "issues": [{"id": str, "message": str}]}

An item's `fr` must START WITH one of the conjugated forms verbecc produces
for (infinitive, mood, tense, person, number) — checking a prefix, not
equality, because `fr` is a full sentence ("Je parle français.") and the
conjugated phrase is only its opening words. Third-person singular collapses
il/elle/on to (almost always) the same spelling in French, so this accepts a
match against ANY entry for the given person+number rather than requiring a
specific pronoun/gender — real ambiguity here is harmless to what this gate
checks (the conjugated FORM, not the choice of pronoun).

Setup: `pip install -r gates/requirements.txt`. verbecc trains a small local
template-matching model into its own package directory on first run (a few
seconds); every subsequent run in the same environment loads the cached
model in well under a second. This is deterministic template matching for
any verb verbecc already knows (which covers ordinary regular and common
irregular verbs) — its ML layer only guesses conjugation TEMPLATES for verbs
outside its known-verb database, so it never enters the picture for the kind
of everyday vocabulary this corpus authors.
"""
import contextlib
import json
import os
import re
import sys


@contextlib.contextmanager
def _stdout_silenced():
    """Redirects the real OS stdout file descriptor to null for the duration.
    verbecc logs INFO lines (its config load, its model-cache load/train) at
    IMPORT and INIT time via a logging handler that binds to the actual
    stdout stream object, not something a mere `logging.getLogger(...
    ).setLevel(...)` call reliably beats — this project's stdout is a JSON
    channel to publish-content.ts, so ANY stray line breaks its json.parse.
    Redirecting the real fd (not just the `sys.stdout` Python attribute) is
    the one approach that holds regardless of how a dependency logs."""
    fd = sys.stdout.fileno()
    saved = os.dup(fd)
    devnull = os.open(os.devnull, os.O_WRONLY)
    try:
        sys.stdout.flush()
        os.dup2(devnull, fd)
        yield
    finally:
        sys.stdout.flush()
        os.dup2(saved, fd)
        os.close(devnull)
        os.close(saved)


def normalize(text: str) -> str:
    # Lowercase, strip a trailing sentence-ending mark, collapse whitespace.
    # Accents are left untouched — a wrong accent IS a wrong conjugation.
    t = text.strip().lower()
    t = re.sub(r'[.!?…]+$', '', t).strip()
    return re.sub(r'\s+', ' ', t)


# verbecc 2.x mood keys. Authoring often writes "conditionnel présent" as a
# TENSE while leaving mood at the 'indicatif' default — conditionnel is a
# mood, so the first tense word that names a mood claims the mood slot.
MOOD_KEYS = {'indicatif', 'conditionnel', 'subjonctif', 'imperatif', 'infinitif', 'participe'}

SUBJECT_PRONOUNS = {'je', 'j', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'}

# Subjunctive candidates arrive as clauses ("qu'il accepte"); the clause head
# is not part of the conjugated form and real sentences put a noun there
# ("…que le propriétaire accepte").
CLAUSE_HEADS = {'que', 'qu'}


def canonical_mood_tense(mood: str, tense: str) -> tuple[str, str]:
    """Fold authored mood/tense spellings onto verbecc 2.x keys: lowercase,
    spaces become the hyphens verbecc uses ('passé composé' → 'passé-composé'),
    and a mood name written into the tense ('conditionnel présent') moves to
    the mood slot."""
    m = (mood or 'indicatif').strip().lower().replace(' ', '-')
    t = (tense or '').strip().lower().replace(' ', '-')
    parts = t.split('-')
    if parts and parts[0] in MOOD_KEYS:
        m = parts[0]
        t = '-'.join(parts[1:]) or 'présent'
    return m, t


def loose(text: str) -> str:
    """normalize(), then apostrophes, hyphens and internal punctuation become
    spaces — the containment match below is about word sequences: "qu'il a"
    must expose "il a", "Pourriez-vous" must expose "pourriez", and "Oui, il
    doit." must expose "il doit"."""
    t = normalize(text).replace("’", ' ').replace("'", ' ').replace('-', ' ')
    t = re.sub(r"[^\w\sàâäéèêëîïôöùûüçœæ]", ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


def bare_form(cand: str) -> str:
    """The conjugated verb phrase without its clause head or subject pronoun:
    'il doit' → 'doit', "j'ai dû" → 'ai dû', "qu'il accepte" → 'accepte'.
    What must actually appear in a sentence whose subject is a noun
    ('Le plombier doit…', '…que le propriétaire accepte')."""
    toks = loose(cand).split(' ')
    while toks and toks[0] in CLAUSE_HEADS | SUBJECT_PRONOUNS:
        toks = toks[1:]
    return ' '.join(toks)


def contains_form(hay: str, bare: str) -> bool:
    """Word-bounded containment of the conjugated phrase. Compound tenses
    tolerate up to two words between their parts — French inserts adverbs and
    negation inside them ("n'est JAMAIS arrivé", "avons TOUJOURS voulu") —
    but every token of the form itself must appear exactly, in order."""
    toks = bare.split(' ')
    if not toks or not toks[0]:
        return False
    if len(toks) == 1:
        return f' {bare} ' in f' {hay} '
    pat = re.escape(toks[0]) + ''.join(r'(?:\s+\S+){0,2}\s+' + re.escape(t) for t in toks[1:])
    return re.search(r'(?<!\S)' + pat + r'(?!\S)', hay) is not None


def check_one(conjugator, item: dict) -> str | None:
    """Returns an issue message, or None if the item checks out."""
    vc = item.get('verbCheck')
    if not vc:
        return None
    infinitive = vc.get('infinitive')
    tense = vc.get('tense')
    mood = vc.get('mood') or 'indicatif'
    person = vc.get('person')
    number = vc.get('number')
    fr = item.get('fr') or ''

    if not infinitive or not tense or person not in ('1', '2', '3') or number not in ('s', 'p'):
        return f'verbCheck is malformed: {vc!r}'

    try:
        result = conjugator.conjugate(infinitive)
    except Exception as e:  # verbecc's VerbNotFoundError and friends
        return f'verbecc does not know the infinitive "{infinitive}": {e}'

    mood, tense = canonical_mood_tense(mood, tense)
    try:
        data = json.loads(result.to_json())
        entries = data['moods'][mood][tense]
    except (KeyError, TypeError):
        return f'verbecc has no {mood}/{tense} for "{infinitive}" (check the mood/tense spelling)'

    candidates = [
        form
        for e in entries
        if e.get('p') == person and e.get('n') == number
        for form in e.get('c', [])
    ]
    if not candidates:
        return f'verbecc has no {mood}/{tense} form for "{infinitive}" at person={person} number={number}'

    # A WORD-BOUNDARY prefix match, not a bare startswith: "je manges" starts
    # with the literal substring "je mange" (a real wrong-conjugation bug
    # this gate exists to catch), so the character right after a candidate
    # must be absent or a space, never a letter continuing the same word.
    haystack = normalize(fr)

    def opens_with(cand: str) -> bool:
        c = normalize(cand)
        return haystack == c or haystack.startswith(c + ' ')

    if any(opens_with(c) for c in candidates):
        return None

    # Sentences with a NOUN subject ('Le plombier doit venir…') are correctly
    # conjugated without opening on pronoun+verb. Accept the pronoun-stripped
    # form as a word-bounded phrase anywhere in the sentence — the FORM is
    # still checked exactly ('doit', 'a dû'), only its position is freed.
    hay = loose(fr)
    for c in candidates:
        if contains_form(hay, bare_form(c)):
            return None

    want = ' | '.join(candidates)
    return f'"{item.get("id")}": fr "{fr}" does not contain a valid {infinitive} {mood}/{tense} form (expected one of: {want})'


def main() -> None:
    raw = sys.stdin.buffer.read().decode('utf-8')
    payload = json.loads(raw)
    items = payload.get('items', [])

    targeted = [i for i in items if i.get('verbCheck')]
    issues = []

    if targeted:
        # Imported lazily: importing verbecc (and training/loading its model)
        # costs real time, and most publish runs will have zero verbCheck
        # items for a long while yet — no reason to pay it when there is
        # nothing to check. Both the import and the init log to stdout by
        # default (see _stdout_silenced), so both happen inside the guard.
        # The silencer must span the WHOLE run, not just import/init: verbecc
        # also logs at conjugate() time (empty-template warnings on some
        # verbs), and one stray line on stdout breaks the JSON channel.
        with _stdout_silenced():
            from verbecc import CompleteConjugator

            conjugator = CompleteConjugator(lang='fr')
            for item in targeted:
                msg = check_one(conjugator, item)
                if msg:
                    issues.append({'id': item.get('id'), 'message': msg})

    out = json.dumps({'checked': len(targeted), 'issues': issues}, ensure_ascii=False)
    sys.stdout.buffer.write(out.encode('utf-8'))


if __name__ == '__main__':
    main()
