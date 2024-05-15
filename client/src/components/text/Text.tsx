import mediaQuery from "@/styles/mediaQuery";
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
  return <Wrapper $variant={variant}>{children}</Wrapper>;
}

/*
=========== STYLES =================
*/
const variants = {
  xLarge: {
    tabletSize: "28px",
    size: "20px",
    lineHeight: "34px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  large: {
    tabletSize: "24px",
    size: "20px",
    lineHeight: "29px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  medium: {
    tabletSize: "20px",
    size: "20px",
    lineHeight: "24px",
    fontWeight: "bold",
    color: "--secondary-color",
  },
  normal: {
    tabletSize: "16px",
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "--primary-color",
  },
  withoutThemeNormal: {
    tabletSize: "16px",
    size: "16px",
    lineHeight: "26px",
    fontWeight: "regular",
    color: "--grey",
  },
  small: {
    tabletSize: "14px",
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

const Wrapper = styled.p<textType>`
  font-size: ${({ $variant }) => variants[$variant].size};
  font-weight: ${({ $variant }) => variants[$variant].fontWeight};
  line-height: ${({ $variant }) => variants[$variant].lineHeight};
  color: var(${({ $variant }) => variants[$variant].color});
  font-family: "Kumbh Sans", sans-serif;

  @media ${mediaQuery.tablet} {
    font-size: ${({ $variant }) => variants[$variant].tabletSize};
  }
`;
