# b2.30 « Lire un texte littéraire » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/lire-litterature/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/lire-litterature/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Books, pages, letters, signs, posters and
  screens appear: every one of them is BLANK.
- **The single visual metaphor is LA VOIX, LE REGARD, LA PLUME**: who speaks,
  through whose eyes, with which words. Open books whose pages turn into the
  scene they tell (acts 1, 4, 9), a window or a doorway that frames what one
  character sees (acts 3, 8), and quiet human scenes from each act's text in
  Montréal, near Namur, Dakar, Gaspésie, Lausanne, Brussels and Abidjan (acts
  2, 5, 6, 7, 10, 11, 12). Conceptual images alternate with human scenes so
  twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Qui raconte ? · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act01.jpg`

A quiet scene about a voice that is not the author. In a small neighbourhood library with tall cream shelves, eight people sit in a loose circle of wooden chairs, each holding the same slate blue book, seen from a middle distance. In the centre of the circle, rising gently from one open book like steam, is the pale silhouette of an old man in a cardigan holding a tiny notebook, clearly a figure made of the book's pages rather than a real person. Teacups rest on a low ochre table. The subject is a circle of readers and the invented voice that rises from their book. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Le narrateur et l’auteur · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act02.jpg`

A calm memory of a village school. In a small one-room schoolhouse with a sage green door, a teacher in a worn terracotta jacket sits outdoors on a low wall under a tree, reading aloud from an open book to eleven children of different sizes sitting on the grass. At the very edge of the group, the smallest girl sits a little apart, watching the teacher rather than the book. A cardboard suitcase rests against the wall. Soft rolling fields stretch behind. The subject is a teacher seen through the eyes of the youngest pupil watching him. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Par quels yeux · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act03.jpg`

A conceptual illustration about seeing a scene through one person's eyes. The frame is the inside of a bus window: a soft rounded window edge in slate blue surrounds the whole image, and a young woman's shoulder and a bag held tightly against her are just visible in the lower corner, seen from behind. Through the glass, a busy West African street market stretches out in warm ochre and terracotta: stalls, a yellow and black taxi, a crowd of simplified figures, one man in the middle distance reaching out an open hand. The scene outside is slightly larger and brighter than life, as the traveller sees it. The subject is a whole city framed by one person's window. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Le temps du récit · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act04.jpg`

A conceptual illustration about time moving fast and slow in a story. An open book lies on a cream surface; from its left page, a long ribbon of tiny scenes flows out and shrinks into the distance (a quay in the mist, a city, a wedding, two small girls), all compressed and quick. On the right page, the ribbon widens into one large, detailed moment: a woman in a slate blue coat standing still before a white wooden house door, a key in her hand, with a dark lighthouse on a cliff behind. The subject is many years shrunk to a thread, and one minute opened wide. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Les paroles et les pensées · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act05.jpg`

A quiet winter evening scene. Through the window of a Montréal apartment with an outside iron staircase, we see a woman in her fifties sitting at a table set for three, with two candles and a covered pie, looking at a silent phone. Snow falls softly over the street. Above her head, instead of a speech bubble, a faint swirl of small snowflakes drifts inside the room, as if her thoughts were snowing too. Down the street, a small car sits half buried in a snowbank with its hazard lights glowing ochre. The subject is a waiting woman whose thoughts fill the room without a word. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · La tonalité · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act06.jpg`

A conceptual illustration about one event felt three ways. A single railway platform runs across the image, with the same departing train at its end, but the platform is divided into three soft panels of light. On the left, in warm ochre light, a round little man runs comically with a suitcase, a sandwich raised, his hat flying behind him. In the middle, in dusty slate blue light, a woman stands still with a small suitcase under a large blank clock, head bowed. On the right, in deeper terracotta shadow, a young man leaps towards closing doors while two tall figures walk calmly behind him. The subject is the same train, lit three different ways. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Les images · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act07.jpg`

A lakeside storm made of images. On the shore of a wide lake with pale mountains on the far side, a young woman in a light dress stands on a stone quay without an umbrella, laughing, her arms slightly open. The lake's waves curl gently into the shape of a large sleeping lion's mane in slate blue, and the dark clouds above take the shape of an upside-down sea with its own small waves. Moored sailing boats tug at their ropes, their bows leaning forward like eager dogs. Big warm raindrops fall like round ochre coins. The subject is a storm drawn as the images a writer would use for it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Décrire, faire un portrait · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act08.jpg`

A portrait in a doorway frame. A large empty ochre picture frame stands upright on a wooden jetty by a wide river. Inside the frame, a short, broad old ferryman in a wool cap and a sage green oilskin sits at the back of a small boat, elbows on his knees, an unlit pipe in his mouth, his very large hands resting together, looking out at the water rather than at us. A small child at the edge of the frame holds out a hand, and the ferryman's other hand is passing her a tiny round sweet. Gulls sit on the posts nearby. The subject is a gruff man whose one small gesture reveals his kindness. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Le début et la fin · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act09.jpg`

A conceptual illustration about a story's first and last page. A thin open book stands on a cream surface, seen from above. From its first page, a small night scene rises: a dark apartment building with one lit window where an older woman watches from behind a curtain, and a man below carrying a large black bag. From its last page, the same bag lies open in warm morning light, spilling golden baguettes and croissants. A single thread of terracotta runs from the first scene to the last, looping back on itself. The subject is how the last page changes the meaning of the first. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Roman, nouvelle, théâtre · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act10.jpg`

A small theatre stage. On a simple wooden stage with a soft terracotta curtain pulled back at each side, the set is an empty apartment: moving boxes, a tall window with rain streaks, a stack of blue plates. One woman kneels by a box wrapping a plate in paper; another stands at the window with her hand stretched out into the rain. A single warm spotlight falls on them. In the dim foreground, the backs of a few rows of empty seats. The subject is a scene where nobody narrates and everything is played. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Écrire sur un texte · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act11.jpg`

A quiet writing scene. At a wooden desk by a window with a view of palm trees and a lagoon, a young woman in a slate blue blouse sits upright, a new pen in her hand, an open book on one side of the desk and a sheet of blank paper on the other. A few small ochre ribbons lift from the open book and settle onto her blank sheet, like short quotations carried across. Stacks of old yellowed newspapers stand in the dim background of a large newsroom. The subject is a reader turning a few words of a book into her own writing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton commentaire · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/lire-litterature/act12.jpg`

An evening in an emptied corner shop. Inside a small grocery with bare wooden shelves, an old man in a cardigan stands behind the counter, one hand resting gently on an old brass weighing scale, the only object left, as if on a friend's shoulder. The metal shutter over the shop window is half lowered, and the last warm evening light falls across the empty floor. His other hand is reaching towards a single light switch on the wall. The subject is a last gesture before the light goes out. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
