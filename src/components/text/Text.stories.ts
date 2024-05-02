import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const XLarge: Story = {
  args: {
    children: "Normal Text",
    variant: "normal",
  },
};

export const Large: Story = {
  args: {
    children: "Large Text",
    variant: "large",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Text",
    variant: "medium",
  },
};

export const Normal: Story = {
  args: {
    children: "Normal Text",
    variant: "normal",
  },
};

export const Small: Story = {
  args: {
    children: "Small Text",
    variant: "small",
  },
};