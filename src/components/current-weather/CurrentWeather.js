import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather({ weatherData }) {
  return (
    <div className="card">
      <div className="top-row">
        <h2 className="city">{weatherData.name}</h2>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weatherData.weather[0].icon}.png`}
        ></img>
        <h2 className="temperature">{Math.round(weatherData.main.temp)}°C</h2>
        <p className="weather-description">
          {weatherData.weather[0].description}
        </p>
      </div>

      <div className="bot-row">
        <div className="parameter-row">
          <h3 className="parameter-label">Details</h3>
        </div>
        <ul className="details">
          <li className="parameter-row">
            <span className="parameter-label">Feels like: </span>
            <span className="parameter-value">
              {Math.round(weatherData.main.feels_like)}°C
            </span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Wind: </span>
            <span className="parameter-value">
              {weatherData.wind.speed} m/s
            </span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Humidity: </span>
            <span className="parameter-value">
              {weatherData.main.humidity}%
            </span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Pressure: </span>
            <span className="parameter-value">
              {weatherData.main.pressure} hPa
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
