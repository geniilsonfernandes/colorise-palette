import ButtonsSmall from "./ButtonsSmall";
//import Tooltip from '../../Tooltip/Tooltip'
import "@testing-library/jest-dom/extend-expect";
import { screen, render, userEvent } from "../../../../tests";

describe("Tooltip", () => {
  it("should render button", () => {
    render(<ButtonsSmall label="Save Colors">save</ButtonsSmall>);
    // 1. conteudo existe no component
    expect(screen.queryByText("save")).toBeInTheDocument();

    //2. hover show tooltip
    userEvent.hover(screen.queryByText("save"));
    expect(screen.queryByText("Save Colors")).toBeInTheDocument();
  });
});
