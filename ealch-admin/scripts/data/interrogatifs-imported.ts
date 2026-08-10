// a1.20's IMPORTED and REUSED manifests: a RECORDED READ of Postgres taken on
// 2026-08-07 by scripts/_interrogatifs_manifest.ts, so the merge can write these
// rows into seed.json without a connection.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_interrogatifs_manifest.ts > scripts/data/_interrogatifs-manifest.gen.txt
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at. Only the `why` lines are written by hand; every
// other character is generated.
//
// ── Why the import is this large ───────────────────────────────────────────
//
// `questions` is OUTSIDE `SEED_CUT.themes`. 502 rows are published and SEVEN are
// in the seed, which is 1.4% of the theme. So almost everything a1.20 names has
// to be carried or it renders as an empty card. That is correct behaviour and
// not a failed merge, and it is the opposite of a1.17's position with `famille`,
// which is inside the cut and needed twelve rows carried in total.
//
// The seven rows already in the seed are fr.sons.questions.001 (qui),
// .019 (quelle heure est-il ?), .020 (à quelle heure ?), and four weather and
// yes-no sentences a1.10 and a1.12 pulled in. Three of those seven are REUSED
// here; the other four are nothing to do with this lesson.
//
// ── Nothing below is re-authored, and that is a hard gate ──────────────────
//
// All twelve question words already exist as published headwords, in TWO themes.
// `flashhub-coverage.test.ts` treats two rows sharing an `fr` within one theme as
// one card served twice, so authoring any of them again would fail the build.
// The lesson binds to `questions` and imports that theme's slice; the parallel
// slice at fr.a1.questions-du-quotidien.151-158 is left alone and carries no
// respellings at all, which is why it was not chosen. See the corpus header.
//
// ── The rows reproduced here with their BROKEN respellings ────────────────
//
// `quand` (KAHN), `comment` (koh-MAHN), `combien` (kohn-BYAN), `combien de`
// (kohn-BYAN DUH), `quel` (KEL) and `quelle` (KEL) appear below exactly as they
// are stored today. They are repaired by RESPELL_REPAIRS in
// interrogatifs-corpus.ts rather than tidied here, because the batch compares
// this manifest field by field against the database and a corrected value would
// read as drift and stop the run. That is the same arrangement a1.17 used for
// MOHN / TOHN / SOHN.
//
// `fr.a1.deplacements.001` "le train" is in the same position: it ships
// `luh TRAN`, closing the nasal of train with a plain n, and this lesson puts it
// on a card. It is REUSED rather than imported because it is already in the
// seed, and it is repaired in both places.
//
// ── One row deliberately NOT imported ─────────────────────────────────────
//
// `fr.sons.consonnes.151` "quand" is already respelled `KAHⁿ`, correctly, and is
// the TARGET this lesson's repair aims at. It is cited in the corpus header and
// imported nowhere: importing it would add a second `quand` card to the hub for
// no teaching gain, and this lesson displays the `questions` row instead. The
// two live in different themes, so both are legal; only one is wanted.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── the eight question words this lesson teaches, as headword cards (8) ──
  {
    id: "fr.sons.questions.002", kind: "word", level: "sons", theme: "questions", fr: "que", en: "what (before a verb)", ipa: "kə", respell: "KUH", notes: "[kuh] · Que fais-tu ? What are you doing?", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.003", kind: "word", level: "sons", theme: "questions", fr: "quoi", en: "what (on its own or after a preposition)", ipa: "kwa", respell: "KWAH", notes: "[kwah] · C'est quoi ? What is it? (casual)", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.004", kind: "word", level: "sons", theme: "questions", fr: "où", en: "where", ipa: "u", respell: "OO", notes: "[oo] · the accent separates it from ou meaning or", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.005", kind: "word", level: "sons", theme: "questions", fr: "quand", en: "when", ipa: "kɑ̃", respell: "KAHN", notes: "[kahn] · nasal, silent D", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.006", kind: "word", level: "sons", theme: "questions", fr: "comment", en: "how", ipa: "kɔ.mɑ̃", respell: "koh-MAHN", notes: "[ko-mahn] · silent T", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.007", kind: "word", level: "sons", theme: "questions", fr: "pourquoi", en: "why", ipa: "puʁ.kwa", respell: "poor-KWAH", notes: "[poor-kwah]", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.008", kind: "word", level: "sons", theme: "questions", fr: "combien", en: "how much, how many", ipa: "kɔ̃.bjɛ̃", respell: "kohn-BYAN", notes: "[kom-byan] · two nasal vowels", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.009", kind: "phrase", level: "sons", theme: "questions", fr: "combien de", en: "how many (of something)", ipa: "kɔ̃.bjɛ̃ də", respell: "kohn-BYAN DUH", notes: "[kom-byan duh] · combien de personnes ? how many people?", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── the quel paradigm, all four, and the two that already agree (4) ──
  {
    id: "fr.sons.questions.010", kind: "word", level: "sons", theme: "questions", fr: "quel", en: "which, what (masculine)", ipa: "kɛl", respell: "KEL", notes: "[kel] · quel jour ? which day?", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.011", kind: "word", level: "sons", theme: "questions", fr: "quelle", en: "which, what (feminine)", ipa: "kɛl", respell: "KEL", notes: "[kel] · sounds exactly like quel: quelle couleur ?", tags: ["question","question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.031", kind: "word", level: "sons", theme: "questions", fr: "quels", en: "which (masculine plural)", ipa: "/kɛl/", respell: "KEHL", notes: "before a masculine plural noun: quels jours ?", tags: ["question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.032", kind: "word", level: "sons", theme: "questions", fr: "quelles", en: "which (feminine plural)", ipa: "/kɛl/", respell: "KEHL", notes: "before a feminine plural noun: quelles couleurs ?", tags: ["question-word"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── the frame this lesson borrows, and the two set phrases built on it (3) ──
  {
    id: "fr.sons.questions.014", kind: "phrase", level: "sons", theme: "questions", fr: "est-ce que", en: "turns a statement into a yes-no question", ipa: "ɛs.kə", respell: "ES-kuh", notes: "[ess-kuh] · Est-ce que tu viens ? Are you coming?", tags: ["question","structure"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.045", kind: "phrase", level: "sons", theme: "questions", fr: "que fais-tu ?", en: "what are you doing?", ipa: "/kə fɛ ty/", respell: "KUH FEH TÜ", notes: "informal, to one person you know", tags: ["question-phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.questions.048", kind: "phrase", level: "sons", theme: "questions", fr: "c'est quoi ?", en: "what is it? (informal)", ipa: "/sɛ kwa/", respell: "SEH KWAH", notes: "casual spoken alternative to qu'est-ce que c'est", tags: ["question-phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── the answer form pourquoi takes, the only one of the seven whose answer
  //    has a grammar of its own (1) ──
  {
    id: "fr.sons.mots-essentiels.036", kind: "word", level: "sons", theme: "mots-essentiels", fr: "parce que", en: "because", ipa: "/paʁskə/", respell: "pars-KUH", notes: "Often squeezed to 'parske' in fast speech. Answers pourquoi (why).", tags: ["conjunction"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── the frame in the wild: three published sentences nobody arranged (3) ──
  {
    id: "fr.a1.questions.035", kind: "sentence", level: "a1", theme: "questions", fr: "Où est-ce que tu habites ?", en: "Where do you live?", ipa: "u ɛs kə ty a.bit", notes: "\"Est-ce que\" stays fixed; only the surrounding words change.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.042", kind: "sentence", level: "a1", theme: "questions", fr: "Pourquoi est-ce que tu es en retard ?", en: "Why are you late?", ipa: "puʁ.kwa ɛs kə ty ɛ ɑ̃ ʁə.taʁ", tags: ["elision"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.030", kind: "sentence", level: "a1", theme: "questions", fr: "Est-ce que le train part à midi ?", en: "Does the train leave at noon?", ipa: "ɛs kə lə tʁɛ̃ paʁ a mi.di", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },

  // ── the five invariable words, each on a published sentence (5) ──
  {
    id: "fr.a1.questions.031", kind: "sentence", level: "a1", theme: "questions", fr: "Où est la gare ?", en: "Where is the train station?", ipa: "u ɛ la gaʁ", notes: "Leave a space before the question mark.", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.022", kind: "sentence", level: "a1", theme: "questions", fr: "Quand commence le cours ?", en: "When does the class start?", ipa: "kɑ̃ kɔ.mɑ̃s lə kuʁ", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.050", kind: "sentence", level: "a1", theme: "questions", fr: "Comment vas-tu ?", en: "How are you?", ipa: "kɔ.mɑ̃ va ty", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.001", kind: "sentence", level: "a1", theme: "questions", fr: "Comment vous appelez-vous ?", en: "What is your name?", ipa: "kɔ.mɑ̃ vu.za.pə.le.vu", notes: "The hyphen links the inverted verb and pronoun: \"appelez-vous\".", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.029", kind: "sentence", level: "a1", theme: "questions", fr: "Combien de temps dure le film ?", en: "How long does the movie last?", ipa: "kɔ̃.bjɛ̃ də tɑ̃ dyʁ lə film", notes: "\"Dure\" ends in a silent e, unlike \"dur\".", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },

  // ── qui, interrogative only. Both open with it or put a preposition in
  //    front of it; neither is the relative use A2 owns (2) ──
  {
    id: "fr.a1.questions.003", kind: "sentence", level: "a1", theme: "questions", fr: "Qui es-tu ?", en: "Who are you?", ipa: "ki ɛ ty", notes: "Inversion \"es-tu\" takes a hyphen, not a space.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.016", kind: "sentence", level: "a1", theme: "questions", fr: "Avec qui vis-tu ?", en: "Who do you live with?", ipa: "a.vɛk ki vi ty", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── combien de and combien d', both published, the de and the elision (2) ──
  {
    id: "fr.a1.questions.011", kind: "sentence", level: "a1", theme: "questions", fr: "Combien de frères et sœurs as-tu ?", en: "How many brothers and sisters do you have?", ipa: "kɔ̃.bjɛ̃ də fʁɛʁ e sœʁ a ty", notes: "\"Sœur\" is spelled with the œ ligature.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.018", kind: "sentence", level: "a1", theme: "questions", fr: "Combien d'enfants avez-vous ?", en: "How many children do you have?", ipa: "kɔ̃.bjɛ̃ dɑ̃.fɑ̃ a.ve.vu", tags: ["elision"], drills: ["dictation"], version: 1,
  },

  // ── que and quoi in three positions, and the subject form (3) ──
  {
    id: "fr.a1.questions.009", kind: "sentence", level: "a1", theme: "questions", fr: "Qu'est-ce que tu fais dans la vie ?", en: "What do you do for a living?", ipa: "kɛs kə ty fɛ dɑ̃ la vi", notes: "\"Que\" elides to \"qu'\" before the vowel in \"est-ce\".", tags: ["elision"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.089", kind: "sentence", level: "a1", theme: "questions", fr: "Que fais-tu le matin ?", en: "What do you do in the morning?", ipa: "kə fɛ ty lə ma.tɛ̃", notes: "Leave a space before the question mark.", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.209", kind: "sentence", level: "a1", theme: "questions", fr: "Qu'est-ce qui se passe ici ?", en: "What is happening here?", notes: "{\"tiles\":[{\"w\":\"Qu'est-ce qui\",\"t\":\"what\"},{\"w\":\"se passe\",\"t\":\"is happening\"},{\"w\":\"ici ?\",\"t\":\"here\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── all four quel forms surviving in published French (5) ──
  {
    id: "fr.a1.questions.004", kind: "sentence", level: "a1", theme: "questions", fr: "Quel âge avez-vous ?", en: "How old are you?", ipa: "kɛl aʒ a.ve.vu", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.026", kind: "sentence", level: "a1", theme: "questions", fr: "Quel jour sommes-nous ?", en: "What day is it?", ipa: "kɛl ʒuʁ sɔm.nu", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.021", kind: "sentence", level: "a1", theme: "questions", fr: "Quelle heure est-il ?", en: "What time is it?", ipa: "kɛ.lœʁ ɛ.til", notes: "\"Quelle\" agrees with the feminine noun \"heure\" even though the subject is \"il\".", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.076", kind: "sentence", level: "a1", theme: "questions", fr: "Quels vêtements portes-tu ce soir ?", en: "Which clothes are you wearing tonight?", ipa: "kɛl vɛt.mɑ̃ pɔʁt ty sə swaʁ", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.299", kind: "sentence", level: "a1", theme: "questions", fr: "Quelles langues parles-tu couramment ?", en: "Which languages do you speak fluently?", notes: "{\"tiles\":[{\"w\":\"Quelles langues\",\"t\":\"which languages\"},{\"w\":\"parles-tu\",\"t\":\"do you speak\"},{\"w\":\"couramment ?\",\"t\":\"fluently\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── ou, without an accent, in a published sentence, and the corpus
  //    already glosses the contrast in its own notes field (1) ──
  {
    id: "fr.a1.questions.077", kind: "sentence", level: "a1", theme: "questions", fr: "Est-ce que tu préfères le thé ou le café ?", en: "Do you prefer tea or coffee?", ipa: "ɛs kə ty pʁe.fɛʁ lə te u lə ka.fe", notes: "\"Ou\" (or) has no accent, unlike \"où\" (where).", tags: ["homophone"], drills: ["dictation"], version: 1,
  },
];

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [

  // ── the one question word already in the seed (1) ──
  {
    id: "fr.sons.questions.001",
    fr: "qui",
    en: "who",
    why: "the only one of the eight question words that was already in the cut, which is why the brief's "
      + "counts read so strangely: seven of eight absent from the seed and all eight published. It needs "
      + "nothing carried and is named by the same sections as its seven neighbours",
  },

  // ── the où / ou pair, ALREADY PUBLISHED AS A PAIR, in sons.05's theme,
  //    with byte-identical respellings, which is exactly this lesson's claim (2) ──
  {
    id: "fr.sons.accents.032",
    fr: "où",
    en: "where",
    why: "the accents lesson's own où, and the reason this pair is reused rather than authored. sons.05 "
      + "OWNS the accent that separates these two and already teaches it. Both halves carry respell=OO, "
      + "byte-identical, which is the claim this lesson makes about them and would have been a coincidence "
      + "if either had been written here",
  },
  {
    id: "fr.sons.accents.031",
    fr: "ou",
    en: "or",
    why: "the other half, published in the same theme with the same respelling and already in the seed. "
      + "Between them the corpus proves that the ear cannot separate where from or, without this lesson "
      + "having authored a word of it",
  },

  // ── the two nouns the quel paradigm leans on. NEVER AUTHORED (2) ──
  {
    id: "fr.a1.deplacements.001",
    fr: "le train",
    en: "the train",
    why: "the masculine noun the quel paradigm runs on, and the row a learner checks the gender against. "
      + "NOT authored: a gendered single-word noun joins a1.03's measured ending population and "
      + "a1-03-genre.test.ts re-measures twenty printed figures on every run. It is also the fifth "
      + "respelling repair: it ships luh TRAN, closing the nasal of train with a plain n",
  },
  {
    id: "fr.a1.deplacements.055",
    fr: "la valise",
    en: "the suitcase",
    why: "the feminine noun of the pair, in the same theme, so the two are checkable side by side the way "
      + "a1.17's le frère and la sœur were. Its respelling lah vah-LEEZ is already correct and is left "
      + "alone. Both nouns belong to the station, which is where the opening scene happens",
  },

  // ── two set phrases a1.12 shipped as unanalysed blocks (2) ──
  {
    id: "fr.sons.questions.019",
    fr: "quelle heure est-il ?",
    en: "what time is it?",
    why: "a1.12 shipped this as a frozen chunk and says so in its own grammarIntroduced: \"Quelle heure "
      + "est-il and Vous avez l'heure, as fixed question chunks\". This lesson takes it apart, which is a "
      + "promise a shipped lesson made and could not keep on its own",
  },
  {
    id: "fr.sons.questions.020",
    fr: "à quelle heure ?",
    en: "at what time?",
    why: "the same chunk with a preposition in front, and the shape the hero screen uses for quel. Already "
      + "in the seed, so the learner has met it in the flashcard hub before this lesson explains why the "
      + "second word carries an e",
  },
];
