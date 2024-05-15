import type { Meta, StoryObj } from "@storybook/react";
import ListGroupContainer from "./ListGroup";
import args from "./arguments";

const meta = {
  title: "Detail/ListGroup",
  component: ListGroupContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ListGroupContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListGroup: Story = {
  args: {
    title: "Requirements",
    type: "ol",
    container: args.requirements,
  },
};
