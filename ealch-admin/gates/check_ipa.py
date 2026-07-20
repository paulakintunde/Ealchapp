#!/usr/bin/env python3
"""Deterministic IPA gate (Workstream 4) — espeak-ng, advisory only.

Runs ONLY in the publish/CI environment, invoked as a subprocess from
publish-content.ts — same JSON-in/JSON-out contract as check_french.py and
check_gender.py. Checks every item eligible for `voiceflash` or `dictation`
(the authoring guide's §1.5 rule: "IPA is required for anything eligible for
voiceflash or dictation") for two things:

  1. Presence — the item has no `ipa` at all. Generalizes the narrower
     voiceflash-only check that used to live directly in publish-content.ts
     to also cover dictation, and moves it here so both IPA checks live in
     one place.
  2. Cross-check — when `ipa` IS present, espeak-ng's own French
     phonemization of `fr` is diffed against it (stress marks and whitespace
     normalized away first) and a mismatch is reported.

Both are advisory: this gate never fails publish, only warns. It never
decides pass/fail itself either way — that stays in publish-content.ts,
exactly like the other gates.

Input  (stdin,  utf-8 JSON): {"items": [{"id": str, "fr": str, "ipa": str|null, "drills": [str]}, ...]}
Output (stdout, utf-8 JSON): {"checked": int, "issues": [{"id": str, "message": str}], "skipped": str?}

`skipped` is a distinct, explicit sentinel for "espeak-ng isn't installed on
this machine" — NOT inferred from `checked == 0` or an empty `issues` list,
since "0 items were eligible" is a legitimate, different, non-warning case
from "the binary needed for the cross-check half of this gate is missing."
When `skipped` is present, presence-check issues (which need no binary) are
still reported; only the cross-check half was skipped.

Setup: espeak-ng is an external SYSTEM BINARY, not a pip package — install
it separately (e.g. `winget install espeak-ng`, `apt install espeak-ng`,
`brew install espeak`). No Python dependency beyond the standard library.
"""
import json
import re
import subprocess
import sys

_STRESS_MARKS = re.compile(r"[ˈˌ]")
_WHITESPACE = re.compile(r"\s+")


def normalize_ipa(ipa: str) -> str:
    return _WHITESPACE.sub('', _STRESS_MARKS.sub('', ipa or '')).strip().lower()


def espeak_available() -> bool:
    try:
        subprocess.run(['espeak-ng', '--version'], capture_output=True, timeout=5)
        return True
    except FileNotFoundError:
        return False


def espeak_ipa(text: str) -> str | None:
    try:
        result = subprocess.run(
            ['espeak-ng', '--ipa', '-q', '-v', 'fr', text],
            capture_output=True, text=True, timeout=10,
        )
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return None
    if result.returncode != 0 or not result.stdout.strip():
        return None
    return result.stdout.strip()


def is_eligible(item: dict) -> bool:
    drills = item.get('drills') or []
    return 'voiceflash' in drills or 'dictation' in drills


def main() -> None:
    raw = sys.stdin.buffer.read().decode('utf-8')
    payload = json.loads(raw)
    items = payload.get('items', [])

    targeted = [i for i in items if is_eligible(i)]
    issues = []

    for item in targeted:
        if not item.get('ipa'):
            issues.append({
                'id': item.get('id'),
                'message': f'"{item.get("id")}" is eligible for voiceflash/dictation but has no ipa',
            })

    with_ipa = [i for i in targeted if i.get('ipa')]
    out: dict = {'checked': len(targeted), 'issues': issues}

    if with_ipa:
        if not espeak_available():
            out['skipped'] = 'espeak-ng not found on PATH — install it to enable pronunciation cross-checking'
        else:
            for item in with_ipa:
                generated = espeak_ipa(item.get('fr') or '')
                if generated and normalize_ipa(generated) != normalize_ipa(item['ipa']):
                    issues.append({
                        'id': item.get('id'),
                        'message': (
                            f'"{item.get("id")}": authored ipa "{item["ipa"]}" does not match '
                            f'espeak-ng\'s "{generated}"'
                        ),
                    })
            out['issues'] = issues

    sys.stdout.buffer.write(json.dumps(out, ensure_ascii=False).encode('utf-8'))


if __name__ == '__main__':
    main()
