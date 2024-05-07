// zuStandStore.ts
import { create } from "zustand";

export type Store = {
  themeTitle: "dark" | "light";
  toggleTheme: () => void;
  resetStore: () => void; // Reset store to initial state
};

function checkStorage(): "dark" | "light" {
  const storedTheme = localStorage.getItem("themeTitle");

  if (storedTheme) {
    return storedTheme as "dark" | "light";
  }

  return "dark";
}

const useStore = create<Store>((set) => ({
  themeTitle: checkStorage(),
  toggleTheme: () =>
    set((state) => {
      const themeTitle = state.themeTitle === "dark" ? "light" : "dark";
      localStorage.setItem("themeTitle", themeTitle);
      return { themeTitle };
    }),
  resetStore: () => set(() => ({ themeTitle: "dark" })),
}));

export default useStore;
