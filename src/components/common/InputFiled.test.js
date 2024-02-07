import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./InputField";
import "@testing-library/jest-dom";

describe("InputField component", () => {
  it("renders a title in a span tag, an input field, and a UI with ul and li for options", () => {
    const suggestions = ["Option   1", "Option   2", "Option   3"];
    const handleChange = jest.fn();

    render(
      <InputField
        type="text"
        placeholder="Search..."
        Title="Search"
        value=""
        onChange={handleChange}
        suggestions={suggestions}
      />,
    );

    const titleSpan = screen.getByText("Search");
    expect(titleSpan).toBeInTheDocument();
    expect(titleSpan.tagName).toBe("SPAN");

    const inputField = screen.getByPlaceholderText("Search...");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");

    const listItems = screen.queryAllByRole("listitem");
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(suggestions[index]);
    });
  });
});
