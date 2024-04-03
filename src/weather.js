import React, { useState } from "react";
import axios from "axios";
import WeatherUpdate from "./WeatherUpdate";
import DailyForecast from "./DailyForecast";
import "./Weather.css";

export default function Weather(props) {
  const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coords: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      desc: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    axios
      .get(`${apiUrl}q=${city}&units=metric&appid=${apiKey}`)
      .then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="search-form-input"
                spellcheck="false"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-6">
              <button className="btn btn-info " type="submit" value="Search">
                {" "}
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherUpdate data={weatherData} />
        <DailyForecast coords={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
