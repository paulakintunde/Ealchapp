#!/usr/bin/env python3
"""Gender agreement in authored PROSE, checked against Lexique.

check_gender.py reads a corpus item's declared `gender` field. An exam paper
declares nothing: it is prose, and its genders live inside determiners. So
nothing in the existing gates can see a word of an exam stimulus, and the
handover checklist's "run check_gender.py" is, for a paper, a check that
cannot fail.

This reads what the paper actually says instead. It finds determiner + noun
pairs and compares the determiner's gender against lexique-gender.csv.

Input  (stdin, utf-8 JSON): ["une phrase", "une autre", ...]
Output (stdout):            one line per suspected disagreement, then a summary.
Exit code 1 if anything was found, so it can gate a build.

DELIBERATELY CONSERVATIVE. It reports only what it is sure about:

  - Singular determiners only. `les`/`des` carry no gender.
  - The determiner must be immediately followed by the noun. An adjective in
    between ("un grand parapluie") is skipped rather than guessed at, because
    the adjective is usually in the lexicon too and would be checked as if it
    were the noun.
  - Words the lexicon marks as BOTH genders are skipped.
  - Words not in the lexicon are skipped and counted, so a large skip count is
    itself a signal that the check is seeing less than it appears to.

A false positive here costs a minute of an author's time. A false negative
ships a gender error into an exam paper, so the trade is deliberate.
"""
import csv
import json
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
LEXICON = os.path.join(HERE, 'data', 'lexique-gender.csv')

# Determiner -> the gender it forces. Elided forms (l', d') are genderless and
# absent on purpose.
DETERMINERS = {
    'le': 'm', 'un': 'm', 'du': 'm', 'ce': 'm', 'cet': 'm', 'au': 'm',
    'la': 'f', 'une': 'f', 'cette': 'f', 'ma': 'f', 'sa': 'f',
}
# `mon` and `son` are absent on purpose: French uses the masculine form before
# ANY vowel-initial noun, so `son opinion` and `mon amie` are correct and a
# gender check on them reports nothing but noise. `ma` and `sa` stay, because
# they only ever appear before a feminine consonant-initial noun.

# Words that follow a determiner without being its noun. Without these the
# check reports the superlative (`la plus forte`), the object pronoun before a
# preposition (`posez-la sur la borne`), and `une demi-journée`.
NOT_A_NOUN = {
    'plus', 'moins', 'mieux', 'demi', 'demie', 'contre', 'quart',
    'sur', 'sous', 'par', 'pour', 'dans', 'avec', 'sans', 'vers', 'chez',
    'en', 'a', 'de', 'du', 'des', 'et', 'ou', 'que', 'qui', 'ne', 'y',
    'mi', 'tout', 'toute', 'tous', 'meme', 'même', 'seul', 'seule',
}

# `la`/`le` before a verb is a pronoun, not a determiner ("je la prends").
# Rather than part-of-speech tag, require the next token to be a known NOUN in
# the lexicon, which the pronoun reading almost never satisfies.


def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')


def load_lexicon():
    genders = {}
    both = set()
    with open(LEXICON, encoding='utf-8') as fh:
        for row in csv.DictReader(fh):
            w = row['word'].strip().lower()
            g = row['gender'].strip()
            if not w or g not in ('m', 'f'):
                continue
            if w in genders and genders[w] != g:
                both.add(w)
            genders[w] = g
    for w in both:
        genders.pop(w, None)
    return genders, both


# Hyphens and apostrophes are INSIDE the token. Splitting on them turns
# `la mi-décembre` into `la` + `mi` and reports a disagreement that is not
# there, and `quelqu’un passe` into `un` + `passe`.
TOKEN = re.compile(r"[a-zà-ÿœ]+(?:[-'’][a-zà-ÿœ]+)*", re.IGNORECASE)


def main():
    # stdin and stdout are decoded EXPLICITLY as UTF-8. Left to the platform,
    # Windows uses the console codepage: every apostrophe and accent arrives as
    # mojibake, the tokeniser splits on the wreckage, and the gate reports
    # disagreements that exist only in its own decoding. That is worse than no
    # gate, because it looks like a finding.
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    genders, both = load_lexicon()
    lines = json.loads(sys.stdin.buffer.read().decode("utf-8"))

    findings = []
    checked = 0
    skipped_unknown = 0

    # A determiner cannot govern a noun in the next sentence. Without this
    # split, "...si vous en avez un. Durée : dix minutes." reports "un durée".
    fragments = [f for line in lines
                 for f in re.split(r"[.!?;:\n]+", line)]
    for line in fragments:
        tokens = [m.group(0).lower() for m in TOKEN.finditer(line)]
        for i, tok in enumerate(tokens[:-1]):
            forced = DETERMINERS.get(tok)
            if forced is None:
                continue
            noun = tokens[i + 1]
            if noun in both or noun in NOT_A_NOUN:
                continue
            actual = genders.get(noun)
            if actual is None:
                skipped_unknown += 1
                continue
            checked += 1
            if actual != forced:
                findings.append((tok, noun, forced, actual, line[:90]))

    for det, noun, forced, actual, ctx in findings:
        print(f'  "{det} {noun}" — determiner says {forced}, Lexique says {actual}   … {ctx}')

    print(f'\nchecked {checked} determiner+noun pairs, '
          f'skipped {skipped_unknown} (noun not in Lexique), '
          f'{len(findings)} suspected disagreement(s)')
    return 1 if findings else 0


if __name__ == '__main__':
    sys.exit(main())
