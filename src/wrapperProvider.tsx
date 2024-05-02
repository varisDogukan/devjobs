import ThemeProvider from "./themeProvider";

interface WrapperProviderProps {
  children: React.ReactNode;
}

export default function WrapperProvider({ children }: WrapperProviderProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
