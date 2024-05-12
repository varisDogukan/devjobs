import { FormType } from "@/types";
import { create } from "zustand";

export type Store = {
  themeTitle: "dark" | "light";
  toggleTheme: () => void;
  resetStore: () => void; // Reset store to initial state

  formInfo: FormType;
  setFormInfo: (formInfo: FormType) => void;
};

const initialState: FormType = {
  search: "",
  location: "",
  fullTimeOnly: false,
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

  formInfo: initialState,
  setFormInfo: (props) =>
    set(() => {
      return {
        formInfo: props,
      };
    }),
}));

export default useStore;
