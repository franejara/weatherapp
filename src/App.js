import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <p id="footnote">
        Coded by Fran Jara 🪲{" "}
        <a
          href="https://github.com/franejara/weatherapp"
          target="_blank"
          rel="noreferrer"
        >
          Check out my GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
