# c1.20 « Lire entre les lignes » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/lire-entre-les-lignes/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/lire-entre-les-lignes/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle. Make
  the files first, then register them, once, by script (playbook §6.19). This file
  does NOT touch lessonImages.ts.
- Paul makes these himself in ChatGPT (B2 build log, wave 0, item 6; never Fal).
  Every prompt below stands alone; the house style block is repeated in full in
  each one.
- **No lettering of any kind** in any image, no close-up faces, nothing that needs a
  caption. Text is drawn as soft grey horizontal bars; a title is one thicker bar.
- **The single visual metaphor is THE SHEET HELD UP TO THE LIGHT** (« lire en
  filigrane »). b1.37 lit the page with a lamp, b2.24 held a magnifying glass over
  it; here a sheet is lifted against a window, and a pale shape that is IN the paper,
  not printed on it, shows through, only where the paper carries it. The prompts
  call it « a pale shape inside the paper » rather than a watermark, so the style
  block’s ban on watermarks (stamped logos on the image) never fights the subject.
  Conceptual images (acts 2, 3, 5, 7, 8, 10) alternate with quiet human scenes
  (acts 1, 4, 6, 9, 11, 12).

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le filigrane · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act01.jpg`

A quiet study-room scene about a page that holds more than its ink. A library study room seen from the side at mid distance, early evening, a round pale table with a few sheets and a small timer on it, three seated figures shown small and calm. One figure stands and holds a single sheet up against a tall window; the sheet carries rows of soft grey bars, and where the window light passes through it a pale ochre shape glows inside the paper itself, a simple rounded star that is not printed on the surface. The sheets lying flat on the table show only grey bars and no shape at all. A second figure at the table leans slightly toward the raised sheet. The subject is one sheet that reveals something only when held to the light. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Concéder, restreindre · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act02.jpg`

A conceptual illustration about granting a wide point and then narrowing it. A single large sheet of cream paper is held up against a bright window by two simple hands at its lower corners. Inside the paper, lit from behind, a pale sage shape shows a wide, generous arch that fills most of the sheet, and within that arch, near the bottom, a much smaller terracotta doorway, closed, with a tiny round handle. Faint grey bars of text run across the sheet in front of both shapes. Everything around the window is calm empty cream space. The subject is a wide opening that narrows to one small door. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : La portée exacte · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act03.jpg`

A conceptual illustration about saying exactly as much as a text, no more and no less. Three identical sheets of paper are pinned side by side against a tall bright window, each carrying the same rows of soft grey bars. Light passing through each sheet reveals a pale ochre circle inside the paper: in the left sheet the circle is far too large and spills past the paper’s edges into the window frame; in the right sheet it is a tiny dot lost in a corner; in the middle sheet it sits exactly inside its margins, touching nothing, perfectly fitted. A thin slate-blue frame surrounds only the middle sheet. The subject is three versions of one shape, and only one that fits. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Le vrai désaccord · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act04.jpg`

A quiet suburban scene about two people who agree on the facts and disagree about something else. Two small front gardens side by side, seen from the street at mid distance on a sunny morning: on the left a short, even sage-green lawn; on the right a tall meadow of grasses with ochre and terracotta wild flowers. A low wooden fence separates them. Two neighbours, shown small, stand on either side of the fence, each holding up a sheet of paper toward the sun. Both sheets show the very same rows of grey bars, but the light reveals a different pale shape inside each paper: a neat straight line in one, a loose curling flower in the other. A small blank sign on a stick stands among the tall grasses. The subject is the same page, read with two different things underneath. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Ce que fait un paragraphe · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act05.jpg`

A conceptual illustration about each part of a text having its own job. One tall sheet of paper hangs against a bright window, divided by soft gaps into six horizontal blocks of grey bars. Where the light passes through, each block reveals a different small pale shape inside the paper: a single dot, a rectangular frame, an open hand, a raised palm, a path with a small fork, and a gentle outward curve opening toward the edge. The six shapes alternate in sage, ochre and terracotta and are all the same modest size. The rest of the window is calm empty cream space. The subject is one page whose six parts each hide a different task. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : L’analogie et la chute · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act06.jpg`

A quiet home scene about one thing being compared to another on a single point. A calm living room seen from the side at mid distance, late afternoon. On the right, a front door with a small round doorbell beside it. On the left, a figure shown small sits in an armchair by a window, glancing up from a phone resting in one hand. A fine dotted ochre line runs through the air from the doorbell to the phone, joining them and nothing else. On a side table, a single sheet of paper leans against the window glass, and a pale round shape glows inside it where the light passes. The room is otherwise still and empty. The subject is two objects joined by one shared trait. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : L’auteur et ses sources · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act07.jpg`

A conceptual illustration about a writer treating each source differently. In the centre, a large sheet of grey bars is held against a bright window, a pale ochre shape glowing inside it. Around it, three smaller sheets float at a little distance, each joined to the central sheet by a thin line: one line is a solid sage band, steady and straight; one is slate blue with a small terracotta notch cut into it halfway; one is a soft dashed line that stops just short of the smaller sheet. The three small sheets carry their own grey bars and no glowing shape. Generous empty cream space all around. The subject is one page and three different kinds of tie to the pages it quotes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Le présupposé · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act08.jpg`

A conceptual illustration about a question whose answer is already in the paper. A single sheet of cream paper is held up against a bright window. Near the top, one thick slate-blue bar stands alone, with a small rounded hook at its end, like the shape of a question. Below it the sheet is empty of ink, yet the light reveals, already pressed inside the paper, a complete pale terracotta circle, closed and finished, exactly where an answer would go. The rest of the window is calm empty cream space. The subject is a question and an answer that was there before anyone replied. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : L’ironie au C1 · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act09.jpg`

A quiet kitchen scene about praise that the situation contradicts. A small kitchen seen from the side at mid distance, evening. A woman shown small sits at a table with a phone lying face up beside her, on speaker, three small slate-blue arcs drifting from it like music. A plain wall clock above her has a long sweep of ochre marked around its face, showing a long wait, with no numbers. A cup of tea sits untouched. In one hand she holds a printed memo up toward a warm lamp, and the light reveals a pale, bright, cheerful star shape inside the paper, while her posture stays patient and tired. The subject is a glowing promise held up against a long, quiet wait. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : L’agent caché · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act10.jpg`

A conceptual illustration about a decision written as if nobody made it. A sheet of paper covered in neat, even grey bars hangs against a bright window. At the bottom of the sheet, where a signature would be, the paper looks blank in front, but the light reveals inside it a small pale silhouette of a hand holding a pen, in terracotta, as if someone had signed and their mark had sunk into the paper. Beside the window, an empty office chair is turned slightly away. The rest is calm empty cream space. The subject is a page whose author is present only when you hold it to the light. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : À l’épreuve · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act11.jpg`

A calm exam-room scene about choosing the one answer that fits. A bright exam room seen from the back at mid distance, rows of small pale desks, a few candidates shown small and still, heads slightly bent. A plain wall clock with no numbers hangs above a tall window. One candidate in the foreground lifts a sheet a little toward the window light: on it, two short blocks of grey bars and, below, four small rounded boxes in a column; where the light passes, a pale ochre glow sits inside the paper behind exactly one of the four boxes. The subject is four options and the one the paper itself supports. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ton analyse · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-entre-les-lignes/act12.jpg`

A quiet writing scene about turning a careful reading into one’s own text. A desk set against a large window in soft morning light, seen from the side at mid distance. A figure shown small sits writing in a notebook, its lines filling with soft grey bars. Taped flat against the window glass in front of them is a printed sheet of grey bars, and the light coming through it reveals several pale shapes inside the paper, a small door, a circle and a little hand, in ochre, sage and terracotta. The figure glances from the lit sheet to the notebook. A cup and a pencil rest on the desk. The subject is a sheet read against the light, and the page being written from it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
