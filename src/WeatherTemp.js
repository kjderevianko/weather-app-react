import React /* , { useState } */ from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  return (
    <>
      <strong id="temp">{Math.round(props.celsius)}</strong>
      <span className="units">°C</span>
    </>
  );
  /* const [unit, setUnit] = useState("celsius");
  const [temp, setTemp] = useState(props.celsius);

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
    setTemp(props.celsius);
  }

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setTemp((props.celsius * 9) / 5 + 32);
  }

  return (
    <>
      <strong id="temp">{Math.round(temp)}</strong>
      <span className="units">
        {unit === "celsius" ? (
          "°C"
        ) : (
          <a href="/" onClick={convertToC}>
            °C
          </a>
        )}{" "}
        |{" "}
        {unit === "fahrenheit" ? (
          "°F"
        ) : (
          <a href="/" onClick={convertToF}>
            °F
          </a>
        )}
      </span>
    </>
  ); */
}
