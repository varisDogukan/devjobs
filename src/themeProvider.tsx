import { ThemeProvider as Theme } from "styled-components";

import GlobalStyles, { theme } from "./global-styles";
import useStore from "./store/zuStandStore";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeTitle } = useStore();

  console.log(themeTitle);

  return (
    <Theme theme={theme[themeTitle]}>
      {children}
      <GlobalStyles />
    </Theme>
  );
}
