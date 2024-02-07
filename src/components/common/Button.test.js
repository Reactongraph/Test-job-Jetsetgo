import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";
import "@testing-library/jest-dom";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Button component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should navigate to the specified route when clicked", () => {
    const expectedPath = "/expected-path";
    render(
      <BrowserRouter>
        <Button text="Go to Page" path={expectedPath} />
      </BrowserRouter>,
    );

    const buttonElement = screen.getByText("Go to Page");
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith(expectedPath);
  });
});
