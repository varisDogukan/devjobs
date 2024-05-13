import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  variant:
    | "xLarge"
    | "large"
    | "medium"
    | "normal"
    | "withoutThemeNormal"
    | "small";
}

export default function Text({ children, variant = "normal" }: TextProps) {
  return <TextWrapper $variant={variant}>{children}</TextWrapper>;
}

/*
=========== STYLES =================
*/
const variants = {
  xLarge: {
    size: "28px",
    lineHeight: "34px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  large: {
    size: "24px",
    lineHeight: "29px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  medium: {
    size: "20px",
    lineHeight: "24px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  normal: {
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "--primary-color",
  },
  withoutThemeNormal: {
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "--grey",
  },
  small: {
    size: "14px",
    lineHeight: "18px",
    fontWeight: "bold",
    color: "--violet-700",
  },
};

type textType = {
  $variant:
    | "xLarge"
    | "large"
    | "medium"
    | "normal"
    | "withoutThemeNormal"
    | "small";
};

const TextWrapper = styled.p<textType>`
  font-size: ${({ $variant }) => variants[$variant].size};
  font-weight: ${({ $variant }) => variants[$variant].fontWeight};
  line-height: ${({ $variant }) => variants[$variant].lineHeight};
  color: var(${({ $variant }) => variants[$variant].color});
  font-family: "Kumbh Sans", sans-serif;
`;
