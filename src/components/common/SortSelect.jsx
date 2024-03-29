import React, { useState } from "react";

const SortSelect = (props) => {
  const { setSortOrder } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    setSortOrder(value === "Cheapest First" ? 1 : -1);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md cursor-pointer px-4 py-2 bg-white shadow-lg  text-base font-medium focus:outline-none "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedValue || "Sort"}{" "}
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right cursor-pointer  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white  focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                selectedValue === "Cheapest First" && "bg-gray-200"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("Cheapest First")}
            >
              Cheapest First
            </div>
            <div
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                selectedValue === "Cheapest Last" && "bg-gray-200"
              }`}
              role="menuitem"
              onClick={() => handleOptionClick("Cheapest Last")}
            >
              Cheapest Last
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortSelect;
