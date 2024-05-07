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
