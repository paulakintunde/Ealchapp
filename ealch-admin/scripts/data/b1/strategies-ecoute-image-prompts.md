# b1.38 « Écouter sans tout comprendre » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/strategies-ecoute/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/strategies-ecoute/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood: the opener already carries the act title and
  the promise line underneath. This lesson is about LISTENING, so sound is drawn,
  never written: speech is a flowing ribbon or a stream of small soft shapes,
  a loudspeaker or a phone is a plain object, and every screen, sign, ticket or
  board is WORDLESS (soft grey bars at most). Never letters, never digits, never
  a speech bubble with text in it.
- **The single visual metaphor is THE NET.** Speech is a river of sound that
  never stops and never comes back: a stream of small pale shapes flowing across
  the picture. A listener does not try to catch every drop; a loose, warm ochre
  net lets the water through and holds the few bright terracotta shapes that
  carry the meaning (a stressed word, a number, a name, a signpost). Act 1 is
  the exception on purpose: there the listener holds a tiny cup under a torrent
  and catches nothing. From act 2 onward the net appears, in a different place
  each time. Conceptual images (acts 3, 4, 5, 6, 10) alternate with quiet human
  or place scenes (acts 1, 2, 7, 8, 9, 11) so eleven pictures do not read as
  eleven diagrams.

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

## Act 01 : Le mur de son · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act01.jpg`

A quiet scene about trying to catch every word and catching nothing. A Montréal metro platform seen from the side at mid distance, evening, a curved tiled wall in bone and slate blue, a few small calm passengers waiting. High on the wall, a plain round loudspeaker pours out a wide, fast torrent of small pale rounded shapes that sweeps down and across the platform like a waterfall. In the centre, one figure stands holding up a tiny ochre cup under the torrent; the cup holds a single shape while hundreds rush past on every side. The empty track below is a band of dark slate blue. The subject is one listener, one tiny cup and a river of sound going by. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Avant d'écouter · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act02.jpg`

A calm airport scene about getting ready before the voice starts. A wide departure hall with tall windows and a parked plane beyond them under a pale sky, a few small travellers seated with cases. In the foreground, one traveller sits upright, head slightly raised, holding open a loose warm ochre net in both hands, as if waiting for something to arrive. Above the hall, a plain loudspeaker on a pillar is silent, with only three small terracotta shapes hovering just in front of it: a small arch like a gate, a small clock circle, a small hourglass. The net is held exactly where those shapes will fall. The subject is a listener who already knows what is coming. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : L'idée d'abord · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act03.jpg`

A conceptual illustration about listening twice, first for the shape and then for the details. A single horizontal river of small pale shapes flows across a cream field from left to right, passing a vintage radio set on the left. It passes through two nets hung one after the other. The first net is wide-meshed and catches only one large soft ochre shape, like a snow cloud. The second net, finer, catches four small terracotta shapes: a snowflake, a thermometer, a sun, a woolly hat with a pompom. Beyond the nets the river continues, lighter. The subject is one big shape caught first and small details caught second. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Les mots qui portent · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act04.jpg`

A conceptual illustration about the strong words in a stream of speech. A long wavy ribbon of sound runs across the frame like a gentle sound wave, made of small pale beads. At regular points along it, at the end of each gentle rise, one bead is larger and glows terracotta: those are the stressed words. A loose ochre net dips into the ribbon and holds three of these bright beads. Next to one bright bead sits a very small dark slate-blue bead, easy to miss, with a thin warm ring of light around it: the small word that changes everything. In the background, far away and simple, two bridges cross a slate-blue river, one with a few tiny cars moving and one empty. The subject is a few loud beads and one small important one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Chiffres, dates et noms · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act05.jpg`

A conceptual illustration about catching what cannot be guessed. A cream desk seen from slightly above. On the left, an old-fashioned telephone receiver lies on its side, and from it flows a thin stream of small shapes. Most of them are soft and pale and drift away; a few are crisp solid terracotta blocks, each a different size, and these fall one by one into a neat row of small empty boxes drawn on a blank notepad, like a form waiting to be filled. Beside the notepad lie a pencil and a small wall-calendar leaf with no marks, one square of it tinted ochre. The subject is a few exact pieces landing in their exact places. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Les panneaux de l'oral · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act06.jpg`

A conceptual illustration about following spoken signposts. A river of small pale sound shapes winds across a sage-green landscape like a path, starting at a small round podcast microphone on a stand at the bottom left. Along the river stand four plain wordless signposts, each only a coloured shape on a post: a slate-blue sign with a straight arrow, a second one the same, then at a sharp bend a terracotta sign with a curving arrow, and at the end, where the river widens into a calm pool, a small ochre flag. A few snow-covered bushes appear right after the bend, the rest of the land is summer green. A bicycle leans against the first post. The subject is a stream of speech whose turns are announced by signs. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Le français qui se parle · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act07.jpg`

A lively street scene about real spoken French. A Montréal street on a summer evening, brick facades with outdoor iron staircases, a café terrace with small round tables and string lights. On the pavement, a reporter figure holds out a plain microphone to a small group of passers-by of different ages, seen at mid distance with no facial detail. From each speaker comes a short stream of sound shapes: some are small, squashed and run together, others are loose puffs of pale cloud that drift away harmlessly. A loose ochre net held low by the reporter's side catches only the few solid terracotta shapes among them. The subject is fast everyday speech, its puffs let go, its meaning caught. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Faire répéter · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act08.jpg`

A calm scene about asking again on the phone. A small kitchen table by a window, seen from the side. A figure sits holding a phone to one ear, relaxed, with a notepad and pencil in front of them. Between the phone and the notepad, a thin stream of sound shapes loops back on itself in a gentle circle: the same few terracotta shapes pass a second time, slower and larger, and this time they land on the notepad. The window shows a snowy street in soft slate blue. The subject is one piece of speech coming back, slower, when asked. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Un fait ou une opinion · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act09.jpg`

A scene about telling facts from opinions on the radio. A small radio studio seen through a window: a host at a desk with a microphone and headphones, calm, in the centre. On a plain board behind the host, wordless, three simple icons in a row: a small lit street with no cars, a small bar chart with one rising bar, a small calendar leaf. From the host's microphone, sound shapes flow out crisp, even and solid. From two plain telephones on the desk, callers' voices arrive as rounder, softer shapes; one of them trails off into a small drifting cloud. Beyond the studio window, the old stone walls of Québec City and a steep green roof. The subject is solid, checkable sound next to softer, personal sound. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : L'épreuve d'écoute · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act10.jpg`

A conceptual illustration about reading the question before the recording plays. An exam desk seen from directly above: a pair of headphones, a pencil, and a small cream question card with two short grey bars and three small empty circles, one of them tinted ochre. From the headphones, a single stream of sound shapes runs across the desk once and off the edge, never returning. A thin line of warm light links the ochre circle on the card to one terracotta shape in the stream, the one it was waiting for. The rest of the stream passes in cool shade. The subject is a small card that tells the ear what to catch from a stream that plays once. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : La note pour Léa · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-ecoute/act11.jpg`

A warm evening scene about passing a phone message on in writing. The entrance hall of a Montréal apartment, seen from the doorway: a small shelf with a landline answering machine whose small light glows ochre, a coat rack with a woolly hat, and a fridge door beside it. From the answering machine, a short ribbon of sound shapes rises and passes through a small ochre net, and only four solid terracotta shapes come out the other side. They settle onto a single paper note stuck on the fridge door with a magnet, drawn as four short blank lines. A set of keys hangs on a hook next to it. The subject is a long voice message turned into one short note. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
