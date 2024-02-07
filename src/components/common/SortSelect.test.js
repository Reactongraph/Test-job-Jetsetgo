import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortSelect from "./SortSelect";
import "@testing-library/jest-dom";

describe("SortSelect component", () => {
  it("toggles the options menu on button click", () => {
    const setSortOrder = jest.fn();

    render(<SortSelect setSortOrder={setSortOrder} />);

    const button = screen.getByRole("button", { name: /sort/i });
    fireEvent.click(button);

    const optionsMenu = screen.getByRole("menu");
    expect(optionsMenu).toBeVisible();

    fireEvent.click(button);
    expect(optionsMenu).not.toBeVisible();
  });

  it("calls setSortOrder with the correct value when an option is selected", () => {
    const setSortOrder = jest.fn();

    render(<SortSelect setSortOrder={setSortOrder} />);

    const button = screen.getByRole("button", { name: /sort/i });
    fireEvent.click(button);

    const cheapestFirstOption = screen.getByText(/cheapest first/i);
    fireEvent.click(cheapestFirstOption);

    expect(setSortOrder).toHaveBeenCalledWith(1);

    fireEvent.click(button);
    const cheapestLastOption = screen.getByText(/cheapest last/i);
    fireEvent.click(cheapestLastOption);

    expect(setSortOrder).toHaveBeenCalledWith(-1);
  });
});
