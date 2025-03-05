import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import { useWeatherHook } from "./weatherContext/weatherContext";
import { useEffect } from "react";

function App() {
  const { data, fetchCurrentUserLocationData, searchcity, setSearchCity } =
    useWeatherHook();

  const handleSearch = () => {
    if (searchcity.trim() !== "") {
      data(); // Fetch weather for searched city
      setSearchCity("");
    }
  };

  const handleRefresh = () => {
    fetchCurrentUserLocationData();
  };

  useEffect(() => {
    fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="main-container">
      <h1>Weather App</h1>
      <Input />
      <Button name="Search" handleBtn={handleSearch} />
      <Card />
      <Button name="Refresh" handleBtn={handleRefresh} />
    </div>
  );
}

export default App;
