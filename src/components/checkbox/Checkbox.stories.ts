import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Chexbox: Story = {
  args: {
    children: "Checkbox",
    id: "checkbox",
    checked: false,
  },
};

export const ChexboxChecked: Story = {
  args: {
    children: "Checkbox Checked",
    id: "checkbox",
    checked: true,
  },
};
