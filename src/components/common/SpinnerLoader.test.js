import React from "react";
import { render, screen } from "@testing-library/react";
import SpinnerLoader from "./SpinnerLoader";
import "@testing-library/jest-dom";

describe("SpinnerLoader component", () => {
  it("renders a div containing an SVG spinner", () => {
    render(<SpinnerLoader />);

    const svgElement = screen.getByLabelText("spinner-loader-svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass(
      "h-6 animate-spin fill-blueBg text-gray-200 dark:text-gray-600",
    );
    expect(svgElement).toHaveAttribute("fill", "none");

    const srOnlyText = screen.getByText("Loading...");
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveClass("sr-only");
  });
});
