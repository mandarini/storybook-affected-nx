import type { Meta, StoryObj } from '@storybook/angular';
import { FourComponent } from './four.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FourComponent> = {
  component: FourComponent,
  title: 'FourComponent',
};
export default meta;
type Story = StoryObj<FourComponent>;

export const Primary: Story = {
  args: {},
};

export const asdfasdf: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/four works!/gi)).toBeTruthy();
  },
};
