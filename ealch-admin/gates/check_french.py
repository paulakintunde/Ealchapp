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

    if not any(opens_with(c) for c in candidates):
        want = ' | '.join(candidates)
        return f'"{item.get("id")}": fr "{fr}" does not open with a valid {infinitive} {mood}/{tense} form (expected one of: {want})'

    return None


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
