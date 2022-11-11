import React from 'react';
import { fontSizesPx } from '../../atoms/typography';
import { EmojiType, emojis } from './resources';
import type { FontSizeKey } from '../../atoms/typography';

interface EmojiProps extends React.ComponentPropsWithRef<'span'> {
  /** display a [unicode emoji](https://unicode.org/emoji/charts/) based on short-name
   * @see [`emojis`](./resources.ts) in `Emoji/resources.ts`
   */
  shortName?: string;
  /** the emoji's font-size in pixels
   * @default 'base'
   * @see [FontSizeKey](../../atoms/typography.ts) in `atoms/typography.ts`;
   */
  size?: FontSizeKey;
}

const findEmoji = (shortName: EmojiProps['shortName']): EmojiType | null => {
  return (shortName && emojis.find((el) => el.shortName === shortName)) || null;
};

const renderEmoji = (
  shortName: EmojiProps['shortName']
): string | undefined => {
  const foundEmoji = findEmoji(shortName);
  return foundEmoji?.codePoints
    .split(' ')
    .map((el) => String.fromCodePoint(parseInt(el, 16)))
    .join('');
};

/** Use Emoji to render browser-friendly, inline [Unicode Emojis](https://unicode.org/emoji/charts), rendered by short-name. */
const Emoji = ({
  shortName,
  size = 'base',
  ...props
}: EmojiProps): JSX.Element => {
  const foundEmoji = shortName && findEmoji(shortName);

  return (
    <span
      {...props}
      role='img'
      aria-label={foundEmoji ? foundEmoji.shortName : undefined}
      style={{
        fontSize: `${fontSizesPx[size]}px`,
      }}
    >
      {foundEmoji && renderEmoji(shortName)}
    </span>
  );
};

export { Emoji, EmojiProps, findEmoji, renderEmoji };
