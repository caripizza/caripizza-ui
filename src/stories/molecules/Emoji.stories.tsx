import React, { ChangeEvent, useState, useEffect } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Emoji } from '../../molecules/Emoji';
import { emojis, EmojiType } from '../../molecules/Emoji/resources';
import { fontSizesPx } from '../../atoms';

export default {
  title: 'Molecules/Emoji',
  component: Emoji,
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = ({ ...args }) => {
  return <Emoji {...args} />;
};

export const Demo = Template.bind({});
Demo.args = {
  shortName: 'woman detective: light skin tone',
  size: '6xl',
};
Demo.argTypes = {
  shortName: {
    control: { type: 'select' },
    options: emojis?.map((e) => e.shortName).sort(),
  },
  size: {
    control: { type: 'select' },
    options: Object.keys(fontSizesPx),
  },
};

export const ByShortName = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [emojiResults, setEmojiResults] = useState<EmojiType[] | null>(null);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setSearchTerm(event.target.value);
    }
  };
  useEffect(() => {
    setEmojiResults(
      searchTerm === ''
        ? []
        : emojis.filter((el) =>
            el.shortName.toLowerCase().includes(searchTerm.toLowerCase())
          )
    );
  }, [searchTerm]);

  return (
    <div className='w-full'>
      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder={!searchTerm ? 'Enter an emoji short-name' : undefined}
        className='p-2 w-full mb-2'
      />
      <code>Total: {emojiResults?.length}</code>
      {emojiResults?.map((el) => (
        <p key={el.id} className='flex'>
          <Emoji key={el.id} shortName={el.shortName} className='mr-3' />
          {el.shortName}
        </p>
      ))}
    </div>
  );
};
