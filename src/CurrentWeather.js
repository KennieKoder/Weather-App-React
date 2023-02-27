import React from "react";
import CurrentConditions from "./CurrentConditions";
import "./CurrentWeather.css";

export default function CurrentForecast() {
  let temperature = 2;

  return (
    <div className="CurrentWeather row">
      <div className="col">
        <span className="temperature">{temperature}</span>{" "}
        <a href="/" className="active">
          °C
        </a>{" "}
        |<a href="/">°F</a>
      </div>
      <div className="col">
        <CurrentConditions feelsLike={5} humidity={15} wind={8} />
      </div>
      <div className="col weatherIcon">
        <span role="img" aria-label="Locate">
          ☀
        </span>
      </div>
    </div>
  );
}