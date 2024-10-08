import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { ThemeDecorator } from "../../services/storybook/ThemeDecorator";

const meta = {
  title: "UI/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    value: 20,
  },
};
