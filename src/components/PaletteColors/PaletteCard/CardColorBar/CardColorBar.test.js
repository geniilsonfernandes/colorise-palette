import CardColorBar from "./CardColorBar";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, userEvent } from "../../../../tests";

document.execCommand = jest.fn();

describe("CardColorBar", () => {

  const colorCode = "59981A";
  
  it("should copy text when hovered", () => {
    render(<CardColorBar color={colorCode} />);
    
    // 1.
    expect(screen.queryByText(colorCode)).not.toBeInTheDocument();

    // 2. hover color
    const cardColor = screen.getByTitle(colorCode);
    userEvent.hover(cardColor);
    expect(screen.queryByText(colorCode)).toBeInTheDocument();

    // 3. copy color
    userEvent.click(cardColor);
    expect(screen.queryByText("Copied!")).toBeInTheDocument();

    //4. onhover
    userEvent.unhover(cardColor);
    expect(screen.queryByText("Copied!")).not.toBeInTheDocument();
    
  });
});
