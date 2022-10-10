import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../molecules/Button';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = ({ ...args }) => {
  const buttonText = args.text ?? 'Heyo';

  return (
    <section className='flex justify-evenly flex-col sm:flex-row'>
      <div className='bg-backg-primary w-48 h-48 flex flex-col justify-center items-center'>
        <p id='default' className='text-primary font-medium mb-3'>
          Default
        </p>
        <Button {...args} aria-labelledby='default' text={buttonText} />
        <br />
        <Button text='Loading...' loading variant={args.variant} />
      </div>
      <div className='dark bg-black flex-col w-48 h-48 flex justify-center items-center'>
        <p id='dark-theme' className='text-white font-medium mb-3'>
          Dark mode
        </p>
        <Button {...args} aria-labelledby='dark-theme' text={buttonText} />
        <br />
        <Button text='Loading...' loading variant={args.variant} />
      </div>
    </section>
  );
};
Primary.args = {
  variant: 'primary',
};

export const Secondary: ComponentStory<typeof Button> = ({ ...args }) => {
  const buttonText = args.text ?? 'View more';

  return (
    <section className='flex justify-evenly flex-col sm:flex-row'>
      <div className='bg-backg-primary w-48 h-48 flex flex-col justify-center items-center'>
        <p id='default' className='text-primary font-medium mb-3'>
          Default
        </p>
        <Button {...args} aria-labelledby='default' text={buttonText} />
        <br />
        <Button text='Loading...' loading variant={args.variant} />
      </div>
      <div className='dark bg-black flex-col w-48 h-48 flex justify-center items-center'>
        <p id='dark-theme' className='text-white font-medium mb-3'>
          Dark mode
        </p>
        <Button {...args} aria-labelledby='dark-theme' text={buttonText} />
        <br />
        <Button text='Loading...' loading variant={args.variant} />
      </div>
    </section>
  );
};
Secondary.args = {
  variant: 'secondary',
};
