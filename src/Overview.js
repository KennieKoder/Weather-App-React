import React from "react";
import "./Overview.css";

export default function Overview() {
  let City = "Toronto";
  let CurrentDate = "Monday, February 6";
  let WeatherConditions = "Windy";

  return (
    <div className="Overview">
      <span className="city">{City}</span>
      <span className="currentDate">{CurrentDate}</span>
      <span className="weatherConditions">{WeatherConditions}</span>
    </div>
  );
}