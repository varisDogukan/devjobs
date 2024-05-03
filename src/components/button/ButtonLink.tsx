import styled, { css } from "styled-components";

import mediaQuery from "@/styles/mediaQuery";
import icon from "@/assets/magnifying_glass.svg";

interface ButtonProps {
  children?: React.ReactNode;
  url?: string;
  type: "link" | "button";
  variant: "normal" | "icon";
  width?: string;
  full?: boolean;
  theme?: boolean;
}

export default function ButtonLink({
  children,
  url,
  type,
  variant,
  full = false,
  width = "max-content",
  theme = false,
}: ButtonProps) {
  if (type === "link") {
    return (
      <LinkWrapper
        width={width}
        full={full}
        theme={theme}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </LinkWrapper>
    );
  } else {
    return variant === "icon" ? (
      <ButtonWrapper width={width} full={full}>
        <img src={icon} />
      </ButtonWrapper>
    ) : (
      <ButtonWrapper width={width} full={full}>
        {children}
      </ButtonWrapper>
    );
  }
}

/*
=========== STYLES =================
*/
type WrapperProps = {
  width: string;
  full: boolean;
  theme: boolean;
};

const sharedStyle = css`
  height: 48px;
  display: grid;
  place-content: center;
  border-radius: 5px;
  padding: 0 14px;

  &:hover {
    background-color: var(--violet-300);
  }
`;

const ButtonWrapper = styled.button<WrapperProps>`
  ${sharedStyle}

  background: var(--violet-700);
  color: var(--white);

  &:hover {
    background: var(--button-theme-bg-hover);
  }

  @media ${mediaQuery.mobile} {
    width: ${({ full, width }) => (full ? "100%" : width)};
  }
`;

const LinkWrapper = styled.a<WrapperProps>`
  ${sharedStyle}

  background: var(${({ theme }) =>
    theme === true ? "--button-theme-bg" : "--violet-700"});
  color: var(
    ${({ theme }) => (theme === true ? "--tertiary-color" : "--white")}
  );

  &:hover {
    background: var(
      ${({ theme }) =>
        theme === true ? "--button-theme-bg-hover" : "--violet-300"}
    );
  }

  @media ${mediaQuery.mobile} {
    width: ${({ full, width }) => (full ? "100%" : width)};
  }
`;
