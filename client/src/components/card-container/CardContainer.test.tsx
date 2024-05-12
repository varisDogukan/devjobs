import { render, screen } from "@/test-utils";
import CardContainer from "./CardContainer";

test("renders contracts with specific employment types", async () => {
  render(<CardContainer />);

  const expectedTypes = ["Full Time", "Part Time", "Freelance"];
  const contractElements = await screen.findAllByRole("contract");

  expectedTypes.forEach((type) => {
    expect(
      contractElements.some((element) => element.textContent === type)
    ).toBeTruthy();
  });
});
