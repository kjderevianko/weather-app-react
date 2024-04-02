import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DailyForecast(props) {
  const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function formatDay(date) {
    let day = new Date(date * 1000);
    return day.toLocaleDateString("en-US", { weekday: "short" });
  }

  if (loaded) {
    return (
      <>
        <div className="row">
          {forecast.slice(0, 5).map(function (dailyForecast, index) {
            return (
              <div className="col text-center p-10 mt-20" key={index}>
                <h4>{formatDay(dailyForecast.dt)}</h4>
                <img
                  src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`}
                  alt={dailyForecast.weather[0].desc}
                  width="72"
                />
                <h6 style={{ color: "#5a6275" }}>
                  <span className="fw-bold">
                    {Math.round(dailyForecast.temp.max)}°
                  </span>{" "}
                  | <span>{Math.round(dailyForecast.temp.min)}°</span>
                </h6>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
