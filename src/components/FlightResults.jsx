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
          filterAndSortEntries(data?.data?.result, filter, page, sortOrder),
        );
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [filter, page, sortOrder]);
  return (
    <>
      {flights && flights.data ? (
        <div className="w-full ">
          <div className="w-full sm:w-auto bg-gray-200 flex items-end mb-[450px] sm:mb-4 justify-end">
            <div className="relative w-full flex justify-center h-[60vh] inset-0 bg-[url('/public/ashim-d-silva-pGcqw1ARGyg-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
              <div className="absolute sm:bottom-[-100px]  sm:w-auto w-full">
                <ul className="flex sm:gap-64 justify-center mb-12 w-full">
                  <li>
                    <span className="text-white font-base text-2xl">
                      Flight
                    </span>
                    <img
                      src={"/icon-flight.png"}
                      alt="logo"
                      height={50}
                      width={50}
                      className="my-10"
                    />
                  </li>
                  <li>
                    <span className="text-white font-base text-2xl">Hotel</span>
                    <img
                      src={"/icon-hotel.png"}
                      alt="logo"
                      height={40}
                      width={40}
                      className="my-10"
                    />
                  </li>
                  <li>
                    <span className="text-white font-base text-2xl">Car</span>
                    <img
                      src={"/icon-car.png"}
                      alt="logo"
                      height={50}
                      width={50}
                      className="my-10"
                    />
                  </li>
                  <li>
                    <span className="text-white font-base text-2xl">
                      Package Deals
                    </span>
                    <img
                      src={"/icon-tour.png"}
                      alt="logo"
                      height={80}
                      width={80}
                      className="my-10"
                    />
                  </li>
                  <li>
                    <span className="text-white font-base text-2xl">
                      Cruise
                    </span>
                    <img
                      src={"/icon-cruise.png"}
                      alt="logo"
                      height={60}
                      width={60}
                      className="my-10"
                    />
                  </li>
                </ul>
                <Filter flights={flights?.data?.result} setFilter={setFilter} />
              </div>
            </div>
          </div>
          {filterData ? (
            filterData.length > 0 ? (
              <div className="flex flex-col gap-1 items-center sm:mt-24 mt-48">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between p-1 mb-2">
                    <SortSelect setSortOrder={setSortOrder} />
                    <PaginationSelect
                      totalEntries={flights?.data?.result.length}
                      currentPage={page}
                      setPage={setPage}
                    />
                  </div>
                  {filterData?.map((flight) => (
                    <FlightCard
                      flight={flight}
                      id={flight.id}
                      key={flight.id}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <span className="text-xl font-semibold">No data matched</span>
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
