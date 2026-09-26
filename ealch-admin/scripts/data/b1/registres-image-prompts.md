# b1.25 « Les registres de langue » : chapter opener artwork

Ten images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/registres/`
- **Filenames, exactly:** `act01.jpg` … `act10.jpg` (the lesson already points at
  `lessons/registres/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Every prompt below stands alone: paste one into ChatGPT (or the Fal image
  script) and it produces that act's picture without any other context. The
  house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Several pictures contain a phone, a laptop,
  a card or a book cover: every one of them is BLANK. This is a lesson about
  messages, and the pull to write one into the picture is strong; a single
  letter breaks the house rule.
- **The single visual metaphor is THE SAME PERSON DRESSED THREE WAYS.** Act 2
  states it outright (one figure, three outfits, three plinths). The other
  acts carry it as things in threes that are one thing in three outfits (three
  books, three shirts, three doors, three pairs of bookends), or as a person
  whose outfit does or does not fit the moment (act 8's suit at a picnic). No
  outfit is ever shown as wrong in itself: that is the lesson's reframe,
  « Aucun registre n'est faux ». Conceptual images (acts 2, 3, 4, 7) alternate
  with quiet human scenes (acts 1, 5, 6, 8, 9, 10) so ten pictures do not read
  as ten diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language
> textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue,
> terracotta, warm ochre, sage green. Soft rounded geometric figures with simple
> calm faces, no black outlines, gentle flat shading. Subtle paper grain texture
> over the whole image. Warm even light. No text unless explicitly described.
> Uncluttered composition with generous empty space. Absolutely no lettering,
> captions, watermarks or logos beyond what is described.

---

## Act 01 · Le mauvais message · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act01.jpg`

A quiet scene about a message about to go to the wrong person. A small snowy parking lot at dawn in Montréal, seen from mid distance: a little dusty slate blue car with its bonnet lifted, soft snow on its roof, and beside it a single rounded figure in a terracotta winter coat, seen from behind, looking down at a phone that glows with a plain pale screen and nothing on it. Behind them, a row of low brick buildings with warm ochre windows, one lit. Two faint footprint trails cross the snow toward the car. The subject is one person, one stalled car and one blank glowing phone at first light. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Trois registres · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act02.jpg`

The lesson's single idea: the same person dressed three ways. Three identical rounded figures stand side by side on three low round plinths, same height, same calm face, same pose, seen full length from the front at a distance. The left one wears a loose sage green hoodie and sneakers, the middle one a neat slate blue cardigan over a light shirt, the right one a dark terracotta tailored jacket with a small scarf. The plinths are ochre, cream and slate. Nothing else is in the frame but cream space. The subject is one person, three outfits, and no outfit better than the others. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Les mots en trois tenues · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act03.jpg`

A conceptual still life about one object with three names. On a long pale wooden shelf, three books stand in a row with space between them: on the left a battered sage green paperback with a bent corner and a coffee ring, in the middle a clean slate blue hardback, on the right a thick terracotta leather-bound volume with an ochre ribbon and gilded edges resting on a small book stand. All three covers are completely blank. The subject is the same object dressed for a friend, for everyone, and for a library. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La grammaire du registre · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act04.jpg`

A conceptual image about small details that change an outfit. Three identical plain cream shirts hang on three wooden hangers from a slim slate blue rail. They differ only in one tiny detail each: the first has its collar left open and one sleeve rolled up, the second is neatly buttoned to the top, the third has a small terracotta bow tie at the collar. The rest of the frame is empty cream space with soft shadows on the wall. The subject is three shirts that are the same except for one small detail. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Un message, trois lecteurs · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act05.jpg`

A human scene about one piece of news going to three readers. A rounded figure sits at a small ochre desk by a window, seen from the side, with packed cardboard moving boxes stacked behind. From the desk, three soft dotted paths curve away to three small doors at the back of the room: a sage green café door with a round window, a slate blue office door, and a tall terracotta door with a formal arch and two columns. The doors are plain, with no signs. The subject is one writer and three very different doors. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Les textos · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act06.jpg`

A calm café scene about quick messages between friends. A small round café table seen from slightly above, with three mugs, a croissant on a plate and a phone lying face up in the middle. Rising gently from the phone, a short stack of small rounded speech-bubble shapes in sage green and slate blue, alternating left and right, every bubble completely empty. Soft window light falls across the table. The subject is one phone and a little tower of empty bubbles among friends' cups. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Ouvrir et fermer · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act07.jpg`

A conceptual image about the first and last line of a message. Three pairs of bookends stand on a long cream shelf, each pair holding a single plain blank card between them. The first pair is two casual sage green sneakers, the second pair two neat slate blue geometric blocks, the third pair two ornate terracotta columns with ochre capitals. The cards between them are identical and empty. The subject is three identical cards, each framed by a different pair of bookends. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le faux pas · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act08.jpg`

A gentle human scene about the wrong outfit for the moment. A sunny backyard picnic seen from mid distance: a checked blanket, a basket, a few rounded figures in t-shirts and shorts sitting on the grass. At the edge of the blanket stands one figure in a full dark terracotta suit with a tie, holding a small wrapped gift very formally, while the others turn slightly toward him. No close faces: the scene is read by posture alone. The subject is one person dressed for a ceremony at a friends' picnic. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Au Québec · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act09.jpg`

A winter street in Montréal's Plateau. A row of two-storey brick houses with the typical curving outdoor iron staircases leading to the upper doors, in slate blue and ochre, snow banked along the pavement. In the foreground two rounded figures in warm coats and knitted hats stand chatting with paper coffee cups, seen from the side at a distance, relaxed. A small car sits under a thick cap of snow at the curb. The subject is two colleagues talking easily on a snowy Montréal street. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La même nouvelle, deux fois · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/registres/act10.jpg`

A human scene about writing the same news twice. An airport window seen from inside, a snowstorm swirling outside and a parked plane faint behind the flakes. In front of it, a rounded traveller sits on a bench beside a small wheeled suitcase, holding a phone in one hand while a laptop rests open on the suitcase. The phone shows a few small empty rounded bubbles; the laptop shows a plain empty page with one thin line at the top. Both screens are blank. The subject is one traveller, one storm, and two blank screens for two readers. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
