import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './calendar';

const meta = {
  title: 'Common/Calendar',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};

export const HasTime: Story = {
  args: {
    hasTime: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
