import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import AboutUs from "./AboutUs";


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