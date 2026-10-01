# c1.24 « Analyser la presse » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/analyse-presse/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/analyse-presse/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle. Make
  the files first, then register them. This file does NOT touch lessonImages.ts.
- Paul makes these himself in ChatGPT (B2 build log, wave 0, item 6). Every prompt
  below stands alone; the house style block is repeated in full in each one.
- **No lettering of any kind** in any image, no close-up faces, nothing that needs a
  caption. Text is drawn as soft grey horizontal bars; a headline is one thicker
  bar; speech bubbles, where shown, are empty shapes.
- **The single visual metaphor is THE FRAME.** A viewfinder or a plain rectangular
  frame laid over a scene: what is inside it is real, and so is what stays outside.
  The genre is the kind of frame, the order of voices and the figure chosen are where
  it is placed, the loaded word is the colour of the lens, the hors-champ is what it
  leaves out. Conceptual images (acts 2, 3, 7, 8, 10) alternate with quiet human
  scenes (acts 1, 4, 5, 6, 9, 11, 12).

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in `../b2/lecture-critique-image-prompts.md`), repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Deux unes, un festival · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act01.jpg`

A quiet office scene about one event told by two newspapers. A pale wooden desk in a small tourist office, seen from the side at mid distance, with a coffee cup and a window onto a sunny quay. Two folded newspapers lie side by side, their text drawn as soft grey bars: the left front page carries a picture of a crowd made of many tiny terracotta dots under warm stage lights, the right front page a picture of a few small ochre cups scattered on a pavement. A calm figure, shown small, holds an empty rectangular wooden frame upright between the two papers, as if to measure them. The subject is two front pages and one empty frame between them. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : La dépêche · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act02.jpg`

A conceptual illustration about the inverted pyramid. On a cream ground, a large upside-down triangle is built from horizontal bars: the top bar is wide, thick and dusty slate blue, the bars below grow thinner, paler and shorter, down to a few faint grey slivers at the bottom point. A simple pair of terracotta scissors snips away the lowest slivers, which drift off like confetti. A thin rectangular frame outline encloses the top third of the triangle. The subject is the essential at the top and the context cut from the bottom. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Du surtitre à la chute · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act03.jpg`

A conceptual illustration about the parts of a newspaper page. A single wordless page lies flat on a cream table, seen from above. From top to bottom: a tiny ochre tab, a thick slate-blue bar, a medium block in soft terracotta, a small photo rectangle with a thin grey bar beneath it, then columns of thin grey lines, interrupted halfway by one short sage bar, and closing on a single short bar ending in a small round ochre dot. Each element sits slightly apart from the others, like pieces laid out to be named. The subject is one page taken apart into its working pieces. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Le reportage · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act04.jpg`

A quiet street scene about a reporter on the spot. A market square at dawn, half closed by orange site barriers and tall plain hoardings; between two hoardings a vegetable stall with crates of red tomatoes, a stallholder setting it up, and a reporter with a notebook standing nearby, both shown small and calm. In the foreground a large rectangular viewfinder frame, like the corner marks of a camera, encloses the stall and the two figures, while a yellow digger and the steps of a church sit just outside it. The subject is what the reporter's frame takes in, and what it leaves outside. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : L’éditorial · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act05.jpg`

A quiet interior scene about the collective voice of a newspaper. A newsroom at evening, seen from the doorway: one long table with eight empty chairs pushed in, a single warm desk lamp lighting a sheet of paper in the middle, on which one thick slate-blue bar sits above neat grey lines. No one is at the table; coats hang on a rack and cups are left at several places, as if a group had just agreed and gone home. On the wall, a large plain frame holds only a calm terracotta circle. The subject is a page written by a group and signed by no one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Chronique et billet · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act06.jpg`

A quiet street scene about one person's voice in the paper. A single figure sits at a small café table on a pavement, writing in a notebook, shown small and seen from the side. Beside the notebook stands a tiny upright frame holding a simple portrait-shaped oval in sage, like a columnist's photo, with no face detail. In the street behind, one small car follows a looping dotted path around a block of parked cars, going round and round. The subject is a single writer with her own frame, and a car that cannot find a space. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Tribune et lettre ouverte · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act07.jpg`

A conceptual illustration about an open letter on the op-ed page. A wordless newspaper page lies on a cream ground; in its centre an open envelope stands upright, a long letter rising out of it in soft grey lines. Just under a thick top bar, a short separate thin bar in ochre marks where the author is presented. The letter is framed by a dashed outline rather than a solid one, and a small plain stamp shape sits in the envelope's corner. The subject is a letter published on the page but framed apart from it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Qui parle, et dans quel ordre · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act08.jpg`

A conceptual illustration about the order of voices. A horizontal row of wordless speech-bubble shapes runs across a cream ground from left to right: the first is large and terracotta, the next two are large and ochre, then a small slate-blue bubble near the right edge, much smaller than the others. A rectangular frame encloses these four. Just outside the frame, on the far right, floats an empty bubble drawn only as a faint dotted outline. The subject is who speaks first, who speaks least, and who is left outside. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Chiffres et légendes · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act09.jpg`

A quiet gallery scene about two pictures of the same weekend. Two identical plain frames hang side by side on a bone-coloured wall. The left frame shows a crowd of tiny figures under warm evening stage lights; the right frame shows the same quay in pale morning light, with scattered ochre cups and one small figure standing among them. Under each frame runs a single thin grey bar. Between the frames, a small round chart is divided into one third ochre and two thirds sage. The subject is one event, two moments, and the same proportion seen from two sides. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : Les mots qui pèsent · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act10.jpg`

A conceptual illustration about the colour a word adds. A calm canal bank with two willow trees and a small yellow digger near the water, seen at mid distance. The scene is split down the middle by the vertical edge of a large frame: the left half is seen through a soft sage-green tint, gentle and quiet, the right half through a warm terracotta tint, harsh and heavy, though the trees, the water and the digger continue exactly across the line. The subject is one and the same scene seen through two coloured lenses. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Deux traitements · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act11.jpg`

A quiet interior scene about one meeting framed twice. A public meeting in a town hall: rows of small seated figures seen from behind, a speaker standing at a simple table at the front, a few raised hands. Two large rectangular frames overlap the scene at different angles: a slate-blue frame encloses the speaker and the table, a terracotta frame encloses the rows of residents and their raised hands. Where the frames overlap, the scene is the same. The subject is one room caught by two frames. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ta comparaison · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyse-presse/act12.jpg`

A quiet riverside scene about one bridge seen two ways. A stone bridge over a calm river on a sunny morning; in the middle of the bridge, small children ride bicycles and an accordion player stands by the parapet; on the far bank a short line of small cars waits at a junction. A slate-blue frame encloses the children on the bridge; a terracotta frame encloses the waiting cars. On the near bank, a single figure sits on a bench with a notebook, looking at both. The subject is one bridge, two frames, and someone comparing them. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
