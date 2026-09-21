---
phase: 06
slug: notification-correctness-body-format-toggles
status: verified
threats_open: 0
asvs_level: 1
created: 2026-09-21
---

# Phase 06 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.

---

## Trust Boundaries

| Boundary | Description | Data Crossing |
|----------|-------------|---------------|
| app state → notification body | The only values reaching a notification body are `formatTime(alarmTime, clock24)` output and `avatarName(avatarId)`, both closed-set, app-derived, never free user text. | Time string, coach display name |
| app → OS notification tray | Bodies are plain text rendered by the OS tray. No markup, no HTML, no URL is interpolated. | Plain text notification body |
| app → OS scheduler (expo-notifications) | Local, on-device scheduling only. No push token is registered, no remote dispatch exists, nothing leaves the device. | Schedule triggers, identifiers |
| persisted toggle state → OS scheduler | `notifs` is a per-device preference in AsyncStorage. It gates only local notification scheduling; no server reads it and no entitlement depends on it. | Boolean toggle state |
| session-end event → notification scheduling | The listener runs in-process, fired by the same callback that writes the session log. It carries no user-entered text. | Session-complete event |
| app → OS notification tray on a locked device | The body is readable by anyone who can see the lock screen. | Rendered notification text |

---

## Threat Register

| Threat ID | Category | Component | Disposition | Mitigation | Status |
|-----------|----------|-----------|-------------|------------|--------|
| T-06-01 | Tampering | `formatNotifText` substitution | mitigate | Single-pass `String.replace` with a function replacer — never `eval`, never `new Function`, never a template engine. `notifText.logic.ts:18-22`; `grep -c "eval\|new Function"` = 0; single-pass inertness proven by test. | closed |
| T-06-02 | Information disclosure | `reportBody` / `nudgeBody` copy | mitigate | Templates interpolate only the coach display name. `strings.ts:605-606,1057-1058` declare only `{name}` in FR+EN, confirmed by `notifPlaceholders.test.ts`. | closed |
| T-06-03 | Spoofing | `NOTIF_CHANNEL_ID` | accept | Local channel id is not a credential; asserted equal to the one registered in `app/_layout.tsx:63`, confirmed by 2 tests. | closed |
| T-06-04 | Elevation of privilege | — | accept | No auth, session, access-control or crypto surface added; both logic files are zero-import (`grep -c "^import"` = 0 each). | closed |
| T-06-05 | Denial of service | `cancelKind` / `scheduleDaily` vs `cancelAllScheduledNotificationsAsync` | mitigate | `cancelAllScheduledNotificationsAsync` appears exactly once, inside `cancelAll()` (`notifications.ts:144`); per-kind cancel uses `cancelScheduledNotificationAsync`. Pinned by `notifications.guard.test.ts`. | closed |
| T-06-06 | Tampering | `pruneUnknown` cancelling requests it does not recognise | accept | Only calls `getAllScheduledNotificationsAsync`/`cancelScheduledNotificationAsync`, both OS-scoped to this app's own local schedule. | closed |
| T-06-07 | Information disclosure | Notification `content.body` on a locked screen | mitigate | `notifications.ts` never imports the i18n table or constructs a body; `grep -c "i18n/strings\|formatNotifText\|\.replace("` = 0 (verified live). | closed |
| T-06-08 | Repudiation / Elevation of privilege | — | accept | No auth, session, access-control or crypto surface in `notifications.ts` (Plan 02 scope). | closed |
| T-06-09 | Tampering | `formatNotifText` call sites | mitigate | Every call site passes a closed `{t, name}` map only; no free user text (userName/email) interpolated. Pinned by `notifPlaceholders.test.ts`; `.replace('{` = 0 in both `useStore.ts` and `PushBanner.tsx`. | closed |
| T-06-10 | Information disclosure | Device notification rendering on a locked screen | mitigate | Same evidence as T-06-02/T-06-09 — only time and coach name ever reach a body. | closed |
| T-06-11 | Tampering | Placeholder left literal when a value is missing | mitigate | `formatNotifText` leaves an unsupplied token visible rather than blanking it — loud test failure, not silent truncation, for the real shipped templates. | closed |
| T-06-12 | Spoofing / Repudiation / Elevation of privilege | — | accept | No auth, session, access-control or crypto surface added by Plan 03 (call-site wiring only). | closed |
| T-06-13 | Denial of service | `setNotif` toggle-off path | mitigate | Every toggle-off calls `notifications.cancelKind(k)`; `cancelAll()` remains reachable only from `eraseLocalData` (`grep -c "notifications.cancelAll()"` = 1, verified live). | closed |
| T-06-14 | Tampering | `resyncNotifs` running on every launch | accept | Only reschedules/cancels per the persisted `notifs` toggle state already on-device; no server or entitlement state is touched. | closed |
| T-06-15 | Information disclosure | Report notification on a locked screen after a session | mitigate | `reportBody` interpolates only the coach display name; guard test fails if a second token appears. | closed |
| T-06-16 | Elevation of privilege | Permission-denial handling | mitigate | On native denial `enableNotifKind` reverts the toggle to false, no retry/workaround path exists. | closed |
| T-06-17 | Repudiation | Session log vs notification scheduling | mitigate | `useProgress.ts:296-306` fires the report listener AFTER `logSession`, wrapped in try/catch — a scheduling failure cannot roll back or block the practice record. | closed |
| T-06-18 | Spoofing | — | accept | No auth, session or identity surface in Plan 04's scope. | closed |
| T-06-19 | Information disclosure | Notification bodies on a locked screen (device verification) | mitigate | Human device verification, `06-05-SUMMARY.md` Checks A/C/D — observed tray text named only a time and the coach character. | closed |
| T-06-20 | Denial of service | Per-kind cancellation on real hardware | mitigate | Human device verification, `06-05-SUMMARY.md` Check B — daily reminder still arrived after toggling nudge on then off. | closed |
| T-06-21 | Tampering / Spoofing / Elevation of privilege | accept | No auth, session, access-control or crypto surface exists in Plan 05, and no network call is made by any code this phase added (Plan 05 modifies no source files). | closed |

*Status: open · closed*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

---

## Accepted Risks Log

| Risk ID | Threat Ref | Rationale | Accepted By | Date |
|---------|------------|-----------|-------------|------|
| R-06-01 | T-06-03 | `NOTIF_CHANNEL_ID` ('practice-reminders') is a non-secret local delivery identifier, not a credential; spoofing it has no security consequence, only a delivery-correctness one (Android 8+ silently drops unregistered channels). Reopens if a future channel is used to gate a privileged action. | gsd-security-auditor | 2026-09-21 |
| R-06-02 | T-06-04 | Phase 06 adds no auth, session, access-control, or crypto surface (`notifText.logic.ts`, `notifSchedule.logic.ts` are pure, zero-import data/formatting modules); notification toggles are per-device preferences. Reopens if a future phase makes a `notifs` toggle gate server-side behavior or entitlement. | gsd-security-auditor | 2026-09-21 |
| R-06-03 | T-06-06 | `pruneUnknown()` only ever calls OS-scoped local APIs; it cannot see or touch another app's notifications, and worst case is dropping one orphaned pre-Phase-6 reminder. Reopens if pruning logic is ever pointed at a cross-app or server-side notification store. | gsd-security-auditor | 2026-09-21 |
| R-06-04 | T-06-08 | No auth, session, access-control, or crypto surface exists in `services/notifications.ts` (Plan 02): toggle state is a per-device preference, not a privileged operation, and no server trusts it. Reopens if a server begins trusting local notification-scheduling state as an audit or authorization signal. | gsd-security-auditor | 2026-09-21 |
| R-06-05 | T-06-12 | No auth, session, access-control, or crypto surface added by Plan 03 (call-site wiring of `formatNotifText` into `useStore.ts`/`PushBanner.tsx`). Reopens if future call sites interpolate identity-bearing or privileged data into a notification body. | gsd-security-auditor | 2026-09-21 |
| R-06-06 | T-06-14 | `resyncNotifs()` reschedules/cancels only what the persisted `notifs` toggle blob already says; a user editing their own local AsyncStorage only changes their own device's reminder behavior. Reopens if `notifs` or any resynced value is read by server-side logic or another user's device. | gsd-security-auditor | 2026-09-21 |
| R-06-07 | T-06-18 | No auth, session, or identity surface exists in Plan 04's scope (toggle-to-scheduler wiring, injected `useProgress` → `useStore` listener). Reopens if a future phase ties notification toggle state to identity or session validity. | gsd-security-auditor | 2026-09-21 |
| R-06-08 | T-06-21 | Plan 05 (device verification) modifies no source files, adds no network call, and has no auth/session/access-control/crypto surface. Reopens if a future device-verification plan gains write access to source or introduces a network call. | gsd-security-auditor | 2026-09-21 |

*Accepted risks do not resurface in future audit runs.*

---

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-09-21 | 21 | 21 | 0 | gsd-security-auditor |

---

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-09-21
