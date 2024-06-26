import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import mediaQuery from "@/styles/mediaQuery";
import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function Header() {
  return (
    <Wrapper>
      <nav className='container'>
        <Link to={"/"} className='logo-container'>
          <img src={logo} alt='logo icon' />
        </Link>

        <ThemeToggle />
      </nav>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.header`
  background-color: var(--violet-700);
  overflow: hidden;
  padding: 32px 0 72px;

  @media ${mediaQuery.tablet} {
    padding: 42px 0 86px;
    border-radius: 0 0 0 100px;
  }

  @media ${mediaQuery.desktop} {
    padding: 44px 0 85px;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
`;
