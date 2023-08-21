import type { Meta, StoryObj } from '@storybook/react';

import { Progressbar } from '.';

const meta = {
  title: 'Progressbar',
  component: Progressbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalProgressStep: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    completedProgressStep: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    percent: {
      control: {
        type: 'number',
        min: 0,
      },
    },
  },
} satisfies Meta<typeof Progressbar>;

export default meta;
type Story = StoryObj<typeof Progressbar>;

export const Default: Story = {
  args: {
    totalProgressStep: 3,
    completedProgressStep: 1,
    percent: 50,
  },
};
