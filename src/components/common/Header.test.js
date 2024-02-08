import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  it("renders a title in a span tag, an input field, and a UI with ul and li for options", () => {
    render(<Header />);
    const titleSpan = screen.getByText(/jetsetgo/i);
    expect(titleSpan).toBeInTheDocument();
    expect(titleSpan.tagName).toBe("SPAN");
    expect(titleSpan).toHaveClass(
      "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
    );
  });
});
