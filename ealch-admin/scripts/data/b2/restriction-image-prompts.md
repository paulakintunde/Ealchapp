# b2.19 « La restriction et l'exception » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/restriction/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/restriction/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Tickets, signs, notices, papers, screens and
  labels appear: every one of them is BLANK.
- **The single visual metaphor is LA LIMITE ET LA PORTE**, a limit drawn round
  one thing and a door opened in it: a low garden wall with one gate (acts 1
  and 11), a rope barrier around a single object (acts 2 and 4), a fence with a
  gate that opens or stays shut (acts 9 and 10), and quiet human scenes at
  counters, desks and receptions where a rule meets one person (acts 3, 5, 7,
  8 and 12). Conceptual images (acts 2, 6, 9, 11) alternate with human scenes
  so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · La limite et la porte · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act01.jpg`

A quiet public scene about a rule and its one exception. At a railway ticket counter with a pale cream wall and a large blank departures board, a clerk in a dusty slate blue uniform sits behind a low glass partition, one hand resting on a blank printed sheet, the other gesturing gently towards a small gap in the partition where a ticket can pass. On the other side, a woman in a terracotta coat holds out a blank ticket. Behind her, two travellers wait at a respectful distance behind a sage green floor line. The subject is a firm counter with one small opening in it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La portée de ne… que · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act02.jpg`

A conceptual illustration about drawing a limit exactly round one thing. On a wide bone-coloured floor, five simple objects stand in a row: a slate blue car key, a terracotta cup, a sage green book, an ochre umbrella and a cream hat. A thin warm ochre rope on four small posts encloses only the book, tightly, leaving the other four objects outside. A second, faint dotted outline on the floor shows where the rope could be moved to enclose the key instead. The subject is one limit drawn round one object, which could be drawn round another. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Ne faire que · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act03.jpg`

A calm office scene about doing exactly one's job and nothing more. In an open-plan customer service office with a large window over snowy city rooftops, a young woman in a sage green cardigan types a reply on a laptop whose screen is blank, while a colleague in a slate blue shirt leans over her shoulder and points at the screen with a pen. On the desk, a small parcel sits beside a blank delivery slip. A wall clock with no numerals hangs above them. The subject is a careful reply that explains a rule without apologising for it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Seulement, uniquement, seul · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act04.jpg`

A light, airy scene about choosing the right word for a notice. In a shared workspace with long wooden tables, green plants and a tall window onto a lake, a woman in a terracotta sweater pins a large blank sheet of paper to a cork board, while a man in a slate blue jacket stands beside her with a coffee cup, tilting his head as he reads it. On the board, three smaller blank cards of different sizes are already pinned in a neat column. The subject is a notice being chosen word by word. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Il n'y a que… qui · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act05.jpg`

A quiet scene about the only one who came. In a community hall with rows of empty folding chairs in cream and sage green, a single woman in an ochre coat sits in the front row, lit by a soft warm spotlight from above, while all the other chairs remain in gentle shadow. At the back of the hall, two organisers in slate blue and terracotta stand by a table with a blank sign-in sheet, looking towards her. The subject is one person picked out by the light in an otherwise empty room. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Pas seulement · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act06.jpg`

A conceptual illustration about taking a limit away. On a cream background, a thin warm ochre rope that once enclosed a single slate blue coin lies loosely on the floor, lifted from its small posts, and beyond it the space opens onto more objects that were hidden before: a sage green plant, a terracotta book, a small cream house. A soft light spreads outward from the coin to the new objects. The subject is a limit removed, showing that there was more than one thing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Sauf, excepté, hormis · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act07.jpg`

A calm hotel scene about everything included except one thing. At the reception desk of a lakeside hotel, with mountains beyond a wide window, a receptionist in a sage green jacket arranges a tray on the counter: a row of small objects (a key, a folded towel, a breakfast plate, a map) all set neatly together, and a single wine glass placed slightly apart on its own, turned a little aside. A manager in a slate blue suit watches with approval. The subject is a full tray with one item set apart. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Sinon, si ce n'est, sauf que · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act08.jpg`

A relaxed scene about a nearly perfect trip. On a sunny terrace overlooking a pale blue sea and a line of palm trees, a woman in a terracotta dress writes on a tablet whose screen is blank, smiling, while a friend in a sage green shirt leans back in his chair beside her. Next to their table, a single suitcase with a small bandage-like patch on its corner stands alone, slightly scuffed. The subject is a happy memory with one small flaw beside it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Sauf si · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act09.jpg`

A conceptual illustration about a door that stays open unless one thing happens. A low sage green wooden fence runs across a cream landscape by the sea, with a small gate standing wide open in the middle. Above the gate, a single small slate blue cloud hangs in an otherwise clear sky, and a faint dotted arc shows where the gate would swing shut if the cloud came lower. A small wooden cottage sits beyond the fence. The subject is an open gate and the one condition that would close it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · À moins que · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act10.jpg`

An open-air scene about planning around the weather. In a park with an empty outdoor stage framed by strings of small round lights, a technician in a slate blue jacket stands beside a folded canvas awning, looking up at a sky where soft ochre sunlight meets a single distant grey rain cloud. A woman in a terracotta raincoat holds a blank clipboard and glances at the same cloud. Rows of empty cream chairs face the stage. The subject is an outdoor evening that will go ahead, unless the one cloud arrives. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ouvrir ou fermer la porte · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act11.jpg`

A conceptual illustration about conditions that open or close a way through. On a cream background, a long low wall in bone and sage green has three gates side by side: the first swings open towards a warm ochre path, the second is closed with a small slate blue latch, and the third stands empty, with a missing plank leaving a gap where something should be. A single row of bicycles waits in front of the wall. The subject is three gates, one open, one closed, one missing a piece. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton courrier · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/restriction/act12.jpg`

A focused scene about writing a clear and fair reply. At a wooden desk by a window with a view over city rooftops and a railway line, a figure in a sage green jumper writes on a sheet of letter paper with a pen; the page, an envelope and a small train ticket beside it are all blank. On the desk stands a small model of a garden wall with a single open gate, used as a paperweight. A lamp casts a soft circle of warm light over the letter. The subject is a letter that sets out a rule and opens the one door it allows. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
