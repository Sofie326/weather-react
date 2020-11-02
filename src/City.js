import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <h2 id="date-time">Sunday 11 October 10:06</h2>
      <h2>in</h2>
      <h1 id="city">New York</h1>
      <div className="current-weather">
        <div className="row">
          <div className="col-sm">
            <img
              src="http://openweathermap.org/img/wn/01n@2x.png"
              alt="clear sky"
              id="icon"
            />
          </div>
          <div className="col-sm">
            <p className="temperature">
              <span id="temp-display">18 </span>
              <span id="temp-units">
                <button>
                  °C
                </button>
                |
                <button>
                  {" "}
                  °F
                </button>
              </span>
            </p>
            <hr />
            <p id="weather-description">clear sky</p>
          </div>
        </div>
      </div>
    </div>
  );
}
