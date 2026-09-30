# Production build: ready, waiting on the Play account

Prepared 2026-09-30. Nothing here has been built or submitted. The profile is
pinned by `src/config/easProfiles.test.ts`.

## What is ready

- `eas.json` `build.production`: Android App Bundle (`app-bundle`), channel
  `production`, `autoIncrement` versionCode (source: EAS remote),
  `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=false` so store installs are real analytics.
- `submit.production`: Play `internal` track first, key at
  `./play-service-account.json`. That file is gitignored and kept out of the
  EAS upload (root `.easignore`); it never goes in the repo.
- Signing: the EAS-managed Android keystore already exists (wonerocks-team/wonerock).
- App identity: package `app.ealch.mobile`, runtime policy `fingerprint`, updates
  URL set in `app.json`.
- Content: the packs regime is live (free core + private packs), so a store
  build downloads only what the account is entitled to.

## When the Play Console account exists (in order)

1. Play Console: create the app, package `app.ealch.mobile`. Fill the store
   listing, content rating, data safety (audio recorded for speech practice,
   account email, purchase history) and the privacy policy URL.
2. Build: `npx eas build -p android --profile production`.
3. **Upload the first .aab by hand** in Play Console (internal testing). Google
   refuses API uploads for an app that has never had a release.
4. Service account: Google Cloud, create one, grant it release rights in Play
   Console, save its JSON as `ealch-v2/play-service-account.json`. From then on:
   `npx eas submit -p android --profile production --latest`.
5. Subscriptions: create the Première monthly and annual products in Play
   Console with the same product ids Adapty uses, then in Adapty connect Google
   Play (package name, the service account, real-time developer notifications).
   Test with a licence tester account before any real card.
6. OTA fixes for store installs: `eas update --channel production` (same
   fingerprint only; a native change needs a new build).

## Where the public values come from

Since 2026-09-30 the nine `EXPO_PUBLIC_` values live in the EAS **preview** and
**production** environments (production has `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=false`).
`eas.json` names each profile's environment, and the root `.easignore` keeps
`.env` out of the upload, so the server-only keys it also holds no longer go to
the EAS build machine. OTAs (`eas update --environment …`) read the same
environments. A new `EXPO_PUBLIC_` line in `.env` must be created in both EAS
environments too (`eas env:create`), or builds and OTAs ship without it.

The first build after this change is the proof: before installing it, grep its
bundle for the Supabase project ref (the check in `ealch-admin`'s playbook §6.20).
