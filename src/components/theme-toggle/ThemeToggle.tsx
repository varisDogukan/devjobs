import styled from "styled-components";

import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeToggleWrapper
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <img src={sun} alt='sun icon' />

      <ToggleWrapper theme={theme} />

      <img src={moon} alt='moon icon' />
    </ThemeToggleWrapper>
  );
}

const ThemeToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

type ToggleWrapperProps = {
  theme: string;
};

const ToggleWrapper = styled.div<ToggleWrapperProps>`
  width: 48px;
  height: 24px;
  background-color: var(--white);
  border-radius: 12px;
  position: relative;
  padding: 5px 0;

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    background-color: var(--violet-700);
    border-radius: 50%;
    transition: all 0.2s linear;
    left: ${({ theme }) => (theme === "light" ? "5px" : "29px")};
  }
`;
