// F9 — which learner-facing notes are written in FRENCH?
//
//   pnpm tsx scripts/find-french-notes.ts            counts and a sample
//   pnpm tsx scripts/find-french-notes.ts --list     id + note, one per line
//   pnpm tsx scripts/find-french-notes.ts --list --offset 40 --limit 40
//
// `noteFor()` hands `notes` straight to the card back and there is no localised
// variant, so whatever language the note was authored in is what the learner
// reads, whatever the interface is set to. The corpus is overwhelmingly English
// here; the French ones are the outliers, and they sit next to English ones in
// the same deck.
//
// WHY A SCORER RATHER THAN A KEYWORD LIST
//
// The first pass at this used a regex of French words and reported 99. A second
// one reported 568. Both were wrong in both directions: a French note quoting an
// English word escaped, and an ENGLISH note quoting French ("Often shortened to
// la géo", "Feminine: la surveillante") was dragged in. Almost every note in this
// corpus quotes French, because that is what it is teaching.
//
// So the test is comparative: count function words that only ever belong to one
// language, and ask which side wins. Function words are the right marker because
// they are the part a quotation does not usually carry.
import './env';
import { describeTarget } from './env';

/** French function words. Deliberately NOT nouns or verbs a quotation might
 *  carry; these are the connective tissue of a French sentence. */
const FR = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', "d'une", "d'un", 'au', 'aux',
  'est', 'sont', 'était', 'sera', 'a', 'ont', 'avec', 'pour', 'dans', 'sur', 'sous',
  'par', 'que', 'qui', 'quand', 'comme', 'mais', 'ou', 'et', 'ne', 'pas', 'plus',
  'ce', 'cet', 'cette', 'ces', 'son', 'sa', 'ses', 'leur', 'leurs', 'il', 'elle',
  'ils', 'elles', 'on', 'nous', 'vous', 'se', "s'", 'lui', 'y', 'en', 'entre',
  'toujours', 'jamais', 'souvent', 'très', 'aussi', 'donc', 'alors', 'ici',
  'devant', 'derrière', 'avant', 'après', 'chez', 'sans', 'même', 'autre',
  'quelque', 'tout', 'toute', 'tous', 'toutes', 'peut', 'faut', 'doit',
]);

/** English function words, the same job on the other side. */
const EN = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'has', 'have', 'had',
  'with', 'for', 'in', 'on', 'at', 'to', 'of', 'from', 'by', 'that', 'this', 'these',
  'those', 'which', 'when', 'where', 'while', 'and', 'or', 'but', 'not', 'no',
  'it', 'its', "it's", 'they', 'them', 'their', 'you', 'your', 'he', 'she', 'his',
  'her', 'we', 'our', 'means', 'use', 'used', 'uses', 'take', 'takes', 'say', 'says',
  'said', 'goes', 'go', 'gets', 'get', 'never', 'always', 'often', 'only', 'both',
  'after', 'before', 'here', 'there', 'than', 'then', 'so', 'if', 'as', 'about',
  'what', 'who', 'how', 'why', 'because', 'without', 'same', 'every', 'each',
]);

// `a` and `ou` are words in BOTH languages, and `en`/`on`/`son`/`or` collide too.
// A word that could be either says nothing about which language this is, so it
// scores for neither side.
const AMBIGUOUS = new Set(['a', 'ou', 'en', 'on', 'son', 'or', 'as', 'no', 'sale', 'pour', 'les', 'plus', 'note', 'point', 'sur', 'the']);

/** The vocabulary an ENGLISH note about French is written in. This is what
 *  function words alone could not settle: "Irregular verb; sortir avec des
 *  amis." is an English note whose only function words (avec, des) sit inside
 *  the French example it quotes without quote marks. One of these present and
 *  the note is being WRITTEN in English, whatever it quotes. */
const EN_MARKER = new Set([
  'verb', 'verbs', 'noun', 'nouns', 'adjective', 'adjectives', 'adverb', 'plural',
  'singular', 'feminine', 'masculine', 'ending', 'endings', 'silent', 'sound',
  'sounds', 'vowel', 'consonant', 'syllable', 'stress', 'spelling', 'spelled',
  'word', 'words', 'phrase', 'irregular', 'regular', 'related', 'informal',
  'formal', 'literally', 'usually', 'commonly', 'everyday', 'polite', 'common',
  'meaning', 'means', 'shortened', 'short', 'friend', 'takes', 'drops', 'keeps',
  'linking', 'liaison', 'pronounced', 'pronounce', 'written', 'speech', 'spoken',
  'answer', 'question', 'form', 'forms', 'past', 'present', 'future', 'tense',
]);

export function frenchScore(note: string): { fr: number; en: number; french: boolean } {
  // Drop quoted French: « … », "…", '…' and anything in backticks. What a note
  // QUOTES is the content; what surrounds it is the language it is written in.
  const prose = note
    .replace(/«[^»]*»/gu, ' ')
    .replace(/"[^"]*"/gu, ' ')
    .replace(/“[^”]*”/gu, ' ')
    .replace(/`[^`]*`/gu, ' ')
    .replace(/\[[^\]]*\]/gu, ' ');
  const words = prose.toLowerCase().normalize('NFC').match(/[\p{L}'’]+/gu) ?? [];
  let fr = 0;
  let en = 0;
  for (const w of words) {
    const k = w.replace(/’/g, "'");
    if (EN_MARKER.has(k)) en += 2;          // decisive: an English note about French
    if (AMBIGUOUS.has(k)) continue;
    if (FR.has(k)) fr++;
    else if (EN.has(k)) en++;
  }
  // French has to WIN, not merely appear: almost every note in this corpus
  // quotes French, so a note is only French when its own connective tissue is.
  return { fr, en, french: fr >= 2 && fr > en };
}

type Row = { id: string; fr: string; notes: string; theme: string };

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('No DATABASE_URL.');
    process.exit(2);
  }
  describeTarget();
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const { rows } = (await pool.query(
    `select id, fr, theme, notes from content_items
      where status = 'published' and notes is not null and btrim(notes) <> '' and notes not like '{%'
      order by id`
  )) as { rows: Row[] };

  const french = rows.filter((r) => frenchScore(r.notes).french);
  const arg = (n: string) => {
    const i = process.argv.indexOf(`--${n}`);
    return i >= 0 ? Number(process.argv[i + 1]) : undefined;
  };

  if (process.argv.includes('--list')) {
    const off = arg('offset') ?? 0;
    const lim = arg('limit') ?? french.length;
    for (const r of french.slice(off, off + lim)) {
      console.log(`${r.id}\t${r.fr}\t${r.notes.replace(/\s+/g, ' ')}`);
    }
  } else {
    console.log(`\n  ${rows.length} published notes, ${french.length} written in French.\n`);
    for (const r of french.slice(0, 8)) console.log(`  ${r.id}  ${r.notes.slice(0, 90)}`);
  }
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
