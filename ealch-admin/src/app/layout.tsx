import type { Metadata } from 'next';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import './tokens.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Ealch Ops Console',
  description: 'Internal admin for the Ealch language-learning app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <body
        style={{
          ['--font-ui' as string]: `${instrumentSans.style.fontFamily}, system-ui, sans-serif`,
          ['--font-serif' as string]: `${instrumentSerif.style.fontFamily}, Georgia, serif`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
