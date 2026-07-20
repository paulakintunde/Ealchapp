#!/usr/bin/env python3
"""Deterministic French gender-lexicon gate (Workstream 4).

Runs ONLY in the publish/CI environment, invoked as a subprocess from
publish-content.ts — same contract as check_french.py. Reads a corpus's
items as JSON on stdin, checks every item carrying a declared `gender`
against a real lexicon (Lexique383, gates/data/lexique-gender.csv), and
writes a JSON report to stdout: which items disagree with the lexicon and
why. It never decides pass/fail itself — that stays in publish-content.ts.

Input  (stdin,  utf-8 JSON): {"items": [{"id": str, "fr": str, "gender": "m"|"f"|null}, ...]}
Output (stdout, utf-8 JSON): {"checked": int, "issues": [{"id": str, "message": str}]}

Wired advisory-only today (publish-content.ts's 4c block): the lexicon has
real coverage gaps (a common noun simply absent from Lexique383, or present
but genuinely ambiguous across senses like "livre" m. book / f. pound), and
an absent lookup is NEVER treated as a mismatch — only a POSITIVE
disagreement between the author's `gender` and the lexicon's is reported, on
purpose, to keep the false-positive rate low enough that this can be
promoted to a hard gate once one real publish run shows it clean.

Setup: no dependency beyond the Python standard library (csv). The lexicon
is a small, committed, pre-extracted CSV — see gates/data/lexique-gender.csv
and its extraction notes for provenance (Lexique383, lexique.org).
"""
import csv
import json
import os
import re
import sys

DATA_PATH = os.path.join(os.path.dirname(__file__), 'data', 'lexique-gender.csv')

# un/une/le/la/les/des/du de-la — the articles a well-formed item's `fr`
# opens with per the authoring guide's "never a bare noun" rule (§1.2).
_ARTICLES = {'un', 'une', 'le', 'la', 'les', 'des', 'du'}
_ELIDED_PREFIX = re.compile(r"^[ld]['’]", re.IGNORECASE)
_TRAILING_PUNCT = re.compile(r"[.,;:!?…\"'’]+$")


def load_lexicon(path: str) -> dict[str, str]:
    lexicon: dict[str, str] = {}
    with open(path, encoding='utf-8', newline='') as f:
        for row in csv.DictReader(f):
            lexicon[row['word']] = row['gender']
    return lexicon


def extract_headword(fr: str) -> str | None:
    """The noun a gender claim is actually about — strips a leading article
    (bare or elided) and any trailing punctuation, matching how an author
    writes a noun per the standing rule (§1.2: 'un café', not 'café')."""
    text = (fr or '').strip().lower().replace('’', "'")
    tokens = text.split()
    if not tokens:
        return None

    first = tokens[0]
    if first in _ARTICLES and len(tokens) > 1:
        head = tokens[1]
    elif first == 'de' and len(tokens) > 2 and tokens[1] == 'la':
        head = tokens[2]
    elif _ELIDED_PREFIX.match(first):
        head = _ELIDED_PREFIX.sub('', first)
    else:
        head = first

    head = _TRAILING_PUNCT.sub('', head)
    return head or None


def check_one(lexicon: dict[str, str], item: dict) -> str | None:
    """Returns an issue message, or None if the item checks out (including
    when the headword simply isn't in the lexicon — coverage gaps are never
    an issue, only a positive gender disagreement is)."""
    gender = item.get('gender')
    if gender not in ('m', 'f'):
        return None

    head = extract_headword(item.get('fr') or '')
    if not head:
        return None

    lexicon_gender = lexicon.get(head)
    if lexicon_gender is None or lexicon_gender == gender:
        return None

    return (
        f'"{item.get("id")}": fr "{item.get("fr")}" declares gender={gender!r}, '
        f'but Lexique383 has "{head}" as {lexicon_gender!r}'
    )


def main() -> None:
    raw = sys.stdin.buffer.read().decode('utf-8')
    payload = json.loads(raw)
    items = payload.get('items', [])

    targeted = [i for i in items if i.get('gender') in ('m', 'f')]
    issues = []

    if targeted:
        lexicon = load_lexicon(DATA_PATH)
        for item in targeted:
            msg = check_one(lexicon, item)
            if msg:
                issues.append({'id': item.get('id'), 'message': msg})

    out = json.dumps({'checked': len(targeted), 'issues': issues}, ensure_ascii=False)
    sys.stdout.buffer.write(out.encode('utf-8'))


if __name__ == '__main__':
    main()
