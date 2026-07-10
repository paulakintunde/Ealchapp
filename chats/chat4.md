# Ealch v2 admin dashboard

_Started 2026-07-10 19:29 UTC_

---

## User

Create a remote admin dashboard for the mobile app Ealch v2. The remote dashboard manages the entire app by the super admin. Billing, user tracking, updates, notification push in-app, analytics, content updates and push, content editing, AI models switch for general, content, audio, video. billing tracking, performance tracking, link tracking, and more.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: questions_v2]_

## User

Questions answered:
- fidelity: Clickable prototype — sidebar navigates between all sections, toggles/switches work
- sections: Overview / analytics, Users & tracking, Billing & revenue, Notifications (in-app push composer), Content editing + push, AI model switching, Performance monitoring, Link tracking, App updates / release management
- theme: Lighter 'ops console' take on the same brand
- data: Realistic fake data (users, MRR, charts)
- other: Extend the ideas to include standard features and special features that will make things easy for admin to manage.

## Assistant

Building the full clickable admin console now — light ops theme on the Ealch brand (dark rail, teal accent, Instrument type), 9 sections plus extras (feature flags, maintenance kill-switch, dunning retry, live notification preview).

_[tool: update_todos]_

_[tool: dc_write]_

## Assistant

Re-running the build — the write was interrupted.

_[tool: dc_write]_

_[tool: ready_for_verification]_

**Ealch Admin** is live — a full clickable ops console with 9 sections: Overview, Users (filterable table + CSV export), Billing (MRR chart, plan mix, dunning retry), Notifications (push composer with live iPhone lock-screen preview that updates as you type), Content (library with live toggles + OTA bundle push), AI models (routing per capability — general, content, audio, video — with live cost estimate), Performance (endpoints + incidents), Link tracking, and Releases (staged rollout controls, force-update, feature flags).

Extras: maintenance kill-switch in the sidebar, anomaly banner linking to Performance, and toast feedback on every action. Tweaks let you switch the accent color and hide the demo alert banner.

