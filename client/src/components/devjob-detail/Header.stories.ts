import type { Meta, StoryObj } from "@storybook/react";
import HeaderContainer from "./Header";
import args from "./arguments";

const meta = {
  title: "Detail/Header",
  component: HeaderContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: args,
};
