# b2.31 « Les accents et le français régional » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/francais-regional/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/francais-regional/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Signs, menus, books, newspapers and speech
  shapes appear: every one of them is BLANK.
- **No caricature.** People from every region are drawn in the same calm,
  respectful house style: no exaggerated features, costumes or clichés, nothing
  that turns a regional look into a joke.
- **The single visual metaphor is UN ACCENT EST UNE ADRESSE**: where someone
  comes from, never what they are worth. Conceptual images of one meaning
  reached by different paths (acts 2, 3, 9) alternate with quiet human scenes
  from each act's text in Montréal, Québec City, Brussels, Lausanne, Toulouse,
  Abidjan and the Antilles (acts 1, 4 to 8, 10, 11), so eleven pictures do not
  read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Pardon, je n’ai pas bien saisi · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act01.jpg`

A quiet moment of listening at a corner-store counter in winter. Inside a small Montréal corner store with shelves of groceries and a fridge of milk, a woman cashier in a wool cardigan leans slightly towards a customer in a winter coat and knitted scarf, both seen from a middle distance, the customer tilting an ear forward as if to catch a word. A carton of milk and a round loaf of bread rest on the counter. Through the shop window behind them, snow falls on a street of brick houses with outside staircases; the shop sign outside is blank. The subject is two people leaning towards each other to understand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Une langue, plusieurs centres · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act02.jpg`

A conceptual illustration of one shared page and several centres. In the middle of a cream field lies a single large open book whose pages are blank, softly glowing. Around it, at an even distance, stand five small distinct clusters of buildings on little islands of ground: a snowy town with a steeple, a brick town under rain, a lakeside town with mountains, a sunny town of pink brick, and a town of low white houses under palm trees. Thin dusty slate blue threads run from each cluster to the open book, all meeting on its pages. The subject is several centres joined by one shared page. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Le Québec à l’oreille · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act03.jpg`

A conceptual illustration of one word sounding two ways. A vintage radio studio microphone stands on a small wooden desk in a quiet studio with a sage green wall and an unlit on-air lamp with nothing written on it. From the microphone two gentle ribbons of sound float outwards, one terracotta and one ochre, curling in different rhythms, and both land on the same small blank card lying on the desk. The subject is two different sounds carrying the same meaning to the same place. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Le Québec, les mots · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act04.jpg`

A warm winter evening in an old Québec street. On a snowy street of stone houses with steep roofs and lit windows, a figure in a knitted winter hat with a pompom and thick mittens walks carefully towards a glowing front door, carrying a round meat pie wrapped in a cloth. On the corner, a small corner store with a blank sign glows ochre. Snow lies on the railings and the sky is a deep dusk blue. The subject is someone arriving, at the right hour, for supper. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · La Belgique et la Suisse · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act05.jpg`

A two-part landscape joined by a train. On the left half, a Brussels street of narrow brick houses under heavy rain, a figure holding a dusty blue umbrella outside a bakery with a blank awning. On the right half, a calm lakeside promenade in Lausanne with sailboats on the water and blue mountains across the lake under a clearing sky. A small red and cream train crosses the whole image from left to right along a low viaduct, linking the two halves. The subject is one weekend travelling between two countries. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · En France aussi, des accents · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act06.jpg`

A sunny street in a southern French city of pink brick. A young woman in a slate blue jacket walks confidently along the pavement with a briefcase, seen from a middle distance, her head held high. Behind her, pink brick facades with tall shutters, a plane tree casting soft shade, and a bakery window displaying rows of pastries under a blank awning. The light is warm and golden. The subject is someone walking at ease, keeping who she is. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Le français en Afrique · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act07.jpg`

A lively open-air lunch at a small restaurant in Abidjan. Under the wide shade of a mango tree, a group of colleagues sit around two plastic tables with bright chairs, sharing plates of grilled fish and white semolina, seen from a middle distance. An older woman in a patterned dress brings a tray, and one young woman stands to greet her respectfully. In the background, a crowded minibus passes on a sunlit street. Signs and boards are blank. The subject is a shared meal and a respectful greeting. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Les langues en contact · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act08.jpg`

A calm scene on a wooden porch in the Antilles. On a veranda painted sage green and surrounded by banana leaves and red flowers, an elderly woman in a headscarf and a young woman in work clothes sit side by side with two cups of coffee, turned towards each other in conversation, seen from a middle distance. Two gentle ribbons, one terracotta and one dusty blue, rise from them and weave together in the air above the porch. The sea is visible between the trees. The subject is two languages living side by side in one family. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Quand tu ne comprends pas · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act09.jpg`

A conceptual illustration about a conversation that finds its way. Two people stand on either side of a small garage counter, seen from a middle distance, a car with its bonnet open in the background. Between them float three speech shapes with no writing in them: the first, near the mechanic, is a tangled loop of ochre thread; the next, near the customer, is a neat straight ribbon; the third, returning to the mechanic, is smooth and clear. The subject is confusion turning into understanding through a simple question. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Respect et institutions · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act10.jpg`

A quiet rainy morning in a Brussels café. A woman columnist sits at a small marble table by a tall window streaked with rain, writing in a notebook whose pages show only faint blank lines, a cup of coffee beside her and a folded newspaper with a blank front page. Outside, brick houses and umbrellas pass. On the wall behind her, a shelf holds several thick dictionaries with plain unmarked spines. The subject is careful thinking about language and respect. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ta lettre · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-regional/act11.jpg`

A writing desk by a window, ready for a letter. On a warm wooden desk lies a sheet of cream paper with faint blank lines and a pen resting on it, an open envelope with no address, a small folded map, a knitted hat and a cup of tea. Through the window behind, a snowy city skyline with a church steeple glows in soft morning light. The subject is a letter about to be written to a friend far away. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
