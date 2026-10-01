# c1.03 « La concordance littéraire » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/concordance-litteraire/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/concordance-litteraire/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose. Never Fal.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Books, letters, proofs and screens appear:
  every page is BLANK or shows only soft grey lines, never letters.
- **Alt text:** each prompt's « The subject is … » sentence, word for word.
- **The single visual metaphor is LE DIAPASON**, the tuning fork: the main verb
  strikes a note and the rest tunes to it; a string left off the note is heard
  and means something. Conceptual images (acts 2, 3, 7) show forks, strings and
  paths; quiet human scenes (acts 1, 4, 5, 6, 8, 9, 10, 11) show people reading,
  editing, waiting or presenting, with a small tuning fork recurring in acts 1, 4
  and 11, so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · La note et l’écart · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act01.jpg`

A quiet human scene about two versions of the same story. In a neighbourhood library on a snowy winter evening, seen at mid distance, six people sit on chairs arranged in a loose circle; snow falls behind tall windows. On a low table in the middle lie two open books side by side, one old with a worn leather cover, one new with a pale modern cover, their pages blank. Between the two books stands a small slender metal tuning fork. One figure leans forward pointing at the new book, another sits back calmly, waiting. The subject is a reading circle comparing an old book and a new one, with a tuning fork between them. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La grille · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act02.jpg`

A conceptual illustration about one note setting the others. On a cream field, a large dusty slate blue tuning fork stands on the left, freshly struck, with soft concentric rings of sound spreading from it. To its right, four smaller tuning forks stand in a neat two-by-two grid on a pale ochre board. Each small fork gives off gentle rings of the same colour and rhythm as the large one, as if answering it; the two forks of the lower row are slightly behind in time, their rings still forming. Generous empty space around the group. The subject is one large tuning fork whose note four smaller forks take up in an orderly grid. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Le moment de l’action · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act03.jpg`

A quiet conceptual scene about something already done and something still happening. A long garden path in soft evening light runs from an open wrought-iron gate in the foreground to the horizon. Far down the path, small in the distance, one figure in a terracotta coat is almost out of sight. Near the gate, a second figure in sage green has just stepped through and is walking away at the start of the path. Between them stand a pale ochre bench and a lamp post. Both figures are seen from behind. The subject is one figure already far away and another just setting off on the same path. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Je voudrais qu’il vînt · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act04.jpg`

A quiet human scene in a small publishing house. A sunny room with tall shelves of books and a large wooden table covered with loose proof pages showing only soft grey lines. A young man leans over the pages with a pencil raised, eager to change something; an older woman beside him rests a calm hand flat on the stack, gently holding it in place. On the windowsill behind them, a small tuning fork catches the light next to a potted plant. The figures are shown at mid distance. The subject is a hand resting on an old text to keep it as the author wrote it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Eût-il su · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act05.jpg`

A quiet scene about a trade that ended. A wide calm river at dusk, seen from the bank. A modern concrete bridge with slim pillars crosses the whole picture, with small cars passing over it. In the shadow beneath the bridge, an empty old wooden rowing boat is moored to a post, its oars resting inside, its paint faded. Reeds and a single heron stand at the water’s edge. Warm low light on the water. No people. The subject is an old ferry boat left moored beneath a new bridge. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Fût-il roi · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act06.jpg`

A gently humorous scene about rules that apply to everyone. In a bright post office hall, seen from the side at mid distance, five simple figures wait in a single orderly line before a counter. The fourth figure in the line wears a small golden crown and a short velvet cape, and waits exactly like the others, hands folded, looking patiently ahead. The clerk behind the counter serves the first person. Signs above the counter are plain coloured shapes with no writing. The subject is a crowned figure waiting in line like everyone else. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · La discordance qui parle · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act07.jpg`

A conceptual still life about one deliberate difference. On a cream writing desk lies a small wooden lyre with seven strings. Six strings are dusty slate blue and still; one string in the middle is terracotta and vibrates, drawn with soft parallel echo lines. Around the lyre lie a few old letters tied with a faded ribbon, their pages blank, and a fountain pen. Morning light from the left. The subject is a lyre whose single string sounds apart from the others, among old letters. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Aujourd’hui · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act08.jpg`

A quiet human scene in a regional newsroom in the early evening. Several modern desks with blank screens and a few journalists working, seen at mid distance. On one desk, among laptops and coffee cups, sits a heavy old black typewriter with a blank sheet in it, clearly from another era. A young journalist leans towards an older colleague who points calmly at his laptop screen, which shows only soft grey lines. Large windows show rooftops at dusk. The subject is an old typewriter among modern screens in a busy newsroom. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · L’effet · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act09.jpg`

A gently comic scene treated like a solemn ceremony. The cold entrance hall of an apartment building at night, lit by a single ceiling lamp. A row of green and grey rubbish bins stands against the wall like guests of honour, behind a red velvet rope on two brass posts. Around them, eight neighbours in dressing gowns and slippers stand in solemn silence, an older woman in front holding a folded paper like a speech. Everyone is shown at mid distance, no close-up faces. The subject is neighbours in slippers holding a grand ceremony for the rubbish bins. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Lire une page entière · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act10.jpg`

A quiet nostalgic scene at a mountain inn. A small stone inn with wooden shutters stands at a high mountain pass at the end of a summer day; tables with white cloths are set on its terrace. A girl seen from behind sits on the terrace wall, looking out at the pass bathed in golden evening light, where a narrow path winds away and the small figure of a hiker disappears over the crest. Sage green slopes, ochre light, long shadows. The subject is a girl on an inn terrace watching the mountain pass at dusk. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Présente la page · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/concordance-litteraire/act11.jpg`

A quiet human scene of someone presenting to a group. In the same neighbourhood library, now in spring, one woman stands holding a single sheet of paper, speaking calmly, while five people sit in a loose circle listening attentively. On the wall behind her hangs a framed picture of a small old railway station with an empty platform, drawn simply. A tuning fork rests on the low table next to a teapot. Figures at mid distance, no close-up faces. The subject is a woman presenting a single page to an attentive reading circle. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
