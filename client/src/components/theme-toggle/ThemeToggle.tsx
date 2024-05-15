import styled from "styled-components";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import useStore from "@/store/zuStandStore";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

export default function ThemeToggle() {
  const { themeTitle, toggleTheme } = useStore();

  return (
    <Wrapper onClick={toggleTheme}>
      <VisuallyHidden>Theme toggle button</VisuallyHidden>
      <img src={sun} alt='sun icon' />

      <Toggle>
        <ToggleItem role='toggle' theme={themeTitle} />
      </Toggle>

      <img src={moon} alt='moon icon' />
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  background-color: transparent;
`;

const Toggle = styled.div`
  width: 48px;
  height: 24px;
  background-color: var(--white);
  border-radius: 12px;
  padding: 5px;
  position: relative;
`;

type ToggleItemStyleType = {
  theme: string;
};

const ToggleItem = styled.span<ToggleItemStyleType>`
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: var(--violet-700);
  border-radius: 50%;
  transition: all 0.1s ease;
  left: ${({ theme }) => (theme === "light" ? "5px" : "29px")};

  ${Wrapper}:hover & {
    background-color: var(--violet-300);
  }
`;
