import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
describe("App Component", () => {
  test("render buttons", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(18);
  });

  test("sum two numbers", () => {
    render(<App />);
    const nineButton = screen.getByText(/9/);
    const sumButton = screen.getByText("+");
    const equalButton = screen.getByText(/=/);
    userEvent.click(nineButton);
    userEvent.click(sumButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);
    const total = screen.getAllByText(/18/);
    expect(total).toHaveLength(2);
  });
});
