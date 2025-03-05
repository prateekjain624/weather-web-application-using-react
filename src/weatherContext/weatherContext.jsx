import { createContext, useContext, useState } from "react";
import { fetchData } from "../fetchData";
import { getWeatherDataForLocation } from "../fetchData";

// created the context api
export const weatherContext = createContext(null);

// created the custom hook
export const useWeatherHook = () => {
  const context = useContext(weatherContext);
  if (!context) {
    throw new Error("useWeatherHook must be used within a WeatherProvider");
  }
  return context;
};

// created the provider
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [searchcity, setSearchCity] = useState("");

  const data = async () => {
    const response = await fetchData(searchcity);
    setWeather(response);
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const response = await getWeatherDataForLocation(lat, lon);
      console.log(response);
      setWeather(response);
    });
  };

  return (
    <weatherContext.Provider
      value={{
        searchcity,
        setSearchCity,
        data,
        weather,
        setWeather,
        fetchCurrentUserLocationData,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
