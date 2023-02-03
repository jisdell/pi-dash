import { useState, useEffect, useRef } from "react";
import { LocalInfo } from "./components/LocalInfo/LocalInfo";
import { PiTemps } from "./components/PiTemps/PiTemps";
import { TwitchStuff, TwitchUser } from "./components/TwitchStuff/TwitchStuff";
import { Weather } from "./components/Weather/Weather";

interface MainWeather {
  temp: number | undefined;
  humidity: number | undefined;
}
interface WeatherData {
  name: string | undefined;
  main: MainWeather;
}

const weatherApi = {
  key: process.env.REACT_APP_OPENWEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

const panelStyles = {
  display: "flex",
  width: "50%",
  height: "100%",
};

const getFollowedStreams = async (token: string) => {
  try {
    let data = await fetch(
      "https://api.twitch.tv/helix/streams/followed?user_id=70796913",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID,
        } as any,
      }
    );
    let twitchOnline = await data.json();
    return twitchOnline;
  } catch (e) {
    console.log(e);
  }
};

const fetchWeather = async () => {
  try {
    let data = await fetch(
      `${weatherApi.base}weather?id=4069243&units=imperial&appid=${weatherApi.key}`
    );
    let weatherData = await data.json();
    return weatherData;
  } catch (e) {
    console.error(e);
  }
};

export const App = () => {
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const [users, setUsers] = useState<TwitchUser[]>([]);
  const token = useRef("");

  useEffect(() => {
    if (token.current) {
      fetchWeather().then((res) => setWeather(res));
      getFollowedStreams(token.current).then((res) => setUsers(res.data));
    }
  }, []);

  useEffect(() => {
    const [, ...hash] = document.location.hash ?? "#";
    if (hash.length === 0) {
      window.location.replace(
        `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000&scope=user%3Aread%3Afollows`
      );
    } else {
      token.current = hash.join("").split("&")[0].split("=")[1];
    }
  }, []);

  return (
    <div>
      <div style={panelStyles}>
        <LocalInfo city={weather?.name} />
        <Weather
          temp={weather?.main?.temp}
          humidity={weather?.main?.humidity}
        />
      </div>
      <div style={panelStyles}>
        <TwitchStuff users={users} />
        <PiTemps />
      </div>
    </div>
  );
};

//http://localhost:3000/?code=133tjlzdjp5k7ot3x508qgzq6xcgnc&scope=user%3Aread%3Afollows
