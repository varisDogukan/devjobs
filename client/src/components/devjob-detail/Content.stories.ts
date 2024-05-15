import type { Meta, StoryObj } from "@storybook/react";
import ContentContainer from "./Content";
import args from "./arguments";

const meta = {
  title: "Detail/Content",
  component: ContentContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ContentContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: args,
};
