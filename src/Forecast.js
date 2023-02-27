import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast() {
  return (
    <div className="Forecast row">
      <ForecastDay day="Mon" temp={12} />
      <ForecastDay day="Tues" temp={8} />
      <ForecastDay day="Wed" temp={9} />
      <ForecastDay day="Thurs" temp={11} />
      <ForecastDay day="Fri" temp={15} />
    </div>
  );
}