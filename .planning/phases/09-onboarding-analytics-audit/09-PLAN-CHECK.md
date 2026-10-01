# Phase 9 plan check

**Checked:** 2026-09-29
**Verdict:** Ready to execute Plan 01. Phase completion remains gated on Plan 06 device and capture proof.

| Gate | Result | Evidence |
|---|---|---|
| Roadmap boundary | Pass | Six plans cover the existing wizard/placement and engagement, acquisition, activation analytics; no unrelated growth feature. |
| Requirements | Pass | QA-01 is assigned to Plans 02, 03, 06; QA-02 to Plans 01–06. |
| Discussion decisions | Pass | D-01 through D-25 each appear in a relevant plan's task action, read-first, or proof gate; 25/25 ID coverage. |
| UI contract | Pass | Plans 02/03 read approved 09-UI-SPEC.md, use its recovery copy, hierarchy, accessibility, theme and large-text rules. |
| Dependencies | Pass after correction | 01 → 02/04/05 → 03 → 06. Plan 03 now depends on 02 because both edit `useStore.ts` and `strings.ts`; the executor will not run those edits concurrently. |
| Plan structure | Pass | All six pass GSD `verify plan-structure` and `frontmatter validate --schema plan`; every task has `read_first`, `action`, `verify`, and `acceptance_criteria`. |
| Security | Pass | All six include a `<threat_model>`; high-severity disclosure/linkage/evidence threats have explicit mitigations. |
| Validation | Planned | 09-VALIDATION.md maps all 12 tasks; real tests and device observations remain pending execution. |
| Schema push | Not applicable | No `supabase/migrations/*.sql` or other ORM schema files are in plan scope. |

The legacy GSD `gap-analysis` command scans **all** requirements in `.planning/REQUIREMENTS.md`, so it reports 33 requirements owned by other phases as uncovered by Phase 9. This is not a Phase 9 gap. It also did not enumerate the context decisions in this repository's `## Implementation Decisions` format. The phase-scoped checks above compare QA-01/QA-02 and D-01..D-25 directly.

## Source-level review corrections

- **Account linking:** Supabase can return an obfuscated signup user for an existing email when confirmation is enabled. Plan 01 now requires both the returned signup user ID and a random signup metadata nonce to match the later authenticated session before linking a guest journey. The PostHog identity operation must still be proved in a disposable project. See [Supabase signup behavior](https://supabase.com/docs/reference/javascript/v1/auth-signup).
- **Reminders:** The store initializes `notifs.daily` to `true`; Plan 02 now turns it off through `setNotif('daily', false)` when the learner skips, preventing later scheduling without permission.
- **Placement:** Plan 03 now records question-load failure when detected, while a successful Retry can still become the initial result. Only Continue makes load failure the terminal initial outcome.
- **Lesson and streak:** Plan 05 waits until `LessonPager` content is visible after the first-run intro or resume recap. It reads the actual `streak(...).days` field and existing freeze value; `streak.length` does not exist.
- **Native and proof:** Plan 04 guards the Android module import on iPhone. Plan 06 now includes completed lessons, exam and streak routes, and routes any critical failure to a targeted Phase 9 gap-closure plan.

Plan 04 must compile the Android native module and later prove Play-delivered attribution. These are execution gates, not assumptions that the research pass established as working.

The dedicated GSD researcher, pattern-mapper, planner and plan-checker agent types are not exposed in this Codex runtime. Research, mapping, planning and checker review were performed locally against the GSD workflow and CLI structure checks.


## Independent re-check 2026-09-30

The checks above were done by the agent that wrote the plans. On 2026-09-30 three separate agents reviewed the phase: a GSD plan checker (plans and docs), a GSD UI checker (UI-SPEC against code), and a GSD code reviewer (Plan 08 code).

**Plan checker: FAIL on the first amended draft**, then addressed:

| Finding | Severity | Resolution |
|---|---|---|
| Preview build `7c519ae0` predates Plan 08, so the outbox and fixes cannot be proven on it | Blocker | Plan 06 Task 0 requires a build from a commit that includes Plan 08; prerequisite row added as Blocked until committed and rebuilt |
| Plan 06 still treated iPhone as a hard gate while D-22/D-23 is open | Blocker | iPhone isolated in Plan 06 Task 5 with both outcomes (enroll and run, or move to a named gate) |
| Android sandbox purchase needs a Play testing track, which D-26 deferred | Blocker | Separate prerequisite row "Play internal-track upload (purchase only)", owner Paul; Plan 06 Task 4 stays blocking without it |
| Task 2 still one large checkpoint | Major | Split into Tasks 2 (onboarding/placement), 3 (engagement, acquisition, offline, D1), 4 (purchase), 5 (iPhone) |
| Fresh install had no route if approval is withheld | Major | Task 0 names alternatives and escalates blocked rows to Paul |
| read_first cited only D-01..D-25; gap-closure rule conflicted with D-30 | Major | Plan 06 cites D-26..D-30 and states one triage rule |
| Funnel restated with a missing step | Minor | Plan 06 points to the single definition in 09-EVENT-AUDIT.md |
| Plan 08 omitted 09-EVENT-AUDIT.md from files_modified; Plan 07 lacked depends_on 03 | Minor | Fixed |
| Plans 07 and 08 were written after the work | Minor | Stated in both plans; they record history, not pre-verified plans |
| Two status wordings contradicted D-26 | Minor | Fixed in VALIDATION and DEVICE-EVIDENCE |

**Code reviewer:** no critical finding. Two major (captive-portal 200 emptying the outbox; no fetch timeout) and five minor (outdated-checkpoint double initial start, duplicate on partial flush, malformed entry blocking, ordering of a queued `$identify`, 408 and test gaps). All addressed in Plan 08 Task 4 with tests. Accepted limitation: a send that PostHog accepted but whose response was lost is resent with the same event ID; PostHog deduplication by ID is not guaranteed.

**UI checker:** no blocker; see 09-UI-SPEC.md "Independent check 2026-09-30".

Remaining process note: GSD agent types were available in this runtime, so later phases should use them rather than self-review.
