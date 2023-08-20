import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '.';

const meta = {
  title: 'Etc/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: '56px',
    color: '#4ed99c',
  },
};
