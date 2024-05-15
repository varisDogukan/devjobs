import type { Meta, StoryObj } from "@storybook/react";
import CardComponent from "./Card";

const meta = {
  title: "Components/Card",
  component: CardComponent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "grey",
      values: [{ name: "grey", value: "#F4F6F8" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    company: "Scoot",
    location: "United Kingdom",
    logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1714807874~exp=1714808474~hmac=c9dddb456a5d34cad7ce2414317b128799d07968f1e9a345e6a8d4895324d375",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    logoBg: "white",
    id: 5,
  },
};
