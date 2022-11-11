import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Emoji, EmojiProps, renderEmoji, findEmoji } from '..';
import { emojis } from '../resources';

describe('Emoji', () => {
  const renderEl = (props?: EmojiProps) => {
    const utils = render(<Emoji {...props} shortName={props?.shortName} />);
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

  it('should render with aria-label based on found emoji short-name', () => {
    const { span } = renderEl({ shortName: 'detective' });
    expect(span.getAttribute('aria-label')).toEqual('detective');
  });

  it('should render no aria-label if no short-name provided', () => {
    const { span } = renderEl();
    expect(span).not.toHaveAttribute('aria-label');
  });

  describe('findEmoji helper', () => {
    it('should take a short-name and return a matching emoji', () => {
      expect(findEmoji('cat')).toEqual(emoji);
    });
  });

  describe('renderEmoji helper', () => {
    it('should return undefined without a short-name', () => {
      expect(renderEmoji(undefined)).toBeUndefined();
    });
  });
});
