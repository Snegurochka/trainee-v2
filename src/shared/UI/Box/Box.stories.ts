import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "UI/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Test",
  },
};
