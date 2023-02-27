import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  return (
    <div className="ForecastDay col">
      <span className="d-block">{props.day}</span>
      <span role="img" aria-label="Locate" className="icon">
        ☀
      </span>
      <span className="d-block">{props.temp}</span>
    </div>
  );
}