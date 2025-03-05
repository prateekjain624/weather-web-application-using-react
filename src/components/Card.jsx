import React from "react";
import { useWeatherHook } from "../weatherContext/weatherContext";
const Card = () => {
  const { weather } = useWeatherHook();
  console.log(weather);
  return (
    <div className="card-container">
      <div className="card">
        <img src={weather?.current?.condition?.icon} alt="sunset" />
        <div className="card-body">
          <div className="temperature">
            <span>{weather?.current?.condition?.text}</span>
            <span>{weather?.current?.temp_c}°C</span>
          </div>
          <div className="city">
            <span>
              {weather?.location?.name},{weather?.location?.region},
              {weather?.location?.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
