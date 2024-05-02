import styled from "styled-components";

interface TextProps {
  children: string;
  variant: "xLarge" | "large" | "medium" | "normal" | "small";
}

export default function Text({ children, variant = "normal" }: TextProps) {
  return <TextWrapper variant={variant}>{children}</TextWrapper>;
}

const variants = {
  xLarge: {
    size: "28px",
    lineHeight: "34px",
    fontWeight: "bold",
    color: "var(--secondary-color)",
  },
  large: {
    size: "24px",
    lineHeight: "29px",
    fontWeight: "bold",
    color: "var(--secondary-color)",
  },
  medium: {
    size: "20px",
    lineHeight: "24px",
    fontWeight: "bold",
    color: "var(--secondary-color)",
  },
  normal: {
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "var(--primary-color)",
  },
  normalGrey: {
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "var(--grey)",
  },
  small: {
    size: "14px",
    lineHeight: "18px",
    fontWeight: "bold",
    color: "var(--violet-700)",
  },
};

type textType = {
  variant: "xLarge" | "large" | "medium" | "normal" | "small";
};

const TextWrapper = styled.p<textType>`
  font-size: ${({ variant }) => variants[variant].size};
  font-weight: ${({ variant }) => variants[variant].fontWeight};
  line-height: ${({ variant }) => variants[variant].lineHeight};
  color: ${({ variant }) => variants[variant].color};
  font-family: "Kumbh Sans", sans-serif;
`;
