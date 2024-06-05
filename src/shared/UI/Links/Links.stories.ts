import type { Meta, StoryObj } from "@storybook/react";
import { AppNavLink } from "./Links";
import { ThemeDecorator } from "../../services/storybook/ThemeDecorator";
import { RouterDecorator } from "../../services/storybook/RouterDecorator";

const meta = {
  title: "UI/AppNavLink",
  component: AppNavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator, RouterDecorator],
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    to: "/",
    children: "Test Link"
  },
};
