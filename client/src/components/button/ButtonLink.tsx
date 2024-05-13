import styled, { css } from "styled-components";

import useStore from "@/store/zuStandStore";
import mediaQuery from "@/styles/mediaQuery";
import magnifyIcon from "../../assets/magnifying_glass.svg";
import filterDarkIcon from "../../assets/filter-black.svg";
import filterLightIcon from "../../assets/filter-light.svg";

interface ButtonProps {
  children?: React.ReactNode;
  url?: string;
  type: "link" | "button";
  variant: "normal" | "icon";
  formType: "button" | "submit";
  width?: string;
  size: "full" | "custom";
  theme?: boolean;
  icontype?: "filter" | "magnify";
  onClick?: () => void;
}

const checkTheme = (theme: string) => {
  if (theme === "dark") return filterDarkIcon;

  return filterLightIcon;
};

export default function ButtonLink({
  children,
  url,
  type,
  variant,
  size,
  width = "max-content",
  theme = false,
  formType = "button",
  icontype = "magnify",
  onClick,
}: ButtonProps) {
  const { themeTitle } = useStore();

  if (type === "link") {
    return (
      <LinkWrapper
        width={width}
        size={size}
        theme={theme}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </LinkWrapper>
    );
  } else {
    if (variant === "icon") {
      return icontype === "magnify" ? (
        <ButtonWrapper
          width={width}
          size={size}
          type={formType}
          icontype={icontype}
          onClick={onClick}
        >
          <img src={magnifyIcon} />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          width={width}
          size={size}
          type={formType}
          icontype={icontype}
          role='filter'
          onClick={onClick}
        >
          <img src={checkTheme(themeTitle)} />
        </ButtonWrapper>
      );
    } else {
      return (
        <ButtonWrapper
          width={width}
          size={size}
          type={formType}
          icontype={icontype}
          onClick={onClick}
        >
          {children}
        </ButtonWrapper>
      );
    }
  }
}

/*
=========== STYLES =================
*/
type WrapperProps = {
  width: string;
  size: "full" | "custom";
  theme: boolean;
  icontype?: "filter" | "magnify";
};

const sharedStyle = css`
  height: 48px;
  display: grid;
  place-content: center;
  border-radius: 5px;
  padding: 0 14px;
  font-weight: bold;

  &:hover {
    background-color: var(--violet-300);
  }
`;

const ButtonWrapper = styled.button<WrapperProps>`
  ${sharedStyle}

  background-color: ${({ icontype }) =>
    icontype === "filter" ? "transparent" : "var(--violet-700)"};
  color: var(--white);

  &:hover {
    background: ${({ icontype }) =>
      icontype === "filter" ? "var(--violet-100)" : "var(--violet-300)"};
  }

  @media ${mediaQuery.mobile} {
    width: ${({ size, width }) => (size === "full" ? "100%" : width)};
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
    width: ${({ size, width }) => (size === "full" ? "100%" : width)};
  }
`;
