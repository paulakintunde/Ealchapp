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
};

export function lessonImage(ref: string): ImageSourcePropType | undefined {
  return REG[ref];
}
