import {
  formatDate,
  formatTime,
  getUniqueSourceCity,
  getUniqueDestinationCity,
} from "./helper";

describe("Helper functions", () => {
  test("formatDate formats a date correctly", () => {
    const dateString = "2024-03-01T12:00:00Z";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("Fri, 1 Mar 2024");
  });

  test("formatTime formats a time correctly", () => {
    const timeString = "2024-03-01T12:00:00Z";
    const formattedTime = formatTime(timeString);
    expect(formattedTime).toBe("17:30");
  });

  test("getUniqueSourceCity returns an array of unique source city names", () => {
    const flights = [
      { displayData: { source: { airport: { cityName: "New York" } } } },
      { displayData: { source: { airport: { cityName: "Los Angeles" } } } },
      { displayData: { source: { airport: { cityName: "New York" } } } },
    ];
    const uniqueCities = getUniqueSourceCity(flights);
    expect(uniqueCities).toEqual(["New York", "Los Angeles"]);
  });

  test("getUniqueDestinationCity returns an array of unique destination city names", () => {
    const flights = [
      { displayData: { destination: { airport: { cityName: "Paris" } } } },
      { displayData: { destination: { airport: { cityName: "London" } } } },
      { displayData: { destination: { airport: { cityName: "Paris" } } } },
    ];
    const uniqueCities = getUniqueDestinationCity(flights);
    expect(uniqueCities).toEqual(["Paris", "London"]);
  });
});
