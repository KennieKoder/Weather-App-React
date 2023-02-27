import React from "react";
import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  return (
    <div className="CurrentConditions">
      <span className="feelsLike">Feels Like {props.feelsLike} °C</span>
      <span className="humidity"> Humidity: {props.humidity}%</span>
      <span className="wind"> Wind Speed: {props.wind} km/h</span>
    </div>
  );
}
