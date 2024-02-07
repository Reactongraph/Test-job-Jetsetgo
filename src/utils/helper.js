export function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(inputDate);
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export function formatTime(inputTime) {
  const date = new Date(inputTime);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function getUniqueSourceCity(data) {
  const cityNames = new Set();
  data.forEach((entry) => {
    const sourceCityName = entry.displayData.source.airport.cityName;
    cityNames.add(sourceCityName);
  });
  return Array.from(cityNames);
}

export function getUniqueDestinationCity(data) {
  const cityNames = new Set();
  data.forEach((entry) => {
    const destinationCityName = entry.displayData.destination.airport.cityName;
    cityNames.add(destinationCityName);
  });
  return Array.from(cityNames);
}

export function getUniqueAirline(data) {
  const airlineNames = new Set();
  data.forEach((entry) => {
    entry.displayData.airlines.forEach((airline) => {
      airlineNames.add(airline.airlineName);
    });
  });
  return Array.from(airlineNames);
}


export function filterAndSortEntries(entries, filters, pageNumber, order) {
    if (filters.source) {
        entries = entries.filter(entry => entry.displayData.source.airport.cityName === filters.source);
    } else if (filters.destination) {
        entries = entries.filter(entry => entry.displayData.destination.airport.cityName === filters.destination);
    } else if (filters.airlines) {
        entries = entries.filter(entry => entry.displayData.airlines[0].airlineName === filters.airlines);
    } else if (filters.depTime) {
        entries = entries.filter(entry => entry.displayData.source.depTime === filters.depTime);
    } else if (filters.arrTime) {
        entries = entries.filter(entry => entry.displayData.destination.arrTime === filters.arrTime);
    }
    
    const pageSize = 10;
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const entriesForPage = entries.slice(startIndex, endIndex);
    
    if (order === 1) {
        return entriesForPage.sort((a, b) => a.fare - b.fare);
    } else if (order === -1) {
        return entriesForPage.sort((a, b) => b.fare - a.fare);
    } else {
        return entriesForPage;
    }
}
