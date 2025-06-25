import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

import countriesData from "./data.json";

// FIRST STEP . CREATE A FOLDER ON SRC.--IF THERE ARE MORE PAGES  , CREATE TWO FOLDERS .FIRST .COMPONENTS , SECOND . PAGES .

// BROWSER ROUTER WRAPS THE WHOLE WEBSITES

function App() {
  // DECLEARING INITIALS ..........

  const [allCountries] = useState(countriesData);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // AFTER DECLEARATION , WE FETCH .....................

  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchData = await fetch("/data.json");
  //     const convertedData = await fetchData.json();

  //     console.log(convertedData);

  //     setAllCountries(convertedData);
  //   };
  //   // AFTER DECLARING , COMES FETCHING .... DECLEARING ALL GOES INTO USESTATE , USEEFFECT COMES NEXT TO FETCH ... STARTING WITH A BRACKET , THEN A FUNCTION ... THIS NEXT FUNCTION USES ASYNC & AWAIT... CONSOLE LOG THE CONVERTED JSON VARIABLE NAME ... THEN YOU INVOLKE
  //   getData();
  // }, []);

  // ================FILTER BY SEARCH
  const filterBySearch = (searched) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(searched);
    });
    setFilteredCountries(searchedCountry);
  };

  // =====================FILTER BY REGION   ========================

  const filterByRegion = () => {
    const selectedRegion = allCountries.filter((eCountry) => {
      return eCountry.region === region;
    });

    setFilteredCountries(selectedRegion);
  };

  return (
    <>
      {/* ROUTE WITH S REPRESENTS PAGES ...... WITHOUT S ... SECTIONS ...THEREFORE ROUTES COME FIRST , THEN ROUTE...*/}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theWorld={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                inputedCountry={filterBySearch}
                clickedRegion={filterByRegion}
              />
            }
          />
          <Route
            path="/details/:countryName"
            element={<CountryDetail detailsByCountry={allCountries} />}
          />
        </Routes>

        {/* FIRST STEP . BROWSER ROUTER , THEN ROUTES[ANYTHING U PUT HERE APPEARS EVERYWHERE] , THEN ROUTE [HERE DIFFERENCIATES] */}

        {/* ELEMENT SYNTAX DIRECTS APP.JSX ON WHICH COMPONENT TO DISPLAY  */}
      </BrowserRouter>
    </>
  );
}

export default App;

// NAME TLD. CAPITAL. REGION . SUB REGION  REGION LANGUAGES CURRENCIES
// BORDERS POPULATION CONTINENT FLAGS

//useEffect is a React Hook that lets you run side effects in your function components.

// useParams is a hook provided by React Router DOM that lets you access the URL parameters of the current route. It's typically used when you define a dynamic route (a route with parameters), like:

// useState is a React Hook that lets you add state to functional components.

//decodeURI() is a built-in JavaScript function used to decode a full URI (Uniform Resource Identifier) that has been previously encoded using encodeURI().
