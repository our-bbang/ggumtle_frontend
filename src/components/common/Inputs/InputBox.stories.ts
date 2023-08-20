import type { Meta, StoryObj } from '@storybook/react';

import { InputBox } from './InputBox';

const meta = {
  title: 'Inputs/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'number', 'date', 'password'],
    },
    value: {
      control: false,
    },
    setValue: {
      control: false,
    },
  },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    width: '300px',
    height: '30px',
    borderRadius: '8px',
    placeholder: '입력해주세요.',
    type: 'text',
  },
};
