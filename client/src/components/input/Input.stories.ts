import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputMagnify: Story = {
  args: {
    name: "title",
    icon: "magnify",
    placeholder: "Filter by title, companies, expertise…",
  },
};

export const InputLocation: Story = {
  args: {
    name: "title",
    icon: "location",
    placeholder: "Filter by location…",
  },
};

export const InputWithoutIcon: Story = {
  args: {
    name: "title",
    placeholder: "Filter by location…",
  },
};
