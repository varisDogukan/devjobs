import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./themeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface WrapperProviderProps {
  children: React.ReactNode;
}

export default function WrapperProvider({ children }: WrapperProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
