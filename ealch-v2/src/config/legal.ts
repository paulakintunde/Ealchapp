// Legal document URLs surfaced in the sign-up consent line, and the deep link
// Supabase sends users back to after a password-reset email.
//
// The reset link must ALSO be added to Supabase → Authentication → URL
// Configuration → Redirect URLs, or Supabase refuses to redirect to it.
export const LEGAL = {
  termsUrl: 'https://www.ealch.com/terms',
  privacyUrl: 'https://www.ealch.com/privacy',
};

/** Where Supabase sends the recovery link. Matches `scheme: "ealch"` in app.json. */
export const RESET_REDIRECT = 'ealch://reset';
