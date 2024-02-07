import React from "react";

const PaginationSelect = ({ totalEntries, currentPage, setPage }) => {
  const totalPages = Math.ceil(totalEntries / 10);

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  return (
    <select
      value={currentPage}
      onChange={handlePageChange}
      className="py-2 bg-white px-4 shadow-lg rounded-md focus:outline-none text-base font-medium cursor-pointer"
    >
      {[...Array(totalPages).keys()].map((page) => (
        <option key={page + 1} value={page + 1} className="cursor-pointer">
          Page {page + 1}
        </option>
      ))}
    </select>
  );
};

export default PaginationSelect;
