import type { ImageSourcePropType } from 'react-native';

// The bundled lesson illustration registry: imageRef string -> static asset.
// Metro resolves require() statically, so refs must be enumerated here; the
// seed can carry a ref before its art exists and the renderer simply shows
// nothing (see RichImage). Keys are the IMAGE_REF_RE-shaped strings authored
// in seed.json.
const REG: Record<string, ImageSourcePropType> = {
  'lessons/alphabet/cover.jpg': require('../../assets/lessons/alphabet/cover.jpg'),
  'lessons/alphabet/ambush.jpg': require('../../assets/lessons/alphabet/ambush.jpg'),
  'lessons/alphabet/ladder.jpg': require('../../assets/lessons/alphabet/ladder.jpg'),
  'lessons/alphabet/song.jpg': require('../../assets/lessons/alphabet/song.jpg'),
  'lessons/alphabet/theme-greetings.jpg': require('../../assets/lessons/alphabet/theme-greetings.jpg'),
  'lessons/alphabet/theme-food.jpg': require('../../assets/lessons/alphabet/theme-food.jpg'),
  'lessons/alphabet/theme-travel.jpg': require('../../assets/lessons/alphabet/theme-travel.jpg'),
  'lessons/alphabet/theme-people.jpg': require('../../assets/lessons/alphabet/theme-people.jpg'),
  'lessons/salutations/cover.jpg': require('../../assets/lessons/salutations/cover.jpg'),
  'lessons/salutations/story-bakery.jpg': require('../../assets/lessons/salutations/story-bakery.jpg'),
  'lessons/salutations/tu-vous.jpg': require('../../assets/lessons/salutations/tu-vous.jpg'),
  'lessons/salutations/ca-va.jpg': require('../../assets/lessons/salutations/ca-va.jpg'),
  'lessons/salutations/roundup.jpg': require('../../assets/lessons/salutations/roundup.jpg'),
  // sons.06.l1 · Les lettres muettes
  'lessons/muettes/cover.jpg': require('../../assets/lessons/muettes/cover.jpg'),
  'lessons/muettes/scene-boulangerie.jpg': require('../../assets/lessons/muettes/scene-boulangerie.jpg'),
  'lessons/muettes/scene-marche.jpg': require('../../assets/lessons/muettes/scene-marche.jpg'),
  'lessons/muettes/careful.jpg': require('../../assets/lessons/muettes/careful.jpg'),
  'lessons/muettes/ghost-h.jpg': require('../../assets/lessons/muettes/ghost-h.jpg'),
  'lessons/muettes/alarm-clock.jpg': require('../../assets/lessons/muettes/alarm-clock.jpg'),
  'lessons/muettes/the-stop.jpg': require('../../assets/lessons/muettes/the-stop.jpg'),
  'lessons/muettes/roundup.jpg': require('../../assets/lessons/muettes/roundup.jpg'),
  // sons.08.l1 · Rythme & intonation
  // Generated with `node scripts/gen-rythme-images.mjs` (ealch-admin).
  // Only register a ref once its file EXISTS: require() resolves statically, so
  // a missing asset breaks the bundle rather than degrading to no image.
  'lessons/rythme/errors.jpg': require('../../assets/lessons/rythme/errors.jpg'),
  // b1.01.l1 · L'imparfait : la formation
  'lessons/imparfait/act01.jpg': require('../../assets/lessons/imparfait/act01.jpg'),
  'lessons/imparfait/act02.jpg': require('../../assets/lessons/imparfait/act02.jpg'),
  'lessons/imparfait/act03.jpg': require('../../assets/lessons/imparfait/act03.jpg'),
  'lessons/imparfait/act04.jpg': require('../../assets/lessons/imparfait/act04.jpg'),
  'lessons/imparfait/act05.jpg': require('../../assets/lessons/imparfait/act05.jpg'),
  'lessons/imparfait/act06.jpg': require('../../assets/lessons/imparfait/act06.jpg'),
  'lessons/imparfait/act07.jpg': require('../../assets/lessons/imparfait/act07.jpg'),
  'lessons/imparfait/act08.jpg': require('../../assets/lessons/imparfait/act08.jpg'),
  'lessons/imparfait/act09.jpg': require('../../assets/lessons/imparfait/act09.jpg'),
  'lessons/imparfait/act10.jpg': require('../../assets/lessons/imparfait/act10.jpg'),
  'lessons/imparfait/act11.jpg': require('../../assets/lessons/imparfait/act11.jpg'),
  'lessons/imparfait/act12.jpg': require('../../assets/lessons/imparfait/act12.jpg'),
  'lessons/imparfait/cover.jpg': require('../../assets/lessons/imparfait/cover.jpg'),
  'lessons/imparfait/unit-complete.jpg': require('../../assets/lessons/imparfait/unit-complete.jpg'),
  'lessons/imparfait/coming-soon.jpg': require('../../assets/lessons/imparfait/coming-soon.jpg'),
  'lessons/accents/anchor-marks.jpg': require('../../assets/lessons/accents/anchor-marks.jpg'),
  'lessons/elision/collision.jpg': require('../../assets/lessons/elision/collision.jpg'),
  'lessons/elision/ear.jpg': require('../../assets/lessons/elision/ear.jpg'),
  'lessons/elision/blocked.jpg': require('../../assets/lessons/elision/blocked.jpg'),
  'lessons/elision/no-gap.jpg': require('../../assets/lessons/elision/no-gap.jpg'),
  'lessons/elision/roundup.jpg': require('../../assets/lessons/elision/roundup.jpg'),
  'lessons/liaison/waiting.jpg': require('../../assets/lessons/liaison/waiting.jpg'),
  'lessons/liaison/the-stop.jpg': require('../../assets/lessons/liaison/the-stop.jpg'),
  'lessons/liaison/scene-guichet.jpg': require('../../assets/lessons/liaison/scene-guichet.jpg'),
  'lessons/liaison/roundup.jpg': require('../../assets/lessons/liaison/roundup.jpg'),
  'lessons/masterclass/phrase.jpg': require('../../assets/lessons/masterclass/phrase.jpg'),
  'lessons/masterclass/group.jpg': require('../../assets/lessons/masterclass/group.jpg'),
  'lessons/masterclass/push.jpg': require('../../assets/lessons/masterclass/push.jpg'),
  'lessons/masterclass/speed.jpg': require('../../assets/lessons/masterclass/speed.jpg'),
  'lessons/masterclass/roundup.jpg': require('../../assets/lessons/masterclass/roundup.jpg'),
};

const ALT: Record<string, string> = {
  'lessons/imparfait/act01.jpg': 'An old photograph of two children in a garden lies beside a notebook on a wooden table.',
  'lessons/imparfait/act02.jpg': 'Five friends talk together around a long kitchen table.',
  'lessons/imparfait/act03.jpg': 'Six cards in a row: four terracotta, one sage green, and one ochre.',
  'lessons/imparfait/act04.jpg': 'A rocky path levels into an easy walk through grass.',
  'lessons/imparfait/act05.jpg': 'One blue key of a different shape hangs among six identical brass keys.',
  'lessons/imparfait/act06.jpg': 'Hands fold an extra layer into dough on a floured board.',
  'lessons/imparfait/act07.jpg': 'A curved tail-shaped mark appears beneath a row of five pebbles.',
  'lessons/imparfait/act08.jpg': 'Two identical thin columns stand side by side, with a third standing apart.',
  'lessons/imparfait/act09.jpg': 'A rainy winter village street is seen through a window.',
  'lessons/imparfait/act10.jpg': 'A person puts on a coat in a hallway while a small green shape stays beside them.',
  'lessons/imparfait/act11.jpg': 'Three similar shapes stand in a row; only the centre one is in focus.',
  'lessons/imparfait/act12.jpg': 'A person writes at a desk by a window, surrounded by pinned photographs.',
  'lessons/imparfait/cover.jpg': 'A continuous blue wave crosses a cream card, with one terracotta trough.',
  'lessons/imparfait/unit-complete.jpg': 'Small shapes drift upward from a wax seal pressed into cream paper.',
  'lessons/imparfait/coming-soon.jpg': 'Stepping stones lead toward the horizon, fading into the distance.',
  'lessons/accents/anchor-marks.jpg': 'Small marks sit as structural parts of stone blocks rather than as ornament laid on top.',
  'lessons/elision/collision.jpg': 'A large sphere and a much smaller one meet, and the small one compresses flat against it.',
  'lessons/elision/ear.jpg': 'An ear shape listens to a shape whose outer shell is transparent and whose core is solid.',
  'lessons/elision/blocked.jpg': 'Three identical doorways, one of them bricked up with no sign on the outside.',
  'lessons/elision/no-gap.jpg': 'Two shapes pushed flush together with no space between them, beside a pair with a gap.',
  'lessons/elision/roundup.jpg': 'A small cloth bag holding a few smooth stones, ready to be carried.',
  'lessons/liaison/waiting.jpg': 'A dormant seed under soil, intact and waiting, with a sprouting one beside it.',
  'lessons/liaison/the-stop.jpg': 'A hand held flat and firm to hold back two shapes that are leaning toward each other.',
  'lessons/liaison/scene-guichet.jpg': 'A traveller speaks to a clerk through the window of a station ticket office.',
  'lessons/liaison/roundup.jpg': 'A short loop of rope with a few beads threaded onto it, tied closed.',
  'lessons/masterclass/phrase.jpg': 'Loose beads on the left are gathered into one strung group on the right.',
  'lessons/masterclass/group.jpg': 'Stones in a stream form two clusters with a clear channel of water between them.',
  'lessons/masterclass/push.jpg': 'A row of shapes where only the last one is raised and larger than the rest.',
  'lessons/masterclass/speed.jpg': 'A hand catches a falling object without looking, the movement already complete.',
  'lessons/masterclass/roundup.jpg': 'Three nested measuring tools stacked together into one compact object.',
};

export function lessonImage(ref: string): ImageSourcePropType | undefined {
  return REG[ref];
}

export function lessonImageAlt(ref: string): string | undefined {
  return ALT[ref];
}
