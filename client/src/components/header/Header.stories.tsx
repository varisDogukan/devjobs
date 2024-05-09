import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import HeaderContainer from "./Header";

const meta = {
  title: "Components/Header",
  component: HeaderContainer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {};
