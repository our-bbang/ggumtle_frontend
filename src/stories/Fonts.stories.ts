import type { Meta, StoryObj } from '@storybook/react';

import { Fonts } from './Fonts';

const meta = {
  title: 'Assets/Fonts',
  component: Fonts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fontName: {
      control: 'select',
      options: ['Pretendard', 'Ongothic'],
    },
    fontWeight: {
      control: 'select',
      options: ['Regular', 'Bold', 'SemiBold', 'Medium', 'ExtraBold'],
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Fonts>;

export default meta;
type Story = StoryObj<typeof Fonts>;

export const Pretendard: Story = {
  args: {
    fontName: 'Pretendard',
    fontWeight: 'Regular',
  },
};

export const Ongothic: Story = {
  args: {
    fontName: 'Ongothic',
    fontWeight: 'Regular',
  },
};
