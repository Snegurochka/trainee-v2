import type { Meta, StoryObj } from "@storybook/react";
import { CodeBox } from "./CodeBox";
import { ThemeDecorator } from "../../services/storybook/ThemeDecorator";

const meta = {
  title: "UI/CodeBox",
  component: CodeBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator],
} satisfies Meta<typeof CodeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "<h3>Test</h3>",
  },
};
