import type { Meta, StoryObj } from "@storybook/react";
import LoaderContainer from "./Loader";

const meta = {
  title: "Components/Loader",
  component: LoaderContainer,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "rgb(18, 23, 33)" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoaderContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loader: Story = {};
