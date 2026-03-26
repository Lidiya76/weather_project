import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "./App.css";
 
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_WEATHER_KEY;


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

 const getWeather = async (searchCity) => {
  try {
    const res = await fetch(
  `${API_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`
);
    const data = await res.json();

    if (data.cod === "404") {
      setError("City not found. Please try again.");
      setWeather(null);
      return;
    }

    setError("");
    setWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    setError("Something went wrong. Try again.");
  }
};



  useEffect(() => {
    getWeather("washington DC");
  }, []);

  return (
    <div className="page">
      <div className="weather-box">
        <h1>Path2Tech Weather App</h1>
        <input
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
    if (e.key === "Enter") {
      getWeather(city);
    }
  }}
        />
        <button onClick={() => getWeather(city)}>Search</button>
{error && <p style={{ color: "red" }}>{error}</p>}
        {!weather && <h3>Find Weather of a City</h3>}
        {weather && weather.main && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;