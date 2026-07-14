// Dev helper: print a current TOTP code for a seeded admin account.
// Usage: node scripts/totp.mjs [marc|ops|support|editor]   (default: marc)
// Secrets mirror scripts/seed.ts — dev seed data only, never real accounts.
import { generateSync } from 'otplib';

const ACCOUNTS = {
  marc:    { email: 'marc@ealch.app',    role: 'super_admin',    secret: 'CT5H7H335HFZFMFB7NPEKH7RFP2PM3M7' },
  ops:     { email: 'ops@ealch.app',     role: 'ops',            secret: '3HKLKJ2ZTWV5QWK4CK7Q6M5F4PVJZM7L' },
  support: { email: 'support@ealch.app', role: 'support',        secret: 'SWU3POH5RZGMQMQJXLKA2FO4LAVSLA3G' },
  editor:  { email: 'editor@ealch.app',  role: 'content_editor', secret: '3BWQGNJGBCDFP5VNNQ4L65FHM46OAAKD' },
};

const who = ACCOUNTS[process.argv[2] ?? 'marc'];
if (!who) {
  console.error(`unknown account — pick one of: ${Object.keys(ACCOUNTS).join(', ')}`);
  process.exit(1);
}
const secondsLeft = 30 - (Math.floor(Date.now() / 1000) % 30);
console.log(`${who.email} (${who.role})  password: admin1234`);
console.log(`TOTP code: ${generateSync({ secret: who.secret })}  (valid ~${secondsLeft}s)`);
