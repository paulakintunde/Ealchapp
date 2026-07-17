# Ealch — Narration Engine Spec (Camille's voice)

How Camille narrates the app: the fixed-vs-live audio split, the guided-walkthrough playback engine, pace control, and Camille's on-screen presence. This is the feature that turns "read-and-tap" into "a teacher walks you through it."

**Build status:** there is no narration engine today. `src/services/tts.ts` speaks via **device `expo-speech` (fr-FR)** with a `slow` flag (rate 0.7 vs 0.95) and Android "not-bound" self-heal. The remote-TTS path (an `ealch-v2/supabase/functions/tts` Edge Function, ElevenLabs/Azure/Fish) is **stubbed and unreachable** — it falls through to device speech. Camille has **no avatar** (Home shows the user's own initial). Adjustable pace exists only as a fake prototype in `player.tsx`. So: the persona and a device-TTS fallback exist; the real engine is net-new.

---

## 1. The core principle: authored = fixed, runtime-generated = live

Every piece of narration is one of two kinds, decided by a single rule:

- **FIXED (pre-generated + cached):** the text is **authored and stable**. Generated once in the OPR studio, human-approved, stored, and shipped/streamed. Cost is paid once, latency is zero, quality and voice are consistent, and it works offline.
  - Den lesson narration (all 7 stages), drill **briefings**, word/phrase **pronunciations** (flashcards, voice-flash), **example** sentences, **dictation** audio, cheat-sheet read-alouds, exam **listening (CO)** audio, and even the **authored/scripted roleplay spine lines**.
- **LIVE (on-demand TTS):** the text is **generated per-user at runtime** and can't be pre-made.
  - Coach chat replies, personalized feedback ("to reach the next band, do X"), and only the **genuinely generated roleplay branch lines** (not the scripted spine).

> Nuance for roleplay: most roleplay lines are authored, so they are FIXED. Only lines the LLM generates on the fly are LIVE. This keeps the expensive path tiny.

This maps exactly to the decision already made: *pre-generate + cache for the Den and briefings; live only for dynamic roleplay/coach.* The rule above just makes "dynamic" precise: dynamic = generated at runtime, not merely "spoken."

---

## 2. Voice strategy: one Camille, everywhere

The persona breaks the moment Camille sounds different in two places. So:
- **One chosen neural voice IS Camille**, used for **both** batch generation (fixed) and low-latency calls (live). The provider must support both. Good candidates at ~$0.013–0.015/min: **Azure Neural (fr-FR, e.g. Denise/Vivienne), OpenAI `tts-1`/`gpt-4o-mini-tts`, Google Neural2, Amazon Polly Neural.** A distinctive **ElevenLabs** brand voice is possible but ~6–20× the cost and only worth it if the voice is a real differentiator.
- **Device TTS (`expo-speech`) is fallback only** — offline/last-resort. It varies per handset and sounds robotic, which is off-brand, so it must never be the primary Camille. Keep the existing self-heal logic for when it is the fallback.
- **Wire the stubbed `tts` Edge Function** to the chosen provider for the live path; add a **batch-generation path in the studio** for the fixed path (same voice/config).

Cost context (from the monetization doc): generating the entire corpus's fixed audio is a **~$50–150 one-time** spend at neural rates; live is bounded and cached. Voice choice barely moves unit economics — pick for quality/consistency, not price (except ElevenLabs, which is the one genuinely pricey option).

---

## 3. The guided-walkthrough playback engine (the Den experience)

The Den lesson plays like an **interactive audio lesson** — a podcast that pauses for you to practice. Two modes over the same audio (the learner's choice, already decided):

**Guided-autoplay (lean-back):**
- A persistent **narration bar** (Camille avatar · play/pause · speed · progress · replay-line).
- Narration is broken into **addressable segments** tied to content blocks/stages, each with **timestamps**.
- On-screen content **highlights in sync** with the spoken line (karaoke-style current-line highlight).
- At an **interaction point** (flip a card, say a line, choose an answer), narration **pauses and waits** ("Now you try — say it after me"), then resumes and **auto-advances** to the next stage when a stage completes.
- Full transport control: pause, scrub, replay a line, change speed.

**Self-pace (lean-in):**
- Same narration bar and per-segment audio, but **no auto-advance**. The learner taps to hear Camille and **swipes** to move between stages/questions themselves.

**Segment/timestamp model:** the studio emits, per narrated block, an audio file + a segment map (`[{blockId, startMs, endMs, text}]`). Line-level timestamps drive highlight and pause points; some providers return word/line marks natively, otherwise approximate at authoring. This same map powers the **player/episode** screen (which already has a timestamp concept) and exam listening.

**Drill briefings** reuse a stripped-down version: the briefing plays (auto or on tap), then the drill begins. No full transport needed — it's one short segment.

---

## 4. Pace control (slow / normal / fast)

- **Primary mechanism = playback-rate time-stretch** (change speed without pitch shift) in the audio player. One cached asset serves 0.75× / 1× / 1.25× / 1.5×. This makes the `player.tsx` speed picker real instead of a fake scrubber.
- **Pre-generate a genuine slow take** only where pronunciation fidelity matters and time-stretch artifacts hurt: **phonics (Sons), dictation, and word pronunciations.** (Dictation already ships a 2-speed idea.) So: time-stretch everywhere; a real slow render for the pronunciation-critical few.
- Live TTS: request the rate from the provider or time-stretch client-side.

---

## 5. Camille's on-screen presence

She's a voice with no face today. To feel like a teacher, she needs a consistent, warm presence — but not an expensive one.

**Decision:** a **static illustrated Camille character + a speech-reactive pulsing orb.** A designed, clearly-fictional character portrait (static, not a real-person likeness) paired with an animated **orb/waveform that pulses in time with her speech**, so she reads as "speaking now" without lip-sync. Shown consistently across: the **narration bar** (Den), **coach chat** (header + bubbles), **roleplay** (as the interlocutor), and **briefings**. No full lip-sync (cost/uncanny risk); no real person (impersonation/legal risk).

- The Camille character is a **brand asset to create** (producible via image generation for a consistent, clearly-fictional character). The pulsing orb is a lightweight animation driven by the audio amplitude/playback state.
- Everything narrated also shows the **text** (captions), so Camille is always readable, not just audible (accessibility + noisy environments).

---

## 6. Caching, delivery & offline

- **Fixed audio:** studio generation → media library (**R2 / Supabase Storage**, Gate R) → referenced by `audioRef` on items/segments → shipped in the **OTA content snapshot** or streamed, then **cached on device**. Cached fixed audio is what makes **offline Den lessons** (the premium Downloads feature) possible.
- **Live audio:** client → `tts` Edge Function → provider → audio back, **cached client-side by text hash**, and optionally server-side so a recurring generated line becomes effectively fixed over time (the live set converges toward cached).
- **Offline:** fixed narration works offline once downloaded; live features (coach, generated roleplay) require a connection and degrade gracefully (device-TTS fallback or a "needs connection" state).

---

## 7. Accessibility & honesty
- **Captions/transcripts** for all narration (the text already exists since it's authored).
- **Adjustable speed + replay-line** for learners who need repetition.
- **Highlight sync** aids comprehension and low-literacy learners.
- **No fake audio state:** if the real voice can't load and we fall back to device TTS, that's fine (it still speaks), but never show a "Camille premium voice" indicator when it's actually device TTS.

---

## 8. What's net-new vs reused
- **Reuse:** `tts.ts` device path (as fallback, keep self-heal), the `player.tsx` speed picker (make real), the timestamp concept, the coach persona/system prompt, the roleplay speaker button.
- **Net-new:** the fixed-audio **batch-generation path** in the studio; wiring the **live `tts` Edge Function** to a real provider; the **narration player** (segments, timestamps, highlight sync, pause-at-interaction, transport, time-stretch); the **Camille avatar** asset + speaking animation; client + server **audio caching by hash**.

---

## 9. Resolved decisions
- **A) Voice = neural baseline.** One fr-FR neural voice (Azure / OpenAI / Google / Polly, ~$0.014/min) is Camille everywhere, batch + live. ElevenLabs not needed for launch. (A short voice audition on real lesson lines before locking the exact voice is worth doing.)
- **B) Presence = static illustrated character + a speech-reactive pulsing orb.** A designed, clearly-fictional Camille character (static portrait) paired with an animated orb/waveform that **pulses in time with her speech**. Shown consistently in the narration bar, coach chat, roleplay, and briefings. No lip-sync, no real-person likeness. Camille character art is a brand asset to create.
- **C) Pace = time-stretch + real slow for phonics.** Playback speed-change (no pitch shift) from one asset everywhere; a genuine slow render only for pronunciation-critical content (phonics/Sons, dictation, word pronunciations).
