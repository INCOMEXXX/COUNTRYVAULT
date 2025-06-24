import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ clickedRegion }) => {
  const [iconArrow, setIconArrow] = useState(false);

  const [regions, setRegions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
    "Antartic Ocean",
    "...",
  ]);

  const [pickedRegion, setPickedRegion] = useState("Filter By Region");

  return (
    <div
      onClick={() => {
        setIconArrow(!iconArrow);
      }}
      className="relative custom-text-color"
    >
      <div className="shadow-sm py-3 px-5 flex items-center w-[200px] justify-between rounded-md cursor-pointer bg-elements">
        <p className="sm:text-sm text-[12px]">{pickedRegion}</p>
        <MdKeyboardArrowDown
          className={`transform ${
            iconArrow ? "rotate-0" : "rotate-180"
          } transition-transform duration-500 ease-in-out`}
        />
      </div>

      {/* ================================================ */}

      {iconArrow && (
        <ul className="shadow-sm py-3 flex flex-col gap-1.5 items-start text-[14px] w-[200px] rounded-md font-light absolute top-13 bg-white text-start bg-elements ">
          {regions.map((region) => {
            return (
              <li
                onClick={() => {
                  setPickedRegion(
                    region === "..." ? "Filter by Region" : region
                  );
                  clickedRegion(region);
                }}
                className="cursor-pointer hover:bg-gray-300 w-full px-5 py-1.5 sm:text-[16px] text-[12px]"
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
