import './App.css';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/Search';
import React, { useState,useEffect} from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import axios from "axios";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  const handleSearch = (location) => {
    setLat(location.latitude);
    setLon(location.longitude);
  }

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchWeatherData(lat, lon);
    }
  }, [lat, lon]);

  const fetchWeatherData = (lat, lon) => {
      let url = `${WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
      axios.get(url).then(response => {
        console.log(response.data);
        setWeatherData(response.data);
      }).catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch}></Search>
      {weatherData && <CurrentWeather weatherData={weatherData} />}
    </div>
  );
}

export default App;
