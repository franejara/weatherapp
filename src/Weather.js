import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
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
            <h1 id="current-emoji">🌞</h1>
          </div>
          <div className="col-6">
            <h1>
              <span>68°F</span>
            </h1>
            <br />
            <h2>
              <span>in Seattle</span>
            </h2>
            <br />
            <h3>
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
}
