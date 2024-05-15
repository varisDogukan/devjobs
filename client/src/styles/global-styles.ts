import mediaQuery from "@/styles/mediaQuery";
import { createGlobalStyle } from "styled-components";

export const theme = {
  dark: {
    primaryColor: "rgb(157, 174, 194)",
    primaryBg: "rgb(18, 23, 33)",
    secondaryColor: "rgb(255, 255, 255)",
    secondaryBg: "rgb(25, 32, 45)",
    tertiaryColor: "rgb(255, 255, 255)",
    buttonThemeBg: "rgb(48, 54, 66)",
    buttonThemeBgHover: "rgb(105, 110, 118)",
    checkboxThemeBg: "rgb(48, 55, 66)",
    lineBg: "rgb(42, 52, 66)",
  },
  light: {
    primaryColor: "rgb(110, 128, 152)",
    primaryBg: "rgb(244, 246, 248)",
    secondaryColor: "rgb(25, 32, 45)",
    secondaryBg: "rgb(255, 255, 255)",
    tertiaryColor: "rgb(89, 100, 224)",
    buttonThemeBg: "rgb(239, 240, 252)",
    buttonThemeBgHover: "rgb(197, 201, 244)",
    checkboxThemeBg: "rgb(232, 232, 234)",
    lineBg: "rgb(226, 230, 234)",
  },
};

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBg};
    --secondary-color: ${({ theme }) => theme.secondaryColor};
    --secondary-bg: ${({ theme }) => theme.secondaryBg};
    --tertiary-color: ${({ theme }) => theme.tertiaryColor};
    --button-theme-bg: ${({ theme }) => theme.buttonThemeBg};
    --button-theme-bg-hover: ${({ theme }) => theme.buttonThemeBgHover};
    --line-bg:${({ theme }) => theme.lineBg};

    --white: rgb(255, 255, 255);
    --violet-100: rgb(213, 216, 247);
    --violet-300: rgb(147, 155, 244);
    --violet-700: rgb(89, 100, 224);
    --grey: rgb(110, 128, 152);

    --checkbox-theme-bg: ${({ theme }) => theme.checkboxThemeBg};;
    --checkbox-hover: var(--violet-100);
    --checkbox-active: var(--violet-700);

    --max-width: 1110px;
  }

  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;   
    font-family: inherit;
  }

  html { font-size: 100%; } 
  html, body, #root { height: 100%; }

  body {  
    line-height: 1.5;  
    -webkit-font-smoothing: antialiased; 
    font-family: "Kumbh Sans", sans-serif;
    background-color: var(--primary-bg);
  }

  img, picture, video, canvas, svg {  
    display: block;  
    max-width: 100%;  
    object-fit: cover; 
  }

  ul { list-style: none; }

  a { 
    text-decoration: none; 
    color: inherit 
  }

  input, button, textarea, select { font: inherit; }

  button { cursor: pointer; border: none; user-select: none }

  p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

  #root { isolation: isolate; }

  .container {
    max-width: var(--max-width);
    padding: 0 10px;
    margin: 0 auto;

    @media ${mediaQuery.mobile} {
      padding: 0 24px;
    }

    @media ${mediaQuery.tablet} {
      padding: 0 39px;
    }

    @media ${mediaQuery.desktop} {
      padding: 0;
    }
  }
`;

export default GlobalStyles;
