import React from "react";
import Donate from "./Donate";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to ="/">
        <Logo />
      </Link>
      <div className="navlink">
        <Link to="/about">
          <p>About Us</p>
        </Link>
      </div>
      <div className="navlink">
        <p>Help</p>
      </div>
      <Donate />
    </div>
  );
}

export default Navbar;
