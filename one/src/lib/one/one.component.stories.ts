import type { Meta, StoryObj } from '@storybook/angular';
import { OneComponent } from './one.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OneComponent> = {
  component: OneComponent,
  title: 'OneComponent',
};
export default meta;
type Story = StoryObj<OneComponent>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/one works!/gi)).toBeTruthy();
  },
};
