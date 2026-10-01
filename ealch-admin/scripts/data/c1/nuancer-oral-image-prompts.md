# c1.06 « Nuancer à l’oral » · chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/nuancer-oral/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at `lessons/nuancer-oral/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in `ealch-v2/src/content/lessonImages.ts`, with alt text (each prompt's « The subject is » sentence). `require()` resolves statically, so a ref registered before its file exists breaks the bundle. Generate the files first, then register them. This file does NOT touch lessonImages.ts.
- Paul makes these himself in ChatGPT. Every prompt below stands alone: paste one into ChatGPT and it produces that act's picture without any other context. The house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that needs a caption to be understood: the opener already carries the act title and the promise line underneath. Speech is never drawn as text: where it matters, it is a soft rounded shape or a beam of light.
- **One metaphor, the dimmer (le variateur):** every remark is a light that can be turned up or down. Full light dazzles (the blunt remark), too low and the room goes dark (the over-hedged one), and some things stay at full light (a fact, a date, a safety limit). Acts 1, 10 and 12 show the round dimmer dial itself; the others alternate conceptual images (lamps, beams, filters, a lighthouse) with quiet human scenes in an institute, on the phone and after an opening night, so twelve images do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · La remarque de trop · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act01.jpg`

A conceptual illustration about the strength of a remark. Three identical table lamps stand in a row on a long cream shelf, each with a round slate blue dimmer dial at its base. The lamp on the left is turned up so far that its terracotta glow floods the shelf in a harsh white-ochre glare; the lamp on the right is turned down so low that it is almost dark, a faint grey shape. The lamp in the middle gives a warm, even ochre light that falls softly on a small open notebook beside it, and its dial sits at a middle notch. The subject is three lamps on one shelf, too bright, too dark and just right. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · L’incise qui adoucit · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act02.jpg`

A quiet human scene in a bright meeting room seen from a slight distance. Five colleagues sit around a pale round table with paper cups and a small model of a winding blue river in the middle. A woman with short grey hair is speaking, one hand slightly raised and tilted, as if adding a small aside; above the table, a single soft ochre light from a pendant lamp is dimmed just a little over one spot, the calendar sheet in front of her. No faces in close-up. The subject is a team meeting where one speaker softens a single point. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Parier sans jurer · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act03.jpg`

A conceptual illustration about degrees of certainty. A row of six round glass bulbs hangs from a single slate blue wire across a wide cream background, graded from left to right: the first glows a full warm ochre, the next ones a little softer each time, and the last is clear and unlit. Below the row, a small hand-drawn sage green arrow runs along the floor beneath them, with no marks on it. The subject is a row of bulbs graded from fully lit to unlit. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Le devoir qui suppose · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act04.jpg`

A quiet human scene outside a building with two entrances, seen from across a calm street. A figure at a ground-floor window holds a phone to one ear and looks out; at the far end of the building, in front of the other door, a white delivery van waits with its back doors open and a few wooden crates stacked beside it. A soft beam of warm ochre light, like a torch held low, reaches from the window toward the van, not quite touching it. No faces in close-up. The subject is someone on the phone working out where a missing delivery must be. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le mot à peu près juste · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act05.jpg`

A conceptual illustration about a word that is almost right. A large poster leans on an easel in an empty studio: its upper half shows a simple street with small rounded figures and a bus in ochre, and its lower half, below a line that stands for the pavement, a winding slate blue band like a hidden river. A soft spotlight from the side lights the poster with a gentle, slightly blurred edge, so the picture is clear but its outline is soft. The subject is a poster that shows a hidden river under a street. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Demander de loin · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act06.jpg`

A conceptual illustration about asking across a distance. On the left, a small figure stands on a cream shore holding a lantern with a soft, steady ochre glow, angled politely forward. Far across a calm slate blue stretch of water, on the right, a tall lighthouse on a sage green headland answers with a matching gentle beam. The two lights meet in the middle above the water without glare. No faces in close-up. The subject is two calm lights greeting each other across water. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Contredire avec égards · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act07.jpg`

A quiet human scene in a director's office seen from the doorway. A man in a sage sweater sits across a desk from an older woman with short grey hair; he holds out an open folder with a simple bar chart drawn as plain coloured blocks, his other hand open and palm up. Between them, a desk lamp with a round dial throws a warm, even light on the folder, neither harsh nor dim. Both sit upright and calm. No faces in close-up. The subject is a colleague respectfully showing figures that disagree with his director. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · La critique enveloppée · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act08.jpg`

A conceptual illustration about wrapping a criticism without hiding it. A sheet of paper lies on a cream table under a soft, round paper lampshade that diffuses a warm ochre light over most of the page, shown as gentle grey bars. In one corner of the same sheet, a single small terracotta mark sits in a narrow, sharp beam of clear light from a second, tiny lamp, perfectly visible. The subject is a page in soft light with one point lit sharply. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Dire moins pour dire plus · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act09.jpg`

A quiet human scene at the end of an evening in an exhibition hall. Two colleagues stand with paper cups near a long wall where a large poster with a winding blue band hangs, and a few guests are leaving through an open door in the background. One of the two gives a small, restrained nod with a half smile shown only through posture, hands relaxed. The ceiling lights are turned low and warm, with one gentle spot still on the poster. No faces in close-up. The subject is two colleagues quietly approving an exhibition after the guests leave. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La bonne dose · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act10.jpg`

A conceptual illustration about the right dose. A single large round dimmer dial, slate blue with a small ochre pointer, is mounted on a cream wall at the centre of the image. A thin arc of soft notches surrounds it; the pointer rests at a middle notch. To the right, one pendant lamp hangs from the ceiling and lights a small round table with a telephone on it in a warm, even pool of light. Above the dial, several pale grey filters lie stacked loosely on a narrow shelf, set aside, unused. The subject is a dimmer set to the middle and the filters put aside. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Entendre la nuance · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act11.jpg`

A conceptual illustration about hearing what is half said. A large old-fashioned telephone receiver lies on a cream surface, its cord curling away. From the earpiece rise a few soft rounded shapes like faint lights: one is a clear, bright ochre circle; the others are pale and blurred, drifting in a slate blue haze. A small hand reaches toward the bright one and a single sharp pencil lies beside a blank calendar square. The subject is one clear signal among several blurred ones coming from a phone. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · À toi de nuancer · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/nuancer-oral/act12.jpg`

A quiet human scene in an office in the early evening, seen from a slight distance. A figure sits at a desk by a window, holding a phone slightly away from the face as if recording a message, a short list of notes on a blank card beside a single sheet with a small form and a signature line drawn as a plain stroke. On the desk, a lamp with a round dimmer dial gives a warm, balanced light; through the window, a calm city with a river glints in dusk tones. No faces in close-up. The subject is a person recording a calm, measured voice message at a lit desk. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
