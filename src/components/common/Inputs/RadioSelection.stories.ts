import type { Meta, StoryObj } from '@storybook/react';

import { RadioSelection } from './RadioSelection';

const meta = {
  title: 'Inputs/RadioSelection',
  component: RadioSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedOption: {
      control: 'radio',
      options: [1, 2],
    },
    setOption: {
      control: false,
    },
  },
} satisfies Meta<typeof RadioSelection>;

export default meta;
type Story = StoryObj<typeof RadioSelection>;

export const Default: Story = {
  args: {
    width: '300px',
    height: '36px',
    borderRadius: '8px',
    option1: '옵션 1',
    option2: '옵션 2',
    selectedOption: 1,
  },
};
