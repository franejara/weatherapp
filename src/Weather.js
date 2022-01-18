import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [currentCity, setCurrentCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentCity(event.target.value);
  }

  function search() {
    let apiKey = `e2cf4b573a64292860e147bb5f7b421d`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Where are you now?"
              autoFocus="on"
              autoComplete="off"
              id="search-form"
            />
          </form>
          <div className="row">
            <div className="col-6">
              <h1 id="current-emoji">🌤</h1>
            </div>
            <div className="col-6">
              <h1 id="current-temp">
                <span>{temperature}°C</span>
              </h1>
              <br />
              <h2 id="current-city">
                <span>in {currentCity}</span>
              </h2>
              <br />
              <h3 id="current-date">
                <span>last updated at 16:00, Wed</span>
              </h3>
            </div>
          </div>

          <div className="weather-elements">
            <span>
              <span>broken clouds </span>
            </span>
            <span className="separator">| </span>

            <span>
              humidity
              <span> 51% </span>
            </span>
            <span className="separator">| </span>
            <span>
              wind <span>4m/sec</span>
            </span>
          </div>
          <h3 className="next-days">What to expect for the next days</h3>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Where are you now?"
              autoFocus="on"
              autoComplete="off"
              id="search-form"
            />
          </form>
        </div>
      </div>
    );
  }
}
