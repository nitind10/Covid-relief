import React from "react";
import hero from "./images/hero_image.svg";
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
        <div>
          <p className="hero-text">Title</p>
        </div>
      </div>
    </div>
  );
}

export default App;
