import type { Meta, StoryObj } from "@storybook/react";
import CheckboxComponent from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: CheckboxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
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
