import { ThemeProvider as Theme } from "styled-components";

import GlobalStyles, { theme } from "../styles/global-styles";
import useStore from "../store/zuStandStore";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeTitle } = useStore();

  return (
    <Theme theme={theme[themeTitle]}>
      {children}
      <GlobalStyles />
    </Theme>
  );
}
