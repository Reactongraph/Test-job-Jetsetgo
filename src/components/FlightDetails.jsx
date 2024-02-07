import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { formatDate, formatTime } from "../utils/helper";
import Button from "./common/Button";
import SpinnerLoader from "./common/SpinnerLoader";
const FlightDetails = () => {
  const [flight, setFlight] = useState(null);

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        if (data) {
          const flightDetail = data?.data?.result?.filter(
            (flight) => flight.id === params.id,
          )[0];
          setFlight(flightDetail);
        }
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {flight !== null ? (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl mb-2 text-black font-bold">
              Review Your Booking
            </h1>
            <div className="flex flex-col justify-end mb-4">
              <span className="text-lg">
                Total Duration: {flight?.displayData?.totalDuration}{" "}
              </span>
              <span className="text-lg">Price: ${flight?.fare}</span>
            </div>
            <div className="flex justify-center">
              <div className="flex sm:flex gap-4 sm:gap-28 px-4">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">Source</span>
                  <span className="text-lg font-normal text-black">
                    {flight?.displayData?.source?.airport?.cityName}
                    {", "}
                    {flight?.displayData?.source?.airport?.countryCode}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {formatTime(flight?.displayData?.source?.depTime)}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {formatDate(flight?.displayData?.source?.depTime)}
                  </span>
                  <span className="text-base font-light text-black">
                    {flight?.displayData?.source?.airport?.airportName}{" "}
                    {`(${flight?.displayData?.source?.airport?.airportCode})`}
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-black">
                    {flight?.displayData?.airlines[0].airlineName}
                  </span>
                  <img
                    src="/flight.svg"
                    alt="flight logo"
                    className="h-12 w-12"
                  />
                  <div className="flex">
                    <span className="text-black">
                      {flight?.displayData?.airlines?.[0].airlineCode}-
                    </span>
                    <span className="text-black">
                      {flight?.displayData?.airlines?.[0].flightNumber}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">Destination</span>
                  <span className="text-lg font-normal text-black">
                    {flight?.displayData?.destination?.airport?.cityName}
                    {", "}
                    {flight?.displayData?.destination?.airport?.countryCode}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {formatTime(flight?.displayData?.destination?.arrTime)}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {formatDate(flight?.displayData?.destination?.arrTime)}
                  </span>
                  <span className="text-base font-light text-black">
                    {flight?.displayData?.destination?.airport?.airportName}{" "}
                    {`(${flight?.displayData?.destination?.airport?.airportCode})`}
                  </span>
                </div>
              </div>
            </div>
            <Button text={"Confirm Booking"} path={"/success"} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <SpinnerLoader />
        </div>
      )}
    </>
  );
};

export default FlightDetails;
