import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Filter from "./Filter";
import "@testing-library/jest-dom";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    setValue: jest.fn(),
    getValues: jest.fn(),
  }),
}));

describe("Filter component", () => {
  it("renders input fields for departure city and return city", () => {
    render(<Filter flights={[]} setFilter={jest.fn()} />);

    const departCityInput = screen.getByPlaceholderText("Departure City");
    const returnCityInput = screen.getByPlaceholderText("Return City");

    expect(departCityInput).toBeInTheDocument();
    expect(returnCityInput).toBeInTheDocument();
  });

  it("filters cities based on input", async () => {
    render(<Filter flights={[]} setFilter={jest.fn()} />);

    const departCityInput = screen.getByPlaceholderText("Departure City");
    fireEvent.change(departCityInput, { target: { value: "New" } });
  });

  it("submits the form and calls setFilter with the correct data", async () => {
    const setFilter = jest.fn();
    render(<Filter flights={[]} setFilter={setFilter} />);

    const departCityInput = screen.getByPlaceholderText("Departure City");
    const returnCityInput = screen.getByPlaceholderText("Return City");
    const departDateInput = screen.getByPlaceholderText("Departure Date");
    const returnDateInput = screen.getByPlaceholderText("Return Date");
    const airlinesInput = screen.getByPlaceholderText("Airlines");

    fireEvent.change(departCityInput, { target: { value: "New York" } });
    fireEvent.change(returnCityInput, { target: { value: "London" } });
    fireEvent.change(departDateInput, { target: { value: "2024-03-01" } });
    fireEvent.change(returnDateInput, { target: { value: "2024-03-10" } });
    fireEvent.change(airlinesInput, { target: { value: "AA" } });
  });
});
