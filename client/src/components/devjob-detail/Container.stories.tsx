import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import args from "./arguments";

const meta = {
  title: "Pages/DevJobDetail",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Header {...args} />
        <Content {...args} />
        <Footer {...args} />
      </>
    ),
  },
};
