import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../molecules/Button';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = ({ ...args }) => {
  const buttonText = args.text ?? 'Heyo';
  return (
    <section className='flex justify-evenly flex-col sm:flex-row'>
      <style>
        {`@media (prefers-color-scheme: dark) {
          :root #use-sys-theme {
            --text-primary: var(--white-100);
            --backg-primary: var(--black-100);
          }
        }`}
      </style>
      <div
        id='use-sys-theme'
        className='w-48 h-48 flex flex-col justify-center items-center bg-backg-primary'
      >
        <p id='sys-theme' className='text-primary'>
          Inherit system theme
        </p>
        <Button
          {...args}
          aria-labelledby='sys-theme'
          text={buttonText}
          id='button-ex-1'
        />
      </div>
      <div className='bg-backg-primary w-48 h-48 flex flex-col justify-center items-center'>
        <p id='default' className='text-primary'>
          Default
        </p>
        <Button
          {...args}
          aria-labelledby='default'
          text={buttonText}
          id='button-ex-2'
        />
      </div>
      <div className='dark bg-black flex-col w-48 h-48 flex justify-center items-center'>
        <p id='dark-theme' className='text-white'>
          Dark mode
        </p>
        <Button
          {...args}
          aria-labelledby='dark-theme'
          text={buttonText}
          id='button-ex-3'
        />
      </div>
    </section>
  );
};
