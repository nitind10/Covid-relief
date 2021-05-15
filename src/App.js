import React from "react";
import hero from "./images/hero_image3.svg";
// import "../public/styles.css";
// import Content from "./utils/Content";
// import AboutUs from "./utils/AboutUs";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div>
          <img src={hero} alt="hero" />
        </div>
        <div className="hero-content">
          <p className="hero-text">Covid Relief</p>
          <p className="hero-body">
            Our Website gives us real-time statistics and analysis of covid-19
            in India
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
