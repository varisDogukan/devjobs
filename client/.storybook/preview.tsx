import React from "react";
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Decorator } from "@storybook/react";
import ThemeProvider from "../src/providers/themeProvider";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const decorators: Decorator[] = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  ),
];

const preview: Preview = {
  decorators: decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
