import CardDescription from "./CardDescription";
import ButtonsSmall from '../../../Helpers/Buttons/ButtonsSmall/ButtonsSmall'
//import Tooltip from '../../Tooltip/Tooltip'
import "@testing-library/jest-dom/extend-expect";
import { screen, render, userEvent } from "../../../../tests";
import { BrowserRouter } from "react-router-dom";
describe("Tooltip", () => {
  it("should see color code hidden", () => {
    const colorName = 'sky blue'
    const Button = 'donwload'
    const buttonLabel = 'donwload svg'

    render(
      <BrowserRouter>
        <CardDescription slug={colorName} /> 
        <ButtonsSmall label={buttonLabel} > {Button} </ButtonsSmall>
      </BrowserRouter>
    );
    // 1. see color name
    expect(screen.queryByText(colorName)).toBeInTheDocument();
    //2. hover show tooltip
    userEvent.hover(screen.queryByText(Button));
    expect(screen.queryByText(buttonLabel)).toBeInTheDocument();
        
});
});
