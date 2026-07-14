// Lets `import '../global.css'` typecheck. (Replaces nativewind-env.d.ts, which
// also pulled in nativewind's types — see metro.config.js for why it was removed.)
declare module '*.css';
