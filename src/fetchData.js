const url =
  "https://api.weatherapi.com/v1/current.json?key=6971c42de7f445e5ba5122531250503";

export const fetchData = async (city) => {
  try {
    const response = await fetch(`${url}&q=${city}&aqi=yes`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherDataForLocation = async (lan, lat) => {
  try {
    const response = await fetch(`${url}&q=${lan},${lat}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
