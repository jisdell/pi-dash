import { useState, useEffect } from "react";
import { LocalInfo } from "./components/LocalInfo/LocalInfo";
import { Weather } from "./components/Weather/Weather";

interface MainWeather {
  temp: number | undefined;
  humidity: number | undefined;
}
interface WeatherData {
  main: MainWeather;
}

const api = {
  key: process.env.REACT_APP_OPENWEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

const fetchWeather = async () => {
  try {
    let data = await fetch(
      `${api.base}weather?id=4069243&units=imperial&appid=${api.key}`
    );
    let weatherData = await data.json();
    return weatherData;
  } catch (e) {
    console.error(e);
  }
};

export const App = () => {
  const [weather, setWeather] = useState<WeatherData | undefined>();

  useEffect(() => {
    fetchWeather().then((res) => setWeather(res));
  }, []);

  return (
    <div>
      <LocalInfo />
      <Weather temp={weather?.main?.temp} humidity={weather?.main?.humidity} />
    </div>
  );
};
