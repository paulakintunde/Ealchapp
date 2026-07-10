/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        serif: ['InstrumentSerif', 'Georgia', 'serif'],
        serifItalic: ['InstrumentSerifItalic', 'Georgia', 'serif'],
        sans: ['InstrumentSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
