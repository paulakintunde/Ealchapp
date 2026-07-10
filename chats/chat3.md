# Ealch V2 landing page

_Started 2026-07-10 19:27 UTC_

---

## User

In a new canvas design a marketing landing page without pricing embedded in it for the Ealch V2 mobile app. Create a powerful conversation content for it as well in a new canvas design. Ask me questions before starting.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: grep]_

## Assistant

_[tool: read_file]_

_[tool: questions_v2]_

## User

Questions answered:
- goal: Download the app (App Store / Play badges)
- tone: Elegant & aspirational (matches 'Parlez avec élégance')
- audience: Expats/newcomers in France, Exam takers (DELF/TEF), Travelers, Explore a few options, Career/professional French
- sections: Hero with phone mockup, Feature highlights, How it works (3 steps), FAQ, Final CTA banner
- visual: Mix (dark hero, light body)
- mockups: Recreate real screens from the V2 prototype in phone frames
- french_flavor: Yes — sprinkle French phrases throughout
- length: 7
- variations: 3 directions
- other_notes: Focus on the copy and ensure it represents the actual concerns of most speakers, who have been learning and cannot speak well, or write well or hear well. The app solves frustrations.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

Building the canvas now — 3 directions, dark hero → light body, pain-first copy, real V2 screens in iPhone frames.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

**Ealch Landing.dc.html** — three copy-led directions, all dark hero → light body, no pricing, App Store/Play badges:

- **1a L'Éditoriale** — "Fluent on paper. Silent at the table." Quiet, elegant; Speak Mode phone.
- **1b La Directe** — "Seven years of French. Still ordering in English." Blunt, big type; Le Rapport phone.
- **1c La Conversation** — Camille-led, with a real transcript (mistake + gentle correction) in the hero; Home feed phone.

Copy in every direction is built around the core frustrations: can't hear real-speed French, freeze when speaking, textbook writing, partners switching to English. Two tweaks: badges vs. single CTA, and hero aura motion.

Tell me which direction (or which pieces to merge) and I'll refine it into the final page.

## User

I like the hero page of 1a L'Éditoriale, the second section of 1b, with every learner hits the same wall. I like section 3 of the 1c, with La methode, section 4 with les questions for 1a. and the footer for 1b with  stop studying French  start speaking it with app store logos. make the lighter section background pure white.

## Assistant

The design system attachment points at an empty project, so I'll keep using the established Ealch brand. Merging your picks into a new turn (2a) at the top of the canvas.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

2a is at the top of the canvas — your merge: 1a hero, 1b's "same wall" section, 1c's La méthode, 1a's Fair questions, and 1b's "Stop studying French" finale, with all light sections now pure white. Turn 1 options remain below for reference.

## User

Take inspiration from https://boldvoice.com/ and upgrade the Turn 2 - The merge 2a. Make it have more product demo and features like boldvoice. Add animations to make it come to live. Incorporate good ideas to the build to make it nicer and better.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: web_fetch]_

Now inserting the 3a section at the top of the canvas:

_[tool: dc_html_str_replace]_

_[tool: snip]_

_[tool: ready_for_verification]_

**3a** is at the top — 2a upgraded with BoldVoice-style demo energy:

- **Interactive méthode demo**: 5 clickable steps (auto-advancing every ~4s) that switch the phone between Speak Mode → live analysis → Le Rapport → Smart Review drill → progress chart.
- **Scenario marquee** under the hero — scrolling ticker of « Au café », « À la préfecture », « Le DELF oral »…
- **Feature grid** of 6: Speak Mode, Le Rapport, Smart Review, Dictée, Sentence Builder, Beginners' Den, with hover lifts.
- **Motion everywhere**: animated waveform + pulsing mic in the hero phone, drifting aura, floating flashcard, equalizer bars behind the final CTA, hover states on buttons.
- Hero now carries a 4.9★ App Store chip.

2a and turn 1 remain below for comparison.

## User

One last thing, add a language toggle, EN/FR

## Assistant

Adding a functional EN/FR toggle to 3a — it switches all the marketing copy (hero, wall, méthode + demo steps, features, questions, CTA). Logic first:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Done — 3a now has a working EN/FR toggle in the nav. It switches the full page copy: hero headline + sub, rating chip, the wall section, La méthode intro + the 5 demo steps, all six feature descriptions, the questions, the final CTA, and the nav button (Get the app ↔ Télécharger). Defaults to EN; click FR to see the French version.

## User

reduce the italics used, also remove all em-dash that are not a compound word. Make the headers ticker in weight.

## Assistant

_[tool: run_script]_

_[tool: run_script]_

Comments and canvas chrome only — plus one visible phone caption. Fixing that and the two demo-step strings in the logic:

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Done across 3a (EN and FR):

- **Italics cut back** — headline accents, section headings, numerals, and marquee chips are now upright; italics remain only on actual French quotes (« … »).
- **Em-dashes removed** from all copy, replaced with colons, commas, or periods as grammar demanded (the step subtitles in the demo included).
- **Headers heavier** — all major serif headings (44–64px) now render at weight 600.

One caveat: Instrument Serif only ships a 400 weight, so the bolder headers are browser-synthesized. If you want a true bold serif, I can swap headers to a family with real weights — say the word.

## User

One more thing, make english element use english words and same for french. E.g menu, some section headers, and footer.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Done — 3a is now fully bilingual per toggle:

- **EN mode**: nav "Method / Features / FAQ", kickers "YOUR FRENCH VOICE COACH / THE METHOD · IN ACTION / FEATURES / THE QUESTIONS", footer "Privacy / Terms / Contact", English store badges.
- **FR mode**: "La méthode / Fonctions", "VOTRE COACH VOCAL", "Confidentialité / Conditions", and localized badges ("Télécharger dans l'App Store", "Disponible sur Google Play").

Kept intentionally French in both: the scenario marquee, product names (Le Rapport, Speak Mode), and the in-phone app screens, since that's the product itself.

## User

Move 3a
— Amplified · demo-led, animated to its own canvas.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Done. **Ealch Landing Final.dc.html** is now its own canvas — the amplified 3a page standalone, with the interactive demo, EN/FR toggle, and both tweaks intact. The exploration canvas (**Ealch Landing.dc.html**) keeps turns 1–2 and now shows a pointer under "Turn 3" linking to the new file.

