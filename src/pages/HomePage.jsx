import React from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import Countries from "../components/Countries";

const HomePage = ({ theWorld, inputedCountry, clickedRegion }) => {
  return (
    <div className=" sm:px-20 px-4 pb-20">
      <div className="flex flex-col gap-8 sm:items-center sm:justify-between sm:my-[50px] sm:flex-row my-6">
        <SearchBar inputedCountry={inputedCountry} />
        <Dropdown clickedRegion={clickedRegion} />
      </div>
      <Countries getTheWorld={theWorld} />
    </div>
  );
};

export default HomePage;
