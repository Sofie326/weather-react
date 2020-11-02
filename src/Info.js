import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info row">
      <div className="col-sm">
        <h3>Humidity</h3>
        <hr />
        <p>
          <span id="humidity">82 </span>%
        </p>
      </div>
      <div className="col-sm">
        <h3>Visibility</h3>
        <hr />
        <p>
          <span id="visibility">10000 </span>
          km
        </p>
      </div>
      <div className="col-sm">
        <h3>Wind</h3>
        <hr />
        <p>
          <span id="wind">3.6 </span>
          km/h
        </p>
      </div>
      <div className="col-sm">
        <h3>Pressure</h3>
        <hr />
        <p>
          <span id="pressure">1015 </span>
          hPa
        </p>
      </div>
    </div>
  );
}
