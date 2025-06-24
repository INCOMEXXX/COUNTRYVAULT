import React, { useState } from "react";
import EachCountry from "../components/EachCountry";
import { useLocation, useParams } from "react-router-dom";

const CountryDetail = ({ detailsByCountry }) => {
  const { countryName } = useParams();

  const { state } = useLocation();
  console.log(useLocation);

  const findCountry =
    state.country ||
    detailsByCountry.find((country) => {
      return country.name === decodeURIComponent(countryName);
    });

  console.log(findCountry);

  return (
    <div>
      <EachCountry perCountry={findCountry} />
    </div>
  );
};

export default CountryDetail;
