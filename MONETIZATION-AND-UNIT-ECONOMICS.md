# Ealch — Monetization & Unit Economics

Grounded in current (2026-07-15) pricing research across TTS/STT, LLM, payment processors, ads, affiliate, and competitor subscriptions. All per-user figures are modelled; assumptions are stated so you can flex them.

> **Corrected 2026-07-17:** this doc originally modelled the annual tier at $59.99/yr; the shipped/pinned price is **$79/yr** (`src/content/pricing.ts`). The annual row and Premium tier line below are now stated at $79/yr, with contribution/margin recomputed using the same net-revenue formula as the rest of this table (price × 0.971 − $0.30 Stripe fee). Conclusion is unchanged: still comfortably margin-rich.

---

## Headline

**Ealch is cheap to serve and margin-rich. The business is acquisition/conversion-constrained, not cost-constrained.**

Three architecture choices already made drive this:
1. **On-device STT = $0 at the margin.** Every speaking/pronunciation drill costs nothing to run.
2. **Cached narration = one-time cost.** Den + briefing audio is generated once at authoring and replayed to everyone.
3. **Coach on a cheap model tier = pennies.** The only real recurring variable cost, and it's ~$0.05–0.28/user/month.

The largest *leak* is not AI — it's **payment take** (30% via app stores vs ~2–6% via web checkout). Where you take payment moves the model more than any cost line.

---

## 1. Cost structure

| Bucket | Type | Driver | Modelled cost |
|---|---|---|---|
| STT (speaking drills) | Variable | on-device | **$0** |
| Cached narration audio | One-time (amortized) | authoring | ~$0/user |
| Coach chat (LLM) | Variable | turns/month | $0.0015/turn (Gemini 3 Flash) |
| Live TTS (dynamic roleplay/coach voice) | Variable | interactions | ~$0.006–0.007 / 5-line exchange |
| Infra (Supabase, storage/R2, bandwidth) | Variable | per user | ~$0.10–0.25/user/mo |
| Content generation (text) | One-time | ~750 packs | **~$60–77** total (mid model); ~$3 on DeepSeek |
| Content narration (audio) | One-time | ~750 packs × ~5 min | **~$50–150** total |
| Native review (Gate H) | One-time + ongoing | high-stakes packs | **~$2.5–5k** (the real content cost line) |

**Verified unit prices (2026):**
- **LLM coach, cheap tier:** Gemini 3 Flash $0.50/$3.00 per 1M in/out → **$0.0015/turn** (1500 in + 250 out); Claude Haiku 4.5 → $0.00275/turn; DeepSeek V3.2 → $0.0005/turn. Premium (Opus 4.8 / GPT-5.6 Sol) → ~$0.014–0.015/turn (5–8× more).
- **LLM content gen:** ~$0.08–0.10/pack on a mid model (Gemini 3.1 Pro / Sonnet 5) → ~$60–77 for the whole corpus; ~$0.004/pack (~$3 total) on DeepSeek.
- **TTS narration:** ~$0.013–0.015 per narrated minute (OpenAI tts-1, Azure/Google Neural2, Polly Neural); floor **$0.0036/min** (Google WaveNet); ElevenLabs $0.09–0.27/min (hero voices only).
- **TTS live turn:** <$0.01 per 5-line exchange on any neural provider; ~$0.0016 on WaveNet. Cache static lines toward $0.
- **STT:** on-device $0; cheapest cloud fallback (if server-side scoring needed) Deepgram Nova-3 / gpt-4o-mini-transcribe ~$0.003–0.005/min.

---

## 2. Payment economics by market (net on a $10/mo sub)

| Route | Net on $10 | Take | Use for |
|---|---|---|---|
| **Stripe web (US)** | **$9.36–9.41** | ~6% | Global/Western default |
| **Paystack web (Nigeria, local card)** | **$9.78** | ~2.2% | Africa default (nearly leak-free) |
| Apple/Google IAP 15% (small-biz / sub after 12 mo) | $8.50 | 15% | Fallback |
| Apple/Google IAP 30% (standard) | $7.00 | 30% | Worst case |

**The lever:** web checkout keeps **~34% more revenue/subscriber (~$28/yr)** vs 30% IAP. **US timing is favorable now** — post-2025 Epic rulings, both Apple and Google currently allow external payment links at ~0% commission in the US (Apple interim; Google pending an Apr 2026 hearing, new ~10–20% tiers proposed for Jun 2026). EU is messier (DMA link-out offset by Apple's Core Technology Fee / Google's External Offers Program). **Recommendation: web-checkout-first, IAP as fallback.** Re-check Apple/Google rules before launch — they are time-sensitive.

---

## 3. Ads & affiliate (the honest ceiling)

- **Ads (free tier only):** US/EU engaged free user ≈ **$0.30–1.20/mo**; Nigeria/Africa ≈ **$0.02–0.12/mo** (pennies). Education apps run low ad frequency (interstitials hurt retention). **Do not fund the free tier on African ad revenue.** Ads are a Tier-1 top-up.
- **Affiliate:** a **5–15% top-up**, not a pillar. Best: italki/Preply tutoring (~$10–30/conversion), recurring course affiliates (Lingopie/Copycat ~30% recurring), and — uniquely valuable here — **TEF/TCF-Canada immigration/study-abroad lead-gen** (high-ticket, but needs direct B2B deals, not a network). Exam registration itself has no affiliate rails.

---

## 4. Per-user contribution model

**Assumptions:** coach on cheap tier (Gemini 3 Flash); avg paying user = 100 coach turns + 20 live-TTS exchanges/mo → variable COGS ≈ **$0.50/user/mo**; heavy user (300 turns) ≈ $1.10 (cheap model) or ~$4.87 (premium model); free user (capped ~30 turns) ≈ **$0.18/user/mo**.

### Paying subscriber

| Segment | Price | Route | Net rev | Variable COGS | **Contribution** | Margin (of net) |
|---|---|---|---|---|---|---|
| Global monthly | $9.99 | Stripe web | $9.40 | $0.50 | **$8.90** | 95% |
| Global annual | $79/yr (=$6.58/mo) | Stripe web | $6.37/mo | $0.50 | **$5.87/mo** | 92% |
| Immigration/Exam | $14.99 | Stripe web | $14.10 | $0.60 | **$13.50** | 96% |
| Africa PPP monthly | $3.00 | Paystack | $2.93 | $0.45 | **$2.48** | 85% |
| Africa PPP annual | $19.99/yr (=$1.67/mo) | Paystack | $1.63/mo | $0.45 | **$1.18/mo** | 72% |
| Any market via IAP 30% | $9.99 | Apple/Google | $6.99 | $0.50 | **$6.49** | 93% |

Even the **worst realistic case** (heavy user, premium model, IAP 30%): $6.99 − $4.87 = **+$2.12**. There is no configuration where a paying user loses money *if the coach defaults to a cheap tier*. Premium-brain coach is the one thing to gate to a paid/"tutor" add-on or cap.

### Free user

| Market | Ad rev/mo | Variable COGS | **Net** |
|---|---|---|---|
| US / EU | $0.30–1.20 | $0.18 | **+$0.12 to +$1.02** |
| Africa | $0.02–0.12 | $0.18 | **–$0.06 to –$0.16** |

**African free users are slightly net-negative.** Mitigations: cap free coach turns (or make the live coach a premium feature for the free tier), keep the free tier cached-content-heavy (zero marginal cost), and convert to a cheap PPP sub. Immaterial at small scale; watch it at millions.

---

## 5. Break-even

- **One-time content build:** ~$3–6k (dominated by native review, not AI/audio, which total ~$110–230).
- **Fixed monthly:** Supabase/infra base (~$25–100/mo early) + optional reviewer retainer.
- At **$8.90 contribution** (global monthly sub), covering a $6k content build takes **~675 subscriber-months** — e.g. ~57 sustained subscribers for a year, or a few hundred subs for a couple of months.

**Conclusion:** break-even is trivially low. Spend energy on acquisition and free→paid conversion (~3–5% is the freemium norm), not on shaving cents off AI.

---

## 6. Recommended monetization structure

**Model: freemium subscription, web-checkout-first, PPP-tiered, with ads + affiliate as supplements.** (Recurring AI + content-refresh costs argue against a pure lifetime unlock; offer annual, and optionally a lifetime deal as an occasional cash-injection promo.)

**Tiers:**
- **Free** — the funnel. Generous cached content (see gating map), on-device STT drills, Smart Review, a daily-capped coach. Ad-supported (Tier-1 mainly).
- **Premium** — $9.99/mo or $79/yr (Western); **PPP-adjusted to ~$2–4/mo in Africa via Paystack**. Unlimited coach (cheap tier), live roleplay, all levels/themes, offline, ad-free.
- **Premium + Exam** (or an Exam add-on) — $14.99/mo or an "exam bootcamp" one-time pack, targeting the TEF/TCF/DELF immigration segment (highest willingness to pay; the market's clear gap).

**Payment routing:** Stripe web (US/EU/CA) + Paystack (Africa) as primary; IAP as fallback where store rules require. Steer to web wherever currently permitted (US ≈ 0% right now).

**Positioning vs market:** competitors cluster at ~$7–8/mo annual; SavoirX (the direct exam rival) ~€12/mo. Ealch's defensible wedge = **PPP pricing for Francophone Africa + genuine TEF/TCF/DELF exam simulation**, which no major player fully serves.

---

## 7. Premium gating map (tied to cost)

| Feature | Free | Premium | Why |
|---|---|---|---|
| Den early levels (A0–A1), cached audio | ✅ | ✅ | ~$0 to serve; drives funnel |
| Flashcards / Voice Flash / Sentences / Dictée drills (on-device STT) | ✅ (sampled) | ✅ (full) | ~$0 to serve |
| Smart Review (SRS) | ✅ (basic) | ✅ (full) | cheap |
| Coach chat (live LLM) | ⚠️ daily cap | ✅ unlimited (cheap tier) | the one recurring cost |
| Live roleplay conversation | ⚠️ limited | ✅ | live AI cost |
| All levels/themes unlocked | ❌ | ✅ | value gate |
| Examiner: full exam series + AI marking | ❌ | ✅ (Exam tier) | high-intent, high-value |
| Offline downloads | ❌ | ✅ | value gate |
| Ad-free | ❌ | ✅ | — |
| Premium-brain coach (Opus/GPT tier) | ❌ | Exam/tutor add-on | 5–8× cost |

Note the elegance: the premium gates are *exactly* the features that cost money to serve (live AI, premium brain) plus the high-intent exam prep people will pay for. Free stays generous because cached content + on-device STT are nearly free.

---

## 8. Risks & levers
- **Biggest lever:** payment routing (web vs IAP) — worth ~$2.40/sub/mo. Re-verify Apple/Google rules pre-launch (time-sensitive).
- **Biggest cost risk:** premium-brain coach on free/low-price users. Mitigate with default cheap tier + turn caps.
- **Free-tier drain in Africa:** ads don't cover it; rely on conversion, cap live AI.
- **FX & PPP:** African pricing must be local-currency and PPP-set, or it won't convert; Paystack settles local and is nearly leak-free.
- **Content quality cost (Gate H native review):** the one line that's actually meaningful — budget ~$3–5k for launch coverage of high-stakes content.

---

## Sources & caveats (all accessed 2026-07-15)
- **Payments:** Stripe, Paystack, Flutterwave, Apple SBP, Google Play service-fee pages; Epic-ruling coverage (MacRumors Dec 2025, RevenueCat). Stripe US/EU per-card figures cross-checked against stable published rates (live page geo-redirected). Apple 15%-after-12-mo and US 0% external-link are condition/time-dependent.
- **LLM:** Anthropic (claude-api skill, 2026-06-24), OpenAI, Google Gemini, DeepSeek (Artificial Analysis/OpenRouter). 2026 model names rolled forward (GPT-5.6 series, Gemini 3.x); Claude prices confirmed.
- **TTS/STT:** ElevenLabs, Azure, Google, OpenAI, Polly, Fish, PlayHT, Deepgram official pages + 2026 secondary write-ups. Azure/Deepgram numbers are JS-rendered (confirm with a click); PlayHT per-char rate least certain.
- **Ads/affiliate/competitors:** MonetizeMore, AdReact, Playwire (eCPM); Copycat Cafe, italki, Preply/Cuelinks (affiliate); LanguageAppGuide, Lingoly, PricingNow, SavoirX (competitor pricing). Nigeria eCPM is the standard Tier-3 band applied to region (directional, not precise).
