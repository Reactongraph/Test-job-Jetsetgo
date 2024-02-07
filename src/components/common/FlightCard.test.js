import React from "react";
import FlightCard from "./FlightCard";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";

describe("FlightCard component", () => {
  it("renders flight data correctly", () => {
    const sampleFlight = {
      displayData: {
        source: {
          airport: { cityName: "New York", countryCode: "USA" },
          depTime: "08:00",
        },
        destination: {
          airport: { cityName: "London", countryCode: "UK" },
          arrTime: "16:00",
        },
        totalDuration: "8 hours",
        airlines: [
          { airlineName: "Airline", airlineCode: "AI", flightNumber: "123" },
        ],
        stopInfo: "Direct",
      },
      fare: "$200",
    };

    render(<FlightCard flight={sampleFlight} id="1" />);

    expect(screen.getByText(/new york, usa/i)).toBeInTheDocument();
    expect(screen.getByText(/london, uk/i)).toBeInTheDocument();

    expect(screen.getByText(/8 hours/i)).toBeInTheDocument();

    expect(screen.getByText(/direct/i)).toBeInTheDocument();

    const flightLogo = screen.getByAltText("flight logo");
    expect(flightLogo).toBeInTheDocument();
    expect(flightLogo).toHaveAttribute("src", "/flight.svg");
  });
});

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Button component", () => {
  afterEach(() => {
    // Clear the mock after each test
    jest.clearAllMocks();
  });

  it("navigates to the specified route when clicked", () => {
    const expectedPath = "/expected-path"; // Replace with the path you expect

    render(
      <BrowserRouter>
        <Button text="Go to Page" path={expectedPath} />
      </BrowserRouter>,
    );

    const buttonElement = screen.getByText("Go to Page");
    fireEvent.click(buttonElement);

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith(expectedPath);
  });
});
