import json from './data.json';

type EmojiType = {
  id: string;
  codePoints: string;
  shortName: string;
};

/** sourced from https://unicode.org/emoji/charts */
const emojis: EmojiType[] = json;

export type { EmojiType };
export { emojis };
