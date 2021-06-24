import CardDescription from "./CardDescription";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, userEvent, cleanup } from "../../../../tests";
import { BrowserRouter } from "react-router-dom";

const mockDownloadSVG = jest.fn();

jest.mock("../../../../utilities/downloadSVG", () => ({
  ___esModule: true,
  downloadSVG: (colors, colorName) => mockDownloadSVG(colors, colorName),
}));

const mockIsFavorite = jest.fn(() => false);
const mockToggleFavorite = jest.fn();

// jest.mock("../../../../Hook/useFavorite", () => ({
//   ___esModule: true,
//   default: jest.fn(() => ({
//     isFavorite: () => mockIsFavorite(),
//     toggleFavorite: () => mockToggleFavorite(),
//   }))
// }));

jest.mock('../../../../Hook/useFavorite', () => ({
  default: () => ({
     isFavorite: mockIsFavorite(),
     toggleFavorite: mockToggleFavorite()
  })
}))


describe("CardDescription", () => {
  //afterEach(cleanup)
  afterAll(() => jest.unmock('../../../../Hook/useFavorite'))

  const colorName = "Sky Blue";
  const colors = ["C3E0E5", "274472"];
  it("should render buttons", () => {
    render(
      <BrowserRouter>
        <CardDescription slug={colorName} />
      </BrowserRouter>
    );
    // 1. see color name
    expect(screen.queryByText(colorName)).toBeInTheDocument();
  });

  it("should donwload in button clicked", () => {
    render(
      <BrowserRouter>
        <CardDescription colors={colors} slug={colorName} />
      </BrowserRouter>
    );

    const downloadButton = screen.getByTestId("Download");
    expect(downloadButton).toBeInTheDocument();

    userEvent.click(downloadButton);
    expect(mockDownloadSVG).toHaveBeenCalledWith(colors, colorName);
  });

  it("should toggleFavorite in button clicked", () => {
    render(
      <BrowserRouter>
        <CardDescription colors={colors} slug={colorName} />
      </BrowserRouter>
    );

    const downloadButton = screen.getByTestId("favorite");
    expect(downloadButton).toBeInTheDocument();

    userEvent.click(downloadButton);
    expect(mockToggleFavorite).toHaveBeenCalled();
  
  });
});
