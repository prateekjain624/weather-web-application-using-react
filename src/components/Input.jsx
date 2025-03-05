import React from "react";
import { useWeatherHook } from "../weatherContext/weatherContext";
const Input = () => {
  const { searchcity, setSearchCity } = useWeatherHook();
  return (
    <input
      type="text"
      value={searchcity}
      onChange={(e) => setSearchCity(e.target.value)}
      className="search-input"
      placeholder="search your city"
    />
  );
};

export default Input;
