import type { Meta, StoryObj } from "@storybook/react";
import FooterContainer from "./Footer";
import args from "./arguments";

const meta = {
  title: "Detail/Footer",
  component: FooterContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: args,
};
