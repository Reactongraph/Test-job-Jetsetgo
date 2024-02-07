import { formatDate, formatTime } from "../../utils/helper";
import Button from "./Button";
const FlightCard = ({ flight, id }) => {
  return (
    
    <div class="bg-white p-4 w-auto rounded-lg shadow-lg text-center">
      <div class="flex justify-center">
        <div class="flex flex-col sm:flex-row gap-10 sm:gap-28 px-4">
          <div class="flex flex-col">
            <span class=" text-lg font-normal">
              {flight?.displayData?.source?.airport?.cityName}
              {", "}
              {flight?.displayData?.source?.airport?.countryCode}
            </span>
            <span class=" text-2xl font-semibold">
              {" "}
              {formatTime(flight?.displayData?.source?.depTime)}
            </span>
            <span class="text-sm font-semibold">
              {formatDate(flight?.displayData?.source?.depTime)}
            </span>
            <span class="  text-base font-light">
              {" "}
              {flight?.displayData?.source?.airport?.airportCode}
            </span>
          </div>
          <div class=" flex flex-col sm:flex-row gap-8  sm:gap-24 items-center">
            <div className="flex gap-1">
              <img
                src={"/clock-line-icon.svg"}
                alt="time-logo"
                width={15}
                height={15}
                className="text-base font-base"
              />
              <span className="text-base font-normal">
                {flight?.displayData?.totalDuration}
              </span>
            </div>
            <div className="flex flex-col">
              <span>
                {flight?.displayData?.airlines[0].airlineName}
              </span>
              <img src="/flight.svg" alt="flight logo" class="h-12 w-12" />
              <div class="flex">
                <span >
                  {flight?.displayData?.airlines?.[0].airlineCode}-
                </span>
                <span>
                  {flight?.displayData?.airlines?.[0].flightNumber}
                </span>
              </div>
            </div>
            <span>
              {flight?.displayData?.stopInfo === "Non stop"
                ? "Direct"
                : flight?.displayData?.stopInfo}
            </span>
          </div>
          <div class="flex flex-col">
            <span class=" text-lg font-normal">
              {flight?.displayData?.destination?.airport?.cityName}
              {", "}
              {flight?.displayData?.destination?.airport?.countryCode}
            </span>
            <span class="text-2xl font-semibold">
              {" "}
              {formatTime(flight?.displayData?.destination?.arrTime)}
            </span>
            <span class=" text-sm font-semibold">
              {formatDate(flight?.displayData?.destination?.arrTime)}
            </span>
            <span class="  text-base font-light">
              {flight?.displayData?.destination?.airport?.airportCode}
            </span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xl font-semibold">
              Price : ${flight?.fare}
            </span>
            <Button text={"Book"} path={`details/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
