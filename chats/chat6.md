# Ealch v2 build specification

_Started 2026-07-10 21:45 UTC_

---

## User

Write the most comprehensive prompt to fully build a complete replicate with all fully functional components, functions, features, settings, animations, design, and everything that is required to make the Ealch v2 design built in react native and expo. This may not be the best way to request this, ask me questions to refine the ask and write the prompt in a new canvas. The build is for Ealch v2

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: questions_v2]_

## User

Questions answered:
- target_agent: Claude Code / AI coding agent
- backend: Full backend spec (choose a stack for me, e.g. Supabase + AI APIs)
- ai_features: Fully functional — real LLM + speech APIs
- audio: Real TTS + speech recognition (native/API)
- content: Structured as CMS/remote content with sample seed data
- languages: Multi-language architecture, French first
- platforms: iOS, Android, Web (Expo web)
- state_stack: Expo Router + Zustand + NativeWind (modern default)
- monetization: Include subscription/paywall spec (RevenueCat)
- offline: Fully functional offline caching
- scope_extras: Push notifications / streak reminders, Accessibility requirements, Haptics spec, Analytics events, Testing requirements (unit/E2E), App Store submission prep
- prompt_format: Both: master prompt + phased breakdown
- fidelity: The two default languages should be english and french, other languages to be added later. Make it easy to swap any dependency or ai feature. Prioritize the earliest build to be fully functional.  then features layered on the initial build. A separate remote dashboard will be created to manage features, see Ealch admin and the prompt Ealch dev prompts.

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Now writing the new prompts as turn 2 at the top of the canvas.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Added two new prompts at the top of the canvas:

- **2a — Master build prompt**: full Ealch v2 spec for a coding agent — Expo/TS/Expo Router/Zustand/NativeWind stack, Supabase + Claude/ElevenLabs behind swappable ports (per your dependency-swap requirement), exact design tokens and all 22 screens from the mock, FSRS spaced repetition, EN+FR i18n with multi-language content architecture, RevenueCat, offline, push, haptics, analytics, a11y, testing, store prep, and the Ealch Admin remote-config contract.
- **2b — Phased series**: 6 paste-one-at-a-time phase prompts with exit criteria — Phase 1 delivers a fully usable offline-first study app before AI, monetization, etc. layer on.

Both have copy buttons. Suggested next step: sanity-check seed-content quantities in Phase 1 (unit/deck counts) against what you actually want to author.

