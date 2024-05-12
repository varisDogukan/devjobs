import { renderHook, act } from "@testing-library/react";
import useStore from "./zuStandStore";
import "jest-localstorage-mock";

describe("useStore", () => {
  beforeEach(() => {
    localStorage.clear();

    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.resetStore(); // Reset the store to its initial state
    });
  });

  describe(" -*- themeTitle, toggleTheme and restStore -*- ", () => {
    test('Initial theme should be "dark"', () => {
      const { result } = renderHook(() => useStore());

      expect(result.current.themeTitle).toBe("dark");
    });

    test('Theme should be "light" after toggleTheme is called', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.themeTitle).toBe("light");
      expect(localStorage.setItem).toHaveBeenCalledWith("themeTitle", "light");
    });

    test('Theme should return to "dark" after toggleTheme is called twice', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.toggleTheme();
      });

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.themeTitle).toBe("dark");
      expect(localStorage.setItem).toHaveBeenCalledWith("themeTitle", "dark");
    });
  });

  describe(" -*- formInfo and setFormInfo -*- ", () => {
    test("Initial formInfo should be empty and false for fullTimeOnly", () => {
      const { result } = renderHook(() => useStore());
      expect(result.current.formInfo).toEqual({
        search: "",
        location: "",
        fullTimeOnly: false,
      });
    });

    test("setFormInfo should update formInfo correctly", () => {
      const { result } = renderHook(() => useStore());

      const newFormInfo = {
        search: "Developer",
        location: "United Kingdom",
        fullTimeOnly: true,
      };

      act(() => {
        result.current.setFormInfo(newFormInfo);
      });

      expect(result.current.formInfo).toEqual(newFormInfo);
    });

    test("setFormInfo should handle partial updates", () => {
      const { result } = renderHook(() => useStore());
      const initialUpdate = { ...result.current.formInfo, search: "Designer" };

      // First update
      act(() => {
        result.current.setFormInfo(initialUpdate);
      });

      expect(result.current.formInfo.search).toBe("Designer");
      expect(result.current.formInfo.location).toBe("");
      expect(result.current.formInfo.fullTimeOnly).toBe(false);

      // Second update
      const subsequentUpdate = {
        ...result.current.formInfo,
        location: "New York",
      };

      act(() => {
        result.current.setFormInfo(subsequentUpdate);
      });

      expect(result.current.formInfo.search).toBe("Designer");
      expect(result.current.formInfo.location).toBe("New York");
      expect(result.current.formInfo.fullTimeOnly).toBe(false);
    });
  });
});
