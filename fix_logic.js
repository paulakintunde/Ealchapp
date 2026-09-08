const fs = require('fs');

let content = fs.readFileSync('./ealch-v2/src/store/entitlement.logic.ts', 'utf8');

// I seem to have broken the file structure earlier and it didn't revert fully because I might have run the patch before staging. Let's do a hard reset of this file to its original state from git index if it was tracked.
