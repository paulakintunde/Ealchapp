# b2.04 « Les si mixtes » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/si-mixtes/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/si-mixtes/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Clocks appear often: every clock face is
  PLAIN, tick marks only, NO NUMERALS. Books, papers and signs are blank.
- **The single visual metaphor is THE TWO CLOCKS.** The reframe says « deux
  moitiés, deux horloges »: two clocks showing different hours in act 1, clock
  halves to match in act 2, one clock set by blank signposts in act 6, two faint
  clock faces over the fork in the road in act 11, and a timeline with two
  crosses in act 5. Conceptual images (acts 2, 5, 6) alternate with quiet human
  scenes so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Hier et aujourd’hui · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act01.jpg`

A quiet human scene about a regret that still weighs today. A job fair hall seen from a slight distance: a small round table with two chairs, a careers adviser with short grey hair seen in three-quarter view holding a blank folder, and across from her a candidate in a slate blue jacket, shoulders slightly lowered. Between them on the table stand two small round clocks with plain faces and no numerals, one terracotta, one slate blue, their hands pointing to different hours. Soft background of blank display boards and a few distant figures. The subject is one conversation and two clocks that do not show the same time. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Les quatre moitiés · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act02.jpg`

A conceptual illustration about four pieces waiting to be matched. On a cream table seen from above lie four half-discs, like halves of a clock face with plain tick marks and no numerals: two terracotta halves on the left, two slate blue halves on the right, each a slightly different shade. A hand in a sage sleeve slides one terracotta half towards one slate blue half, and their edges are about to meet. Generous empty space around the pieces. The subject is four halves and one choice of which two belong together. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Une cause passée · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act03.jpg`

A quiet human scene about a choice made years ago that shapes the present. A small bakery in Lausanne at dawn: a young baker in a white apron with flour on his forearms lifts a tray of golden loaves from an oven; behind him, on a high shelf, rests a closed stack of thick blank-spined books tied with ochre string, slightly dusty. A plain round wall clock with no numerals shows early morning. Warm light from the oven. The subject is a path not taken sitting quietly above the path that was taken. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Un état qui dure · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act04.jpg`

A quiet human scene about a lasting habit and a moment already past. The landing outside an apartment door in Dakar: a young woman in a terracotta wrap sits on the top step, resigned but smiling, beside a small toolbox; the door is closed. Near the door frame hangs a small empty wooden key box, just installed. On the floor, a tiny scatter of everyday objects spilled from an open bag. The subject is a person whose nature has not changed and a door that stayed shut. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Deux horloges sur une ligne · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act05.jpg`

A conceptual illustration about placing two points on a timeline. A paper napkin lies on a café table at night, lit by a warm lamp; across it runs one long slate blue pencil line. On the line sit two small crosses drawn in terracotta, far apart, one near the left end and one near the right. A pencil rests beside the napkin, and through the window behind, soft snow falls on a dark street. The subject is one line and two separate points on it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Les mots qui règlent l’horloge · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act06.jpg`

A conceptual illustration about small signs that set a clock. A tall slender wooden signpost stands in a cream field, with six blank arrow-shaped boards pointing in different directions, some slate blue, some terracotta, some ochre; no writing on any of them. At the foot of the post sits a plain round clock with no numerals, its hands aligned with one of the arrows. The subject is a set of blank signs deciding which way the hands point. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Regretter et conseiller · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act07.jpg`

A quiet human scene about advice that comes a little late. Two women friends sit side by side on a bench in a small park in autumn: one leans forward with her elbows on her knees, looking at a phone held face down in her lap; the other rests a hand on her shoulder and speaks gently. Fallen ochre leaves around the bench, a closed blank envelope between them on the seat. The subject is comfort and a message not yet sent. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Argumenter avec si · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act08.jpg`

A quiet human scene about a city decision and its effects years later. A wide street at morning rush hour seen from a slight height: a long line of small rounded cars in muted colours stretches into the distance, while along the middle of the street run two faint parallel sage lines, like tram rails that were planned but never built, ending abruptly. On the pavement a person holding a blank folded newspaper stands watching. The subject is a road not built and the traffic that remains. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Au cas où, à condition que · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act09.jpg`

A quiet human scene about precautions before a hike. The porch of a small wooden cabin at the edge of a forest: a backpack leans against the railing with a folded raincoat strapped on top and a coiled rope beside it; an adult hand holds a child's small hand on the steps. A grey cloud sits over distant hills while the near sky is clear. The subject is getting ready for what might happen. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Les pièges · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act10.jpg`

A quiet human scene about proofreading. At a desk by a window, two friends lean over a single sheet of paper with blank ruled lines on it; one holds a red pencil and has circled two small empty spots on the page, the other watches, chin in hand. A cup of tea, a closed laptop and a plain round clock with no numerals on the wall. The subject is two careful readers and one page about to be corrected. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ta mission · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-mixtes/act11.jpg`

A conceptual and human image about looking back on a decision. A person seen from behind stands at a fork in a path at golden hour: one branch, in terracotta tones, curves away towards distant low roofs; the other, in slate blue, leads to a lit house with a garden where small figures wait. The person carries a closed notebook under one arm. Above the fork, faint in the sky, hang two pale round clock faces with no numerals, showing different hours. The subject is one choice seen from today, with the road not taken still visible. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
