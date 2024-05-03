import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "violet",
      values: [{ name: "violet", value: "#5964E0" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Themetoggle: Story = {};
