import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import "./WeatherUpdate.css";

export default function WeatherUpdate(props) {
  return (
    <div className="info">
      <div className="row">
        <div className="currentWeather col-6">
          <div className="float-left">
            <img src={props.data.iconUrl} alt={props.data.desc} id="icon" />
            <WeatherTemp celsius={props.data.temp} />
          </div>
          <h6>Humidity: {props.data.humidity}%</h6>
          <h6>Wind: {props.data.wind} km/h</h6>
        </div>
        <div className="currentCity col-6">
          <h1 className="fw-bold">{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
