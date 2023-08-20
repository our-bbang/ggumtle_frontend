import type { Meta, StoryObj } from '@storybook/react';

import { BottomBtn } from './BottomBtn';

const meta = {
  title: 'Button/BottomBtn',
  component: BottomBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fontFamily: {
      control: 'select',
      options: ['OngothicRegular', 'Pretendard'],
    },
    btnstatus: {
      control: false,
      description: 'Button activation and deactivation status',
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof BottomBtn>;

export default meta;
type Story = StoryObj<typeof BottomBtn>;

export const Active: Story = {
  args: {
    children: '시작하기',
    width: '360px',
    height: '52px',
    borderRadius: '8px',
    fontSize: '18px',
    fontFamily: 'OngothicRegular',
    btnstatus: 'active',
  },
};

export const Disabled: Story = {
  args: {
    ...Active.args,
    className: 'disabled',
    btnstatus: 'disabled',
  },
};
