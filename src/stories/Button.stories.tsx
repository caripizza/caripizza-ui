import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../molecules/Button';

export default {
  title: 'Molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = ({ ...args }) => (
  <section className='flex justify-evenly'>
    <div className='w-48 h-48 flex justify-center items-center bg-backg-primary'>
      <Button text={args.text || 'Heyo'} id='button-ex' />
    </div>
    <div className='dark bg-black w-48 h-48 flex justify-center items-center'>
      <Button text={args.text || 'Dark mode'} id='button-ex' />
    </div>
  </section>
);
