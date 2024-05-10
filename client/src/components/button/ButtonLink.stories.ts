import type { Meta, StoryObj } from "@storybook/react";
import ButtonLink from "./ButtonLink";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: "normal",
    width: "141px",
    size: "custom",
  },
};

export const IconButton: Story = {
  args: {
    type: "button",
    variant: "icon",
    size: "full",
    width: "max-contanet",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    type: "link",
    variant: "normal",
    width: "141px",
    size: "custom",
  },
};

export const LinkTheme: Story = {
  args: {
    children: "Button",
    type: "link",
    variant: "normal",
    width: "141px",
    theme: true,
    size: "custom",
  },
};