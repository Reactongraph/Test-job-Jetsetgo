import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Success from "./Success";
import "@testing-library/jest-dom";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Success component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays a success message and a success logo", () => {
    render(
      <BrowserRouter>
        <Success />
      </BrowserRouter>,
    );

    const successMessage = screen.getByText(
      /you have successfully booked a flight/i,
    );
    expect(successMessage).toBeInTheDocument();

    const successLogo = screen.getByAltText("success-logo");
    expect(successLogo).toBeInTheDocument();
  });

  it("has a button that navigates to the home page when clicked", () => {
    render(
      <BrowserRouter>
        <Success />
      </BrowserRouter>,
    );

    const homeButton = screen.getByText("Home");
    fireEvent.click(homeButton);

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
});
