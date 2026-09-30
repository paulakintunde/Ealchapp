# b2.33 « Traduire sans calquer » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/traduire-sans-calquer/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/traduire-sans-calquer/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Sheets, signs, posters, boards and speech
  clouds appear: every one of them is BLANK. Words are shown only as small grey
  blocks.
- **The single visual metaphor is the TRACING PAPER (papier calque)**: a copy
  made by tracing through, against a thing rebuilt by hand in its own shape.
  Conceptual images (the tracing paper, the two keys, the blocks, the bench seen
  from two sides, the punctuation marks: acts 1, 2, 3, 6, 10) alternate with
  quiet human scenes from each act's text in Montréal, Québec, Lausanne,
  Gaspésie and a festival (acts 4, 5, 7, 8, 9, 11, 12), so twelve pictures do
  not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le mot à mot · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act01.jpg`

A quiet office scene about a first translation being reviewed. In a small translation agency with two wooden desks and a tall window onto a street of brick houses with outdoor iron staircases, a woman with short grey hair in a slate blue cardigan leans over the shoulder of a young colleague seated at a desk, both seen from a middle distance. On the desk lie two sheets side by side: on the left, a sheet with neat rows of small grey blocks standing for printed words; on the right, a sheet of thin translucent tracing paper laid over another page, the same blocks traced through exactly, shape for shape. The woman points gently at the tracing paper. The subject is a translation copied too closely from its original, like a drawing traced through paper. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Des mots qui trompent · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act02.jpg`

A conceptual illustration about look-alike words that mean different things. On a cream field, two keys hang side by side from small brass hooks: they are almost identical in shape, one slate blue and one terracotta, but their teeth are cut differently. Below them stands a sage green door: the slate blue key is turning smoothly in its lock, while a simple hand holds the terracotta key up to the same lock, where it clearly does not fit. Everything else is empty cream space. The subject is two keys that look alike and open different doors. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Des phrases calquées · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act03.jpg`

A conceptual illustration about building a sentence the right way round. On a cream field, two small constructions of rounded wooden blocks in ochre, terracotta and slate blue stand side by side. On the left, the blocks are stacked in an awkward order into a thin tower, with one small block balanced alone on the very top, leaning dangerously. On the right, exactly the same blocks are rebuilt into a low, stable little bridge, the small block now fitted in at the front where it belongs. A single calm hand rests on the table beside the stable one. The subject is the same pieces assembled in two orders, one wobbly and one solid. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Des expressions calquées · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act04.jpg`

A quiet scene in a small newspaper office in winter. At a desk by a window that looks out on snowy rooftops and a church steeple, a columnist with round glasses reads a stack of blank letters from readers, smiling, seen from a middle distance. On a corkboard behind her, small blank paper cards are pinned in pairs, each card joined to its partner by a short string of ochre yarn, as if matching one expression to another. A mug of tea steams on the desk beside a closed notebook. The subject is a writer patiently pairing each expression with the right one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Changer la classe des mots · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act05.jpg`

A calm lake scene seen from high above. On a wide lake of dusty slate blue under a pale morning sky, a single small swimmer in a terracotta cap crosses the water in a long straight line, from a little harbour with white sailing boats on the near shore towards green hills and a small town on the far shore, a thin wake trailing behind. A small wooden boat with two tiny figures follows close behind the swimmer. Soft mountains rise in the distance beyond the far shore. The subject is one swimmer crossing a whole lake from shore to shore. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Changer de point de vue · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act06.jpg`

A conceptual illustration about looking at the same thing from another side. On a cream field stands a simple wooden bench freshly painted sage green, with a soft sheen on its slats. A small figure stands on its left looking at it from the front, and another small figure stands on its right looking at the same bench from behind; above each figure floats a soft rounded thought cloud, completely blank. A little further back, a small blank sign on a wooden post faces the viewer. The subject is one object seen from two viewpoints. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Étoffer · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act07.jpg`

A peaceful landscape of a regional park by the sea. A narrow sage green path starts at a small wooden welcome pavilion with a blank board beside it, winds through a forest of dark conifers, runs along a rushing river, crosses it on a small wooden footbridge, then climbs to a wooden lookout platform on a cliff above a wide grey-blue sea. Two hikers with backpacks walk along the path, one pointing ahead to the footbridge. The subject is a path that follows, crosses and climbs, shown all the way. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Les formes en -ing · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act08.jpg`

A lively festival scene on a summer evening. In front of a large brick hall, a volunteer booth with an ochre awning welcomes people: a volunteer in a green vest sits behind a table, another in an orange vest stands nearby helping a visitor, and a third hurries after a man walking away, holding out a thick bundle of blank pages he has forgotten. Strings of small round lights hang above the square, and simplified figures stroll in the background. The subject is a team of volunteers each doing something different at the same moment. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Les petits mots · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act09.jpg`

A calm office wellness scene. In a bright open-plan office with a few potted plants, three colleagues stand beside their desks doing simple stretches together, seen from a middle distance: one raises both arms above her head, one turns his head gently to the side, one rolls her shoulders with her eyes closed. On a desk nearby sit a glass of water and a closed laptop. Morning light falls across the floor from tall windows. The subject is small everyday movements of the body, done together. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Chiffres, guillemets et espaces · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act10.jpg`

A conceptual illustration about the small marks of writing. On a cream field, a few large, soft, rounded punctuation shapes float in a calm arrangement, each with a little breathing space around it: a comma in terracotta, a pair of French angle quotation marks shaped like small double chevrons in slate blue, a colon in ochre, and a percent sign in sage green. A small figure holding a pencil gently slides a thin empty gap into place in front of the colon, as if setting a tile. These marks are the only shapes in the image; there are no letters or numbers. The subject is punctuation marks given their proper space. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Quand le mot à mot suffit · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act11.jpg`

A quiet scene about knowing when to leave something alone. At a desk in a small office, a young man in a terracotta sweater sits with an eraser raised above a sheet of paper covered with neat rows of small grey blocks standing for words, but he has paused, smiling a little, his hand lowering. Beside him a colleague with short grey hair rests a hand calmly on the desk. On the wall behind them, a framed blank picture hangs perfectly straight. The subject is a hand that stops before correcting what was already right. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Le ton juste · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-sans-calquer/act12.jpg`

A calm scene about adapting a message. Inside a small bicycle repair workshop with bicycles hanging on the walls and tools on a pegboard, a mechanic in an ochre apron hangs a blank cream poster in the shop window, which faces a quiet street of brick houses with outdoor iron staircases. On the workbench, beside a bicycle wheel, lie two blank sheets of paper: one crumpled and covered with many short, jagged strokes, the other smooth, with a few neat grey blocks arranged calmly. The subject is a shop choosing the calm, well-made version of its announcement. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
