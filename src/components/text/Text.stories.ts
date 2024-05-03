import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Components/Text",
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
    children: "XLarge Text",
    variant: "xLarge",
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

export const WithoutThemeNormal: Story = {
  args: {
    children: "Without Theme Normal",
    variant: "withoutThemeNormal",
  },
};

export const Small: Story = {
  args: {
    children: "Small Text",
    variant: "small",
  },
};
