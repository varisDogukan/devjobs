import { createGlobalStyle } from "styled-components";

export const theme = {
  dark: {
    primaryColor: "#9DAEC2",
    primaryBg: "#121721",
    secondaryColor: "#FFFFFF",
    secondaryBg: "#19202D",
    tertiaryColor: "#FFFFFF",
    buttonThemeBg: "#303642",
    buttonThemeBgHover: "#696E76",
  },
  light: {
    primaryColor: "#6E8098",
    primaryBy: "#F4F6F8",
    secondaryColor: "#19202D",
    secondaryBg: "#FFFFFF",
    tertiaryColor: "#5964E0",
    buttonThemeBg: "#EFF0FC",
    buttonThemeBgHover: "#C5C9F4",
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

    --white: #FFFFFF;
    --violet-100: #D5D8F7;
    --violet-300: #939BF4;
    --violet-700: #5964E0;
    --grey: #979797;
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

  button { cursor: pointer; border: none; }

  p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

  #root { isolation: isolate; }
`;

export default GlobalStyles;
