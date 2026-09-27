# b1.28 « Les animaux et la nourriture » — chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/expressions-animaux/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/expressions-animaux/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`. `require()` resolves statically, so a
  ref registered before its file exists breaks the bundle. Generate the files
  first, then register them. This file does NOT touch lessonImages.ts.
- Every prompt below stands alone: paste one into ChatGPT (or the Fal image
  script) and it produces that act's picture without any other context. The
  house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood: the opener already carries the act title and
  the promise line underneath. The clock in act 3 has no numbers and the
  notebook in act 12 is blank, on purpose.
- **The single visual metaphor is THE IDIOM DRAWN LITERALLY, AND GENTLY.** Each
  image shows the literal picture of the act's headline idiom as if it were true:
  a rabbit waiting alone at a café table, a duck in a scarf on a frozen pond, a
  leek waiting at a bus stop, a soaked hen under a leaf. That is the lesson's
  first step (the picture before the meaning), and a learner who has seen the
  duck in the scarf does not forget « un froid de canard ». The animals are calm
  and friendly, never grotesque, and nothing in any image mocks anyone. Interior
  scenes (acts 1, 5, 6, 8, 12) alternate with open landscapes (acts 2, 3, 4, 7,
  9, 10) and one split composition (act 11), so twelve pictures do not read as
  twelve animal portraits.

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

## Act 01 — Le lapin du samedi · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act01.jpg`

A gentle illustration of the French idiom about being stood up, drawn literally. Inside a small, warm café seen from the side, a round table for two stands by a tall window where soft snow is falling outside. On one chair sits a calm dusty slate blue rabbit, upright and patient, paws folded, a small terracotta cup of hot chocolate in front of it. The chair opposite is empty, pushed slightly back, and a folded bone napkin lies untouched at the empty place. A warm ochre wall lamp glows above. The subject is one patient rabbit waiting alone at a café table, facing an empty chair. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 — Il fait un froid de canard · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act02.jpg`

A gentle illustration of the French idiom for bitter cold, drawn literally. A wide frozen pond under a pale cream winter sky, with low sage green reeds poking through the snow at its edge. In the middle of the ice stands one round dusty slate blue duck wearing a small terracotta knitted scarf, feathers slightly puffed, looking calm and unbothered. A few soft snowflakes drift down. In the far distance, a tiny row of rounded houses with warm ochre windows. The subject is one scarfed duck standing contentedly on a frozen pond in the cold. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 — Poser un lapin · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act03.jpg`

A gentle illustration about waiting for someone who never comes. A quiet empty city street at dawn, cream pavement and bone buildings with every window dark, nobody anywhere. At a bus shelter stands a single empty bench in dusty slate blue. Beside the bench, planted upright in a small square of earth in the pavement, one tall leek stands like someone waiting, its sage green leaves drooping slightly. A round clock on a pole above has a plain face with no numbers. The subject is one tall leek waiting beside an empty bench on a deserted street. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 — Une poule mouillée · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act04.jpg`

A gentle illustration of the French idiom for a scaredy-cat, drawn literally. Soft diagonal rain falls across a cream farmyard. A small round terracotta hen, feathers wet and flattened, shelters under a large sage green leaf held over its head like an umbrella, eyes wide and cautious. Far behind it, across the yard, a calm dusty slate blue bull stands peacefully in the rain, horns small and rounded, taking no notice. Puddles reflect the warm ochre light of an open barn door. The subject is one soaked, timid hen sheltering under a leaf, with a calm bull far away. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 — Une faim de loup · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act05.jpg`

A gentle illustration of the French idioms about hunger and mood, drawn literally. A simple kitchen table seen from the front, covered with a cream cloth. On it sits one large empty bone-coloured plate, a folded napkin and, beside the plate, a single perfectly round, ripe peach glowing in warm ochre and terracotta. Peeking over the far edge of the table, only its ears, eyes and nose showing, is a friendly dusty slate blue wolf looking hopefully at the empty plate. The subject is one empty plate, one ripe peach, and a hungry wolf peeking over the table. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 — Malade comme un chien · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act06.jpg`

A gentle illustration of the French idioms about health and sleep, drawn literally. A cosy bedside corner at night in cream and bone tones. On a small wooden bedside table sits a wide teacup, and curled up asleep inside it is a tiny round dormouse in warm ochre, its tail wrapped around itself. Next to the teacup, a small neat pile of terracotta apples. On a rug below, a dusty slate blue dog lies under a little sage green blanket, eyes closed, a hot-water bottle beside it. The subject is a dormouse asleep in a teacup beside a pile of apples, with a resting dog below. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 — Des salades · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act07.jpg`

A gentle illustration of the French idiom about something hidden, drawn literally. A clear, shallow stream seen from above and slightly to the side, cream pebbles on the bottom and sage green water plants swaying. A large smooth dusty slate blue rock sits in the middle of the stream. From beneath it, only the head and a short length of a long terracotta eel peek out, calm and secretive. On the far bank, small in the distance, an ostrich stands with its head buried in a pale mound of sand. The subject is one eel peeking out from under a rock in a clear stream. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 — C'est du gâteau · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act08.jpg`

A gentle illustration of the French idioms about easy and hard work, drawn literally. A small bakery counter seen from the front. On the left, one simple round cake on a cream stand, plain and inviting. On the right, a long wooden board in warm ochre holds a neat row of six bread loaves waiting to be sold. On the floor in front of the counter, a few whole eggs lie in a careful line, and a single trail of small round footprints tiptoes between them without touching one. The subject is a simple cake, a long board of waiting bread, and whole eggs laid out on the floor. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 — Têtu comme une mule · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act09.jpg`

A gentle illustration of the French comparisons that describe people with animals, drawn literally. A country path in cream and sage green curving away over a hill. In the middle of the path stands a dusty slate blue mule with all four legs firmly planted, head turned away, refusing to move, a small terracotta saddle bag on its back. On a wooden fence beside the path, a magpie in soft grey and bone tones perches with its beak open mid-chatter. At the edge of the frame, a small fox in warm ochre sits with a sly, calm smile. The subject is one stubborn mule on a path, watched by a chattering magpie and a sly fox. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 — Revenons à nos moutons · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act10.jpg`

A gentle illustration of the French idioms about other people and getting back to the point, drawn literally. A rolling sage green hillside under a cream sky. In the middle distance, a small shepherd figure in dusty slate blue, seen from behind, walks back up the hill towards a little flock of round bone-white sheep grazing together. In the foreground, on a terracotta picnic cloth, a single pear has been cut neatly into two equal halves, lying side by side. The subject is a shepherd returning to his sheep, with a pear cut in two in the foreground. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 — La cerise sur le gâteau · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act11.jpg`

A gentle illustration of the French idioms about good and bad news, drawn literally. On the left, a tall round cream cake on a stand, and a single bright terracotta cherry being lowered onto its very top by a small hand entering from the edge of the frame, no face visible. On the right, on a stove, a small dusty slate blue pot holds carrots that have been cooked far too long, soft and slumped, a thin wisp of steam rising. The two halves are separated by generous empty space. The subject is a cherry placed on top of a cake on one side and a pot of overcooked carrots on the other. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 — Ta journée en images · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-animaux/act12.jpg`

A gentle illustration about telling your own story with the lesson's pictures. A calm writing desk seen from slightly above, in cream and bone tones under warm ochre lamp light. In the centre, an open notebook with completely blank pages and a terracotta pen resting across it. Arranged around the notebook like small keepsakes are tiny rounded figurines: a slate blue rabbit, a duck in a scarf, a ripe peach, a cherry and a small sheep. A phone lies face down at the edge of the desk. The subject is one open blank notebook surrounded by the small figures of the lesson's idioms, ready for a story. Landscape 4:3 composition. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
