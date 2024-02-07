import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PaginationSelect from "./PaginationSelect";
import "@testing-library/jest-dom";

describe("PaginationSelect component", () => {
  it("renders a select dropdown with options based on total entries", () => {
    const totalEntries = 30;
    const currentPage = 1;
    const setPage = jest.fn();

    render(
      <PaginationSelect
        totalEntries={totalEntries}
        currentPage={currentPage}
        setPage={setPage}
      />,
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const totalPages = Math.ceil(totalEntries / 10);
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(totalPages);
  });

  it("calls setPage with the new page value when an option is selected", () => {
    const totalEntries = 30;
    const currentPage = 1;
    const setPage = jest.fn();

    render(
      <PaginationSelect
        totalEntries={totalEntries}
        currentPage={currentPage}
        setPage={setPage}
      />,
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "2" } });

    expect(setPage).toHaveBeenCalledWith("2");
  });
});
