import styled from "styled-components";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import useStore from "@/store/zuStandStore";

export default function ThemeToggle() {
  const { themeTitle, toggleTheme } = useStore();

  return (
    <ThemeToggleWrapper onClick={toggleTheme}>
      <img src={sun} alt='sun icon' />

      <ToggleWrapper>
        <ToggleItem role='toggle' theme={themeTitle} />
      </ToggleWrapper>

      <img src={moon} alt='moon icon' />
    </ThemeToggleWrapper>
  );
}

const ThemeToggleWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  background-color: transparent;
`;

const ToggleWrapper = styled.div`
  width: 48px;
  height: 24px;
  background-color: var(--white);
  border-radius: 12px;
  padding: 5px;
  position: relative;
`;

type ToggleItemProps = {
  theme: string;
};

const ToggleItem = styled.span<ToggleItemProps>`
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: var(--violet-700);
  border-radius: 50%;
  transition: all 0.2s linear;
  left: ${({ theme }) => (theme === "light" ? "5px" : "29px")};
`;
