import type { Meta, StoryObj } from "@storybook/react";
import FilterComponent from "./Filter";

const meta = {
  title: "Components/Filter",
  component: FilterComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilterComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filter: Story = {};
