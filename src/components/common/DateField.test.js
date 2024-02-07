import React from "react";
import { render, screen } from "@testing-library/react";
import DateField from "./DateField";
import "@testing-library/jest-dom";

describe("DateField component", () => {
  it("renders an input field of type date within a div", () => {
    render(<DateField type="date" placeholder="Select Date" register={{}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "date");
  });
});
