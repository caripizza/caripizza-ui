import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Emoji, EmojiProps, renderEmoji, findEmoji } from '..';
import { emojis } from '../resources';

describe('Emoji', () => {
  const renderEl = ({ shortName, ...props }: EmojiProps) => {
    const utils = render(<Emoji {...props} shortName={shortName} />);
    const span = screen.getByRole('img');
    return { ...utils, span };
  };
  const emoji = emojis.find((item) => item.id === '547');
  const shortName = emoji?.shortName;

  afterEach(cleanup);

  it('should render an inline span element with customizable unicode emoji', () => {
    const { span } = renderEl({ size: '2xl', shortName });
    expect(span.innerHTML).toEqual(renderEmoji(shortName));
  });

  describe('findEmoji helper', () => {
    it('should take a short-name and return a matching emoji', () => {
      expect(findEmoji('cat')).toEqual(emoji);
    });
  });
});
