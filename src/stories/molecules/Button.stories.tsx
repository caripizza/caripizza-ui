import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../molecules/Button';

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

const Template: ComponentStory<typeof Button> = ({ ...args }) => {
  const buttonText = args.text ?? 'Heyo';

  return (
    <section className='flex justify-evenly flex-col xs:flex-row xs:justify-start'>
      <div className='bg-backg-primary w-48 h-96 p-4 ml-2 flex flex-col justify-evenly items-center'>
        <p id='default' className='text-primary font-medium mb-3'>
          Default
        </p>
        <Button {...args} aria-labelledby='default' text={buttonText} />
        <Button {...args} text='Loading...' loading />
        <Button {...args} text='Error!' error />
        <Button {...args} text='Submit' disabled />
        <Button {...args} text='Cancel' outlined />
      </div>
      <div className='dark bg-black flex-col w-48 h-96 p-4 ml-2 flex justify-evenly items-center'>
        <p id='dark-theme' className='text-white font-medium mb-3'>
          Dark mode
        </p>
        <Button {...args} aria-labelledby='dark-theme' text={buttonText} />
        <Button {...args} text='Loading...' loading />
        <Button {...args} text='Error!' error />
        <Button {...args} text='Submit' disabled />
        <Button {...args} text='Cancel' outlined />
      </div>
    </section>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Selected = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleSelected = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event) {
      setSelectedId(event.currentTarget.id);
    }
  };

  const renderBtns = (dark: boolean, btnId: string) => (
    <div
      className={`w-80 p-4 text-primary ${
        dark ? 'bg-black-alpha-75' : 'bg-white-alpha-25'
      } grid grid-cols-2 ${dark ? 'dark' : ''}`}
    >
      <Button
        text='Cancel'
        variant='secondary'
        id={`cancel-${btnId}-${dark ? 'dark' : 'light'}`}
        onClick={handleSelected}
        selected={selectedId === `cancel-${btnId}-${dark ? 'dark' : 'light'}`}
        outlined
      />
      <Button
        text='Submit'
        id={`submit-${btnId}-${dark ? 'dark' : 'light'}`}
        onClick={handleSelected}
        selected={selectedId === `submit-${btnId}-${dark ? 'dark' : 'light'}`}
      />
    </div>
  );

  return (
    <>
      {renderBtns(false, 'default-mode')}
      {renderBtns(true, 'dark-mode')}
    </>
  );
};

Selected.parameters = {
  docs: {
    description: {
      story: `The \`selected\` prop can be used to add selected styles in the event that [the browser does not automatically bring the button into focus](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus) after clicking it.`,
    },
  },
};
