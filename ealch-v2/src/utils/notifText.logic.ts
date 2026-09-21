// Notification and banner body formatting. ONE substitution for every
// notification body in the app: the scheduler (store/useStore.ts) and the
// in-app banner (components/PushBanner.tsx) must render the same template to
// the same text, so neither may hand-roll a .replace() chain again — that
// divergence is what shipped a device notification reading "…4 min with
// {name}." while the in-app banner read correctly.
//
// No RN / zustand / expo import may ever enter this file: it must keep loading
// under plain `node --test`, the way utils/time.ts does.

/** Substitute every `{key}` token in `template` with `values[key]`.
 *
 *  Literal replacement in ONE pass, never a template engine and never dynamic
 *  code execution: a substituted value that itself contains `{…}` is inert text, not a second
 *  round of substitution. Tokens with no supplied value are left standing on
 *  purpose — a visible `{who}` is a bug report; a silent blank is a bug that
 *  ships. */
export function formatNotifText(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (token, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? values[key] : token,
  );
}

/** Every `{key}` token a template declares, deduped, in first-appearance
 *  order. Used by the placeholder guard test to prove FR and EN declare the
 *  same values and that every declared value is actually supplied at the call
 *  site (06-CONTEXT.md D-07). */
export function placeholdersIn(template: string): string[] {
  return [...new Set(Array.from(template.matchAll(/\{(\w+)\}/g), (m) => m[1]))];
}
