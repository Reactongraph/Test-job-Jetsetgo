import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getUniqueAirline,
  getUniqueDestinationCity,
  getUniqueSourceCity,
} from "../../utils/helper";
import DateField from "./DateField";
import InputField from "./InputField";

const Filter = (props) => {
  const { flights, setFilter } = props;
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [showDepartSuggestions, setShowDepartSuggestions] = useState([]);
  const [showReturnSuggestions, setshowReturnSuggestions] = useState([]);
  const [showAirportSuggestions, setShowAirportSuggestions] = useState([]);

  const onSubmit = (data) => {
    setFilter({
      source: data.departCity,
      destination: data.returnCity,
      airlines: data.airlines,
      depTime: data.departDate,
      arrTime: data.returnDate,
    });
  };
  const allCities1 = getUniqueSourceCity(flights);
  const allCities2 = getUniqueDestinationCity(flights);
  const arr3 = getUniqueAirline(flights);

  const filterCities = (field, value) => {
    let filtered;
    if (field === "departCity") {
      filtered = allCities1.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase()),
      );
      setShowDepartSuggestions(filtered);
    } else if (field === "returnCity") {
      filtered = allCities2.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase()),
      );
      setshowReturnSuggestions(filtered);
    } else if (field === "airlines") {
      filtered = arr3.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setShowAirportSuggestions(filtered);
    }
    setValue(field, value);
  };

  return (
    <div className="flex items-center w-full px-8 bg-white shadow-lg rounded-md relative pb-12 mb-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="w-full flex flex-col sm:flex-row sm:gap-4 justify-center">
          <InputField
            type="text"
            placeholder="Departure City"
            value={getValues("departCity")}
            onChange={(value) => filterCities("departCity", value)}
            suggestions={showDepartSuggestions}
            Title="From"
          />
          <InputField
            type="text"
            placeholder="Return City"
            value={getValues("returnCity")}
            onChange={(value) => filterCities("returnCity", value)}
            suggestions={showReturnSuggestions}
            Title="To"
          />

          <InputField
            type="text"
            placeholder="Airlines"
            value={getValues("airlines")}
            onChange={(value) => filterCities("airlines", value)}
            suggestions={showAirportSuggestions}
            Title="Airlines Name"
          />
          <DateField
            type="date"
            placeholder="Departure Date"
            register={register("departDate")}
          />
          <DateField
            type="date"
            placeholder="Return Date"
            register={register("returnDate")}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 bg-[#DA5200] text-white w-fit px-4 text-lg h-fit py-2.5 rounded-3xl font-bold absolute bottom-[-20px]"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default Filter;
