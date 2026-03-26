// WeatherCard.js
import React from "react";
import "./App.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{weather.main.temp}°C
        
      </p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;