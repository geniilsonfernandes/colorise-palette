import Head from "./Head";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "../../../tests";

describe("Head", () => {
  it("should see Head´s text", () => {
    render(<Head title="title" subtitle="subtitle" />);

    expect(screen.queryByText("title")).toBeInTheDocument();
    expect(screen.queryByText("subtitle")).toBeInTheDocument();
  });
});
