import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ inputedCountry }) => {
  return (
    <div className="relative custom-text-color ">
      <input
        onChange={(event) => {
          inputedCountry(event.target.value.toLowerCase());
        }}
        type="text"
        placeholder="Search for a country..."
        className="shadow-sm py-3 ps-16 pe- sm:w-[450px] w-full rounded-md sm:placeholder:text-[14px] placeholder:text-[12px] bg-elements"
      />
      <IoMdSearch className="absolute top-3 text-2xl left-5 " />
    </div>
  );
};

export default SearchBar;
