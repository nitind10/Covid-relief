import React from "react";
import Navbar from "./utils/Navbar";
import Content from "./utils/Content";
import Footer from "./utils/Footer";
import AboutUs from "./utils/AboutUs";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content />

      <AboutUs />
      
      <Footer />     
    </div>
  );
}

export default App;