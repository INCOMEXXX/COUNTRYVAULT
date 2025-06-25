import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ getTheWorld }) => {
  return (
    <div className="sm:grid sm:grid-cols-4  gap-[60px] sm:items-start flex flex-col items-center justify-center">
      {getTheWorld.map((country) => {
        return (
          <Link
            to={`/details/${encodeURIComponent(country.name)}`}
            key={country.name}
            state={{ country }}
            className="shadow-md text-start rounded-md bg-elements:"
          >
            <img
              src={country.flags.png}
              alt=""
              className="rounded-t-md w-[275px] h-[183px]"
            />
            <div className="px-[25px] pt-[30px] pb-[40px] flex flex-col items-start gap-[15px] bg-elements custom-text-color">
              <h3 className="font-semibold text-[18px]">{country.name}</h3>
              <div>
                <p className="text-[14px]">
                  <b>Population:</b> {country.population.toLocaleString()}
                </p>

                {/* toLocaleString() this works for numbers in java script , they make them a string  */}
                <p className="text-[14px]">
                  <b>Region:</b> {country.region}
                </p>
                <p className="text-[14px]">
                  {" "}
                  <b>Capital:</b> {country.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
