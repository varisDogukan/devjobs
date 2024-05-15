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
    size: "custom",
    type: "button",
    formType: "submit",
    variant: "icon",
    icontype: "magnify",
    width: "max-content",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    size: "custom",
    width: "141px",
    variant: "normal",
    url: "#",
    children: "Link Button",
  },
};

export const LinkTheme: Story = {
  args: {
    type: "link",
    size: "full",
    width: "141px",
    variant: "normal",
    url: "#",
    theme: true,
    children: "Theme Link Button",
  },
};
