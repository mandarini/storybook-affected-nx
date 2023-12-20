import type { Meta, StoryObj } from '@storybook/angular';
import { TwpComponent } from './twp.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TwpComponent> = {
  component: TwpComponent,
  title: 'TwpComponent',
};
export default meta;
type Story = StoryObj<TwpComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/twp works!/gi)).toBeTruthy();
  },
};
