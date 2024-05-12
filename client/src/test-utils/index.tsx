import { render as RtlRender } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// make a function to generate a unique query client for eact test
const generateQueryClient = () => {
  return new QueryClient();
};

function customRender(ui: ReactElement, client?: QueryClient) {
  const queryClient = client ?? generateQueryClient();

  return RtlRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { customRender as render };
