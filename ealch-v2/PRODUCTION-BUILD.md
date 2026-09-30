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

## Known caveat

EAS builds read the EXPO_PUBLIC values from the local `.env`, which is uploaded
with the build archive. That file also holds server-only keys (they are never
bundled into the app, only uploaded to the EAS build machine). Before the first
store build, consider moving the EXPO_PUBLIC values to EAS environment variables
(`eas env:create --environment production`) and adding `.env` to the root
`.easignore`. Not done yet: it changes how preview builds get their values.
