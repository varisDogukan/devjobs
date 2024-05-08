import { render, fireEvent, screen } from "@testing-library/react";
import useStore from "@/store/zuStandStore";
import ThemeToggle from "./ThemeToggle";
import "jest-styled-components";
import "jest-localstorage-mock";

describe("ThemeToggle", () => {
  it("renders the toggle button with sun and moon icons", () => {
    render(<ThemeToggle />);

    const sunIcon = screen.getByAltText("sun icon");
    const moonIcon = screen.getByAltText("moon icon");

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it("toggles the theme value in the store when the button is clicked", () => {
    // Set initial theme to "dark"
    localStorage.setItem("themeTitle", "dark");
    const { getByAltText } = render(<ThemeToggle />);

    const sunIcon = getByAltText("sun icon");
    const moonIcon = getByAltText("moon icon");

    // Check the initial store value
    let store = useStore.getState();
    expect(store.themeTitle).toBe("dark");

    // Click the toggle button to switch to "light"
    fireEvent.click(sunIcon);

    // Verify the store value has changed
    store = useStore.getState();
    expect(store.themeTitle).toBe("light");

    // Click the toggle button again to switch back to "dark"
    fireEvent.click(moonIcon);

    store = useStore.getState();
    expect(store.themeTitle).toBe("dark");
  });

  it("changes the toggle position based on the theme", () => {
    // Initially set the theme to dark
    localStorage.setItem("themeTitle", "dark");
    const { getByAltText } = render(<ThemeToggle />);

    // Check if the initial theme is dark
    const toggleWrapper = screen.getByRole("toggle");
    expect(toggleWrapper).toHaveStyleRule("left", "29px"); // Dark theme position

    // Trigger theme toggle
    fireEvent.click(getByAltText("sun icon"));

    // Check if the theme changed to light
    expect(toggleWrapper).toHaveStyleRule("left", "5px"); // Light theme position
    expect(localStorage.getItem("themeTitle")).toBe("light"); // Check localStorage update

    // Trigger theme toggle again to switch back to dark
    fireEvent.click(getByAltText("moon icon"));

    // Check if the theme changed back to dark
    expect(toggleWrapper).toHaveStyleRule("left", "29px");
    expect(localStorage.getItem("themeTitle")).toBe("dark");
  });
});
