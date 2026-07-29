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
    accents come off mood names ('impératif' → verbecc's 'imperatif'), and a
    mood name written into the tense ('conditionnel présent') moves to the
    mood slot. verbecc namespaces the imperative's tense keys."""
    def unaccent_mood(w: str) -> str:
        return w.replace('é', 'e') if w.replace('é', 'e') in MOOD_KEYS else w

    m = unaccent_mood((mood or 'indicatif').strip().lower().replace(' ', '-'))
    t = (tense or '').strip().lower().replace(' ', '-')
    # Voice is not a tense: "futur simple (passif)" names futur-simple; the
    # passive itself is matched as être+participle by match_or_issue.
    t = re.sub(r'-?\(?passif\)?$', '', t).strip('-')
    if t == 'futur':
        t = 'futur-simple'
    if t in ('imparfait-du-subjonctif', 'subjonctif-imparfait'):
        return 'subjonctif', 'imparfait'
    parts = t.split('-')
    if parts and unaccent_mood(parts[0]) in MOOD_KEYS:
        m = unaccent_mood(parts[0])
        t = '-'.join(parts[1:]) or 'présent'
    if m == 'imperatif' and not t.startswith('imperatif-'):
        t = f'imperatif-{t or "présent"}'
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
    but every token of the form itself must appear exactly, in order. The
    FINAL token of a compound form may carry participle agreement (-e/-s/-es:
    "les bijoux qu'elle lui a offertS") — agreement with a preceding object
    is real French this gate must not fail; which agreement is right is a
    grammar question outside a conjugation check's remit."""
    ELIDABLE = {'se': '(?:se|s)', 's': '(?:se|s)', 'me': '(?:me|m)', 'm': '(?:me|m)', 'te': '(?:te|t)', 't': '(?:te|t)'}

    def tok_pat(t: str) -> str:
        return ELIDABLE.get(t, re.escape(t))

    toks = bare.split(' ')
    if not toks or not toks[0]:
        return False
    if len(toks) == 1:
        return f' {bare} ' in f' {hay} '
    mid = toks[1:-1]
    pat = (
        tok_pat(toks[0])
        + ''.join(r'(?:\s+\S+){0,2}\s+' + tok_pat(t) for t in mid)
        + r'(?:\s+\S+){0,2}\s+' + re.escape(toks[-1]) + r'(?:es|e|s)?'
    )
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

    # Authoring writes prepositional infinitives ("assister à", "tenir à");
    # the preposition belongs to the item's usage, not to conjugation.
    infinitive = re.sub(r"\s+(à|de|d')$", '', infinitive.strip())

    # Locutions ("avoir besoin", "avoir le droit", "faire la fête"): conjugate
    # the head verb and carry the rest of the phrase into every candidate —
    # "j'ai besoin". Reflexives ("se lever") stay whole; verbecc knows them.
    complement = ''
    head, _, rest = infinitive.partition(' ')
    if rest and head.lower() in ('se', "s'"):
        # Reflexive locution ("se rendre compte"): the reflexive VERB is the
        # first two words; the rest is complement.
        verb, _, rest2 = rest.partition(' ')
        if rest2:
            infinitive = f'{head} {verb}'
            complement = rest2
    elif rest:
        infinitive = head
        complement = rest

    mood, tense = canonical_mood_tense(mood, tense)

    # Futur proche is periphrastic — aller (présent) + infinitive — and
    # verbecc rightly has no tense key for it. Synthesize the candidates; the
    # containment machinery below checks them like any other compound form.
    if tense in ('futur-proche', 'futur-immédiat'):
        aller = entries_for(conjugator, 'aller', 'indicatif', 'présent')
        if aller is None:
            return 'verbecc could not conjugate "aller" for a futur proche check'
        aller_forms = [
            form
            for e in aller
            if e.get('p') == person and e.get('n') == number
            for form in e.get('c', [])
            if form != '-'
        ]
        tail = f' {complement}' if complement else ''
        # Reflexives agree with the subject in futur proche: "je vais ME
        # présenter", never "je vais se présenter".
        refl = re.match(r"^(?:se\s+|s')(.+)$", infinitive, re.IGNORECASE)
        inf_variants = (
            [f'{p} {refl.group(1)}' for p in ('me', 'te', 'se', 'nous', 'vous', 'm', 't', 's')]
            if refl
            else [infinitive]
        )
        candidates = [f'{form} {inf}{tail}' for form in aller_forms for inf in inf_variants]
        # "aller" tagged as the futur-proche verb IS its own auxiliary: the
        # plain present form ("je vais rater...") is the construction.
        if infinitive == 'aller':
            candidates += aller_forms
        # Passive futur proche: "Les résultats vont être affichés" — aller +
        # être + past participle (any agreement).
        pp = entries_for(conjugator, infinitive, 'participe', 'participe-passé')
        if pp:
            participles = [form for e in pp for form in e.get('c', []) if form != '-']
            candidates += [f'{form} être {p}' for form in aller_forms for p in participles]
        if not candidates:
            return f'no futur proche form for person={person} number={number}'
        return match_or_issue(item, infinitive, mood, tense, candidates, None, person, number)

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
        form + (f' {complement}' if complement else '')
        for e in entries
        if e.get('p') == person and e.get('n') == number
        for form in e.get('c', [])
        if form != '-'
    ]
    if not candidates:
        # Impersonal verbs (falloir, neiger, pleuvoir…) only exist in one
        # person; verbecc pads the rest with '-'. The only real forms ARE the
        # conjugation of the verb — accept them whatever person was asked.
        candidates = [form for e in entries for form in e.get('c', []) if form != '-']
    if not candidates:
        # verbecc 2.0.2 ships dash-only placeholders for some verbs (falloir,
        # neiger). No data is not the same as wrong French: a checker that
        # cannot check must skip, not fail — same posture as check_ipa's
        # graceful degrade. Unknown INFINITIVES still fail above (that is
        # usually an annotation typo, which is checkable).
        return None

    return match_or_issue(item, infinitive, mood, tense, candidates, conjugator, person, number)


def entries_for(conjugator, infinitive: str, mood: str, tense: str):
    """The raw verbecc entry list for (infinitive, mood, tense), or None."""
    try:
        data = json.loads(conjugator.conjugate(infinitive).to_json())
        return data['moods'][mood][tense]
    except Exception:
        return None


# être's compound forms per (mood, tense), for passive-voice candidates.
PASSIVE_AUX_TENSE = {
    ('indicatif', 'présent'): ('indicatif', 'présent'),
    ('indicatif', 'imparfait'): ('indicatif', 'imparfait'),
    ('indicatif', 'futur-simple'): ('indicatif', 'futur-simple'),
    ('indicatif', 'passé-composé'): ('indicatif', 'passé-composé'),
    ('subjonctif', 'présent'): ('subjonctif', 'présent'),
    ('subjonctif', 'passé'): ('subjonctif', 'passé'),
    ('conditionnel', 'présent'): ('conditionnel', 'présent'),
    ('conditionnel', 'passé'): ('conditionnel', 'passé'),
    ('indicatif', 'passé-simple'): ('indicatif', 'passé-simple'),
    ('indicatif', 'plus-que-parfait'): ('indicatif', 'plus-que-parfait'),
    ('indicatif', 'futur-antérieur'): ('indicatif', 'futur-antérieur'),
}

# For a compound (mood, tense): the mood/tense its AUXILIARY is conjugated in.
# The template's auxiliary choice is not gospel — transitive uses of
# être-verbs take avoir ("j'ai passé un examen") and pronominal uses of
# avoir-verbs take être ("la précarité s'est accrue") — so on failure the
# matcher retries with BOTH auxiliaries around the same participle.
COMPOUND_AUX_TENSE = {
    ('indicatif', 'passé-composé'): ('indicatif', 'présent'),
    ('indicatif', 'plus-que-parfait'): ('indicatif', 'imparfait'),
    ('indicatif', 'futur-antérieur'): ('indicatif', 'futur-simple'),
    ('indicatif', 'passé-antérieur'): ('indicatif', 'passé-simple'),
    ('conditionnel', 'passé'): ('conditionnel', 'présent'),
    ('subjonctif', 'passé'): ('subjonctif', 'présent'),
    ('subjonctif', 'plus-que-parfait'): ('subjonctif', 'imparfait'),
}

# Tenses that serve as an auxiliary's tense in some compound above.
AUX_TENSE_VALUES = set(COMPOUND_AUX_TENSE.values())


def match_or_issue(item, infinitive, mood, tense, candidates, conjugator, person=None, number=None) -> str | None:
    """Match the candidate forms against the item's fr; on failure, try the
    constructions that are still correct conjugations of the verb — passive
    voice, the swapped auxiliary, on-for-nous, the bare infinitive of a vocab
    card — before reporting an issue."""
    fr = item.get('fr') or ''
    haystack = normalize(fr)

    # verbecc pads a few verbs with instructional placeholders ("je viens de
    # + infinitif") — those are not forms; with nothing real left there is
    # nothing checkable.
    candidates = [c for c in candidates if '+' not in c and bare_form(c) not in ('', '-')]
    if not candidates:
        return None

    # 1990 rectifications: the é↔è alternation before a mute syllable is
    # OPTIONAL (traditional "protégera", reformed "protègera" — both correct).
    # verbecc picks one spelling; accept either, one substitution at a time.
    def reform_variants(cand: str):
        out = {cand}
        for i, ch in enumerate(cand):
            if ch == 'é':
                out.add(cand[:i] + 'è' + cand[i + 1:])
            elif ch == 'è':
                out.add(cand[:i] + 'é' + cand[i + 1:])
        return out

    candidates = [v for c in candidates for v in sorted(reform_variants(c))]

    # A WORD-BOUNDARY prefix match, not a bare startswith: "je manges" starts
    # with the literal substring "je mange" (a real wrong-conjugation bug
    # this gate exists to catch), so the character right after a candidate
    # must be absent or a space, never a letter continuing the same word.
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

    # Passive voice: être conjugated in the same mood/tense, followed by the
    # verb's past participle (any agreement).
    # Participle lookups conjugate the non-reflexive base ("se partager" →
    # "partager"); verbecc's reflexive handling of participles is unreliable.
    pp_inf = re.sub(r"^(?:se\s+|s')", '', infinitive)

    aux = PASSIVE_AUX_TENSE.get((mood, tense))
    if conjugator is not None and aux is not None:
        etre = entries_for(conjugator, 'être', aux[0], aux[1])
        pp = entries_for(conjugator, pp_inf, 'participe', 'participe-passé')
        if etre and pp:
            participles = [form for e in pp for form in e.get('c', []) if form != '-']
            for e in etre:
                for form in e.get('c', []):
                    if form == '-':
                        continue
                    for p in participles:
                        if contains_form(hay, f'{bare_form(form)} {loose(p)}'):
                            return None

    # 'on' + third-singular is everyday French for nous ("qu'on réserve" ≡
    # "que nous réservions"). When the sentence actually says 'on', accept
    # the 3s forms whatever person the annotation asked for.
    if conjugator is not None and re.search(r'(?<!\S)on(?!\S)', hay):
        entries = entries_for(conjugator, infinitive, mood, tense)
        for e in entries or []:
            if e.get('p') == '3' and e.get('n') == 's':
                for form in e.get('c', []):
                    if form != '-' and contains_form(hay, bare_form(form)):
                        return None

    # Auxiliary swap for compound tenses (see COMPOUND_AUX_TENSE).
    aux_tense = COMPOUND_AUX_TENSE.get((mood, tense))
    if conjugator is not None and aux_tense is not None:
        pp = entries_for(conjugator, pp_inf, 'participe', 'participe-passé')
        participles = [f for e in (pp or []) for f in e.get('c', []) if f != '-']
        for aux_verb in ('avoir', 'être'):
            for e in entries_for(conjugator, aux_verb, aux_tense[0], aux_tense[1]) or []:
                if person is not None and (e.get('p') != person or e.get('n') != number):
                    continue
                for form in e.get('c', []):
                    if form == '-':
                        continue
                    for p in participles:
                        if contains_form(hay, f'{bare_form(form)} {loose(p)}'):
                            return None

    # avoir/être tagged with a COMPOUND tense usually annotates the
    # construction the aux appears in ("avoir, subjonctif passé" for
    # "…qu'il AIT révisé") — the aux's own conjugated form in that
    # construction is its aux-tense sibling.
    if conjugator is not None and infinitive in ('avoir', 'être') and aux_tense is not None:
        for e in entries_for(conjugator, infinitive, aux_tense[0], aux_tense[1]) or []:
            for form in e.get('c', []):
                if form != '-' and contains_form(hay, bare_form(form)):
                    return None

    # The requested tense may itself be an AUX tense of a compound the
    # sentence legitimately uses ("prendre, subjonctif présent" for
    # "…qu'il AIT PRIS du retard"; "trancher, passé simple" for
    # "…EUT TRANCHÉ") — avoir/être in the requested tense + participle.
    if conjugator is not None and (mood, tense) in AUX_TENSE_VALUES:
        pp = entries_for(conjugator, pp_inf, 'participe', 'participe-passé')
        participles = [f for e in (pp or []) for f in e.get('c', []) if f != '-']
        for aux_verb in ('avoir', 'être'):
            for e in entries_for(conjugator, aux_verb, mood, tense) or []:
                for form in e.get('c', []):
                    if form == '-':
                        continue
                    for pcp in participles:
                        if contains_form(hay, f'{bare_form(form)} {loose(pcp)}'):
                            return None

    # Person agreement with a NOUN subject is un-checkable without parsing
    # ("la nouvelle loi protégera" is 3s however the tag reads). Any real
    # form of the requested mood/tense keeps the FORM check honest.
    if conjugator is not None:
        for e in entries_for(conjugator, infinitive, mood, tense) or []:
            for form in e.get('c', []):
                if form != '-' and contains_form(hay, bare_form(form)):
                    return None

    # A vocab card presenting the bare infinitive ("échouer à un examen",
    # "obtenir son diplôme") — or a sentence using it after a modal — makes
    # no wrong-conjugation claim; there is nothing here to block a publish
    # over. The gate exists to stop wrong French, not to audit annotations.
    if contains_form(hay, loose(infinitive)):
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
