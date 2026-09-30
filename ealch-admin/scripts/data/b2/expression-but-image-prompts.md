# b2.17 « Le but » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/expression-but/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/expression-but/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Forms, letters, notes, screens, posters and
  signs appear: every one of them is BLANK.
- **The single visual metaphor is LA CIBLE**, a target ahead that has not yet
  been reached: a small warm ochre target or marker waiting at the end of a path
  (acts 1, 2 and 11), one figure reaching it alone or helping another reach it
  (acts 2 and 5), and quiet human scenes where people prepare for something
  still to come (acts 3, 4, 6, 7, 8, 10 and 12). Act 9 shows the two directions
  of « pour », looking ahead and looking back. Conceptual images alternate with
  scenes so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Viser un but · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act01.jpg`

A quiet public scene about presenting a project and what it is for. In a bright community hall with pale cream walls, a figure in a terracotta jacket stands before a long table where three committee members sit, one of them with a small round timer in front of her. The standing figure holds a blank folder in one hand and, with the other, gestures towards a simple easel on which a sketch shows a workbench and a few tools, drawn without any writing. On the far wall hangs a small warm ochre circular target, like a quiet emblem of the aim. The subject is one person explaining, in a short time, what a project will make possible. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Un sujet ou deux · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act02.jpg`

A conceptual illustration about who reaches a goal. On a cream field, two parallel sage green paths lead towards two identical small warm ochre targets at the top of the frame. On the left path, a single figure in slate blue walks alone towards its target. On the right path, a figure in terracotta stays at the start and gently gives a push of encouragement to a second, smaller figure in ochre, who walks towards the other target on its own. Soft shadows fall to the right. The subject is the difference between reaching a goal yourself and helping someone else reach it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Pour ou afin de · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act03.jpg`

A calm office scene about writing the same message in two tones. At a desk by a window with a view of snowy rooftops, a woman in a sage green sweater looks at two sheets of paper side by side: on the left, a small casual note with a doodled heart shape; on the right, a neat formal letter with a folded envelope beside it. Both sheets are blank of any writing. A colleague in a slate blue shirt leans on the back of her chair and points at the formal sheet. A mug and a small potted plant sit on the desk. The subject is one message dressed two ways for two readers. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Dans le but de, en vue de · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act04.jpg`

A quiet meeting scene about planning ahead. Around a round wooden table in a modest association office with brick walls, four older and middle-aged figures sit in a circle; one of them, a man in a terracotta cardigan, types on a laptop whose screen is blank, while a woman in slate blue reads over his shoulder. On the wall behind them hangs a large blank wall calendar with one day circled in warm ochre, a date everyone is working towards. A teapot and cups sit in the middle of the table. The subject is a group preparing for something still to come. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · De façon à, de manière que · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act05.jpg`

A calm classroom scene about arranging a space so that others can succeed. In a bright classroom with pale ochre walls and tall windows through which a sunny courtyard and a palm tree are visible, a man in a slate blue shirt and a woman in a terracotta dress place single desks in neat, well-spaced rows, leaving clear aisles between them. At the front, a large blackboard is completely blank. A stack of blank exam papers waits on the teacher's desk. The subject is careful preparation so that everyone can see, move and concentrate. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Pour ne pas · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act06.jpg`

A quiet office scene about leaving instructions to avoid problems. In an open office at dusk, with a window showing a lake and distant mountains, a woman in a sage green coat with a travel bag on her shoulder hands a small key to a colleague in a slate blue sweater. Beside them, a meeting-room door is gently closed, a small blank notebook lies open on a desk, and a radiator dial is turned down. Everything is calm and tidy. The subject is someone taking care, before leaving, that nothing goes wrong while she is away. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · De peur de, de crainte que · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act07.jpg`

A calm mountain scene about preparing against what might happen. Inside a wooden hut with a large window, a guide in a terracotta jacket spreads a blank map on a table while three hikers in sage green and slate blue listen. Warm jackets, a coiled rope and water bottles are laid out neatly on a bench. Through the window, rounded forested mountains stand under a clear sky, with a single soft grey cloud gathering far away above the highest summit. The subject is a group getting ready for a risk they hope to avoid. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le but familier · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act08.jpg`

A friendly scene about moving day among friends. In a sunlit apartment with bare walls and tall windows, cardboard boxes are stacked in the middle of the room. A young man in a terracotta T-shirt sits on a box, speaking into his phone held close to his mouth as if leaving a voice message, smiling. Two friends in sage green and ochre carry a lamp and a rolled rug through the doorway. A single pizza box sits on the floor next to a kettle. The subject is relaxed, informal talk between friends about what they are going to do. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Pour : le but ou la cause · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act09.jpg`

A conceptual illustration about looking ahead and looking back. On a cream field, a single figure in slate blue stands in the middle of a sage green path. Ahead of the figure, the path continues towards a small warm ochre target waiting at the far end, still untouched. Behind the figure, the path is already walked: a small terracotta ribbon medal lies on the ground where something was achieved. The figure's head is turned slightly back towards the medal while one foot points forward. The subject is one path with an aim still ahead and an achievement already behind. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Les noms du but · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act10.jpg`

A focused scene about naming an aim before a presentation. In a small workshop with pegboards of hanging tools on the wall, a woman in an ochre blazer stands rehearsing, one hand raised as she speaks, while a colleague in a sage green jumper sits on a stool and listens with his chin on his hand. Behind her, a flip chart shows three simple blank shapes stacked vertically: a large circle, a smaller filled circle and a tiny dot at the centre, like the rings of a target, with no writing. A repaired bicycle leans against a workbench. The subject is someone giving a goal its right name, from the broad aim to its precise centre. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Sous charge · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act11.jpg`

A conceptual illustration about making the right choice when many paths cross. From the bottom of a cream field, a single figure in terracotta stands at a crossroads where three sage green paths branch out. One path leads to a small warm ochre target, one curves back towards a finished pile of neatly stacked boxes, and one leads to a small slate blue closed door. Three simple blank signposts stand at the fork, each a plain wooden board with nothing written on it. The figure holds a blank folder and looks thoughtfully at the paths. The subject is one careful choice among several directions. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ta lettre de demande · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expression-but/act12.jpg`

A focused scene about writing a request for support. At a wooden desk by a window overlooking a small neighbourhood park where a little wooden book box stands on a post, a figure in a sage green jumper writes a letter with a pen; the page, the envelope beside it and a small folded plan are blank. A desk lamp casts a soft circle of warm light over the paper, and a small warm ochre target-shaped paperweight holds down the pages. The subject is someone putting a project and its aim into a careful letter. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
