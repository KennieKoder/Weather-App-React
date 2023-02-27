import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <input type="search" name="search" placeholder="Search for a City..." />
      <button>
        <span role="img" aria-label="Search">
          🔎
        </span>
      </button>
      <button>
        <span role="img" aria-label="Locate">
          📍
        </span>
      </button>
      <button>Change Theme</button>
    </div>
  );
}
