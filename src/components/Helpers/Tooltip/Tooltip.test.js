import Tooltip from "./Tooltip";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, userEvent } from "../../../tests";

document.execCommand = jest.fn();

describe("Tooltip", () => {
  it("should see color code hidden", () => {
    render(<Tooltip label="Save Colors" />);
    // 1. conteudo existe no component
    expect(screen.queryByText("Save Colors")).toBeInTheDocument();
  });
});
