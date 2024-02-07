import React, { useState, useEffect } from "react";
import FlightCard from "./common/FlightCard";
import Filter from "./common/Filter";
import PaginationSelect from "./common/PaginationSelect";
import SortSelect from "./common/SortSelect";
import SpinnerLoader from "./common/SpinnerLoader";
import { filterAndSortEntries } from "../utils/helper";

const FlightResults = () => {
  const [flights, setFlights] = useState([]);
  const [filter, setFilter] = useState({
    source: "",
    destination: "",
    airlines: "",
    depTime: "",
    arrTime: "",
  });
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setFlights(data);
        setFilterData(
          filterAndSortEntries(data?.data?.result, filter, page, sortOrder)
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [filter, page, sortOrder]);
  return (
    <>
      {flights && flights.data ? (
        <div className="w-full mt-2 flex flex-col items-center">
          <div className="p-2">
            <Filter flights={flights?.data?.result} setFilter={setFilter} />
          </div>
          {filterData ? (
            filterData.length > 0 && (
              <div className="flex flex-col gap-1">
                <div className="flex justify-between p-1">
                  <SortSelect setSortOrder={setSortOrder} />
                  <PaginationSelect
                    totalEntries={flights?.data?.result.length}
                    currentPage={page}
                    setPage={setPage}
                  />
                </div>
                {filterData?.map((flight) => (
                  <FlightCard flight={flight} id={flight.id} key={flight.id} />
                ))}
              </div>
            )
          ) : (
            <span className="text-xl font-semibold">Search the Flights</span>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <SpinnerLoader />
        </div>
      )}
    </>
  );
};

export default FlightResults;
