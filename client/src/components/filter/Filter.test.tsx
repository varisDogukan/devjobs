import { render, fireEvent, screen } from "@testing-library/react";
import { jest } from "@jest/globals";
import Filter from "./Filter";
import { storeResetFns } from "@/__mocks__/zustand";

jest.mock("@/store/zuStandStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

let setFormInfoMock: jest.Mock;

describe("Filter Component", () => {
  setFormInfoMock = jest.fn();

  beforeEach(() => {
    storeResetFns.forEach((resetFn) => resetFn());

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@/store/zuStandStore").default.mockImplementation(() => ({
      setFormInfo: setFormInfoMock,
    }));
  });

  test("submits form and calls setFormInfo with correct data", async () => {
    render(<Filter />);

    fireEvent.change(
      screen.getByPlaceholderText("Filter by title, companies, expertise…"),
      { target: { value: "Developer" } }
    );
    fireEvent.change(screen.getByPlaceholderText("Filter by location…"), {
      target: { value: "Remote" },
    });
    fireEvent.click(screen.getByRole("fullTimeOnly"));
    fireEvent.submit(screen.getByRole("form"));

    expect(setFormInfoMock).toHaveBeenCalledWith({
      search: "Developer",
      location: "Remote",
      fullTimeOnly: true,
    });
  });

  test("toggles modal visibility on mobile view", () => {
    global.innerWidth = 500;

    render(<Filter />);
    expect(screen.queryByText("Full Time Only")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("filter"));
    expect(screen.getByText("Full Time Only")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(screen.queryByText("Full Time Only")).not.toBeInTheDocument();
  });

  test("renders different containers based on device width", () => {
    global.innerWidth = 500;

    render(<Filter />);

    expect(screen.getByRole("filter")).toBeInTheDocument();
    expect(screen.queryByText("Filter by location…")).not.toBeInTheDocument();
  });
});
