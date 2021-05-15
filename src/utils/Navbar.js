import React from "react";
// import AboutUs from "./AboutUs";
import Donate from "./Donate";
// import Help from "./Help";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <div className="navlink">
        <p>About Us</p>
      </div>
      <div className="navlink">
        <p>Help</p>
      </div>
      <Donate />
    </div>
  );
}

export default Navbar;
