import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="app-wrapper">
          <Weather defaultCity="Amsterdam" />
          <footer>
            This project was coded by {""}
            <a
              href="https://github.com/kjderevianko"
              target="_blank"
              rel="noreferrer"
            >
              Kateryna Derevianko
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/kjderevianko/weather-app-react"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
