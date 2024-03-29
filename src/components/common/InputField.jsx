import { useState } from "react";
const InputField = ({
  type,
  placeholder,
  Title,
  value,
  onChange,
  suggestions,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    if (e.target.value === "") {
      setShowSuggestions(false);
      return;
    }
    setShowSuggestions(true);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setShowSuggestions(false);
  };
  return (
    <div className="relative my-4 sm:w-[18%]">
      <span className="font-bold text-sm">{Title}</span>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        className="px-4 py-2 w-full font-base text-lg border border-gray rounded-md focus:outline-none "
        placeholder={placeholder}
      />
      {showSuggestions && suggestions && (
        <ul className="mt-2 p-2 bg-white w-full border border-gray-300 rounded shadow-md absolute z-10">
          {suggestions.length > 0 ? (
            suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item)}
                className="cursor-pointer py-1 px-2 hover:bg-gray-100"
              >
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputField;
