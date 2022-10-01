import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../molecules/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button text={args.text || 'Heyo'} id='button-ex' />
);
