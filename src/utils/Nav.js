import React from "react";
// import Donate from "./Donate";
// import Logo from "./Logo";
import {Link} from "react-router-dom";
// import {Navbar} from 'react-bootstrap';
import {RiHeartPulseFill} from "react-icons/ri";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          {/* <img src="logo.jpeg" alt="logo" className="img"></img> */}
          <RiHeartPulseFill className="logo" />
          <p>COVID RELIEF</p>
        </Link>
      </div>
      <div class="navlinks">
        <div className="navlink">
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
        </div>
        <div className="navlink">
          <p>HELP</p>
        </div>
      </div>
      <div className="navlink">
        <button className="btn">DONATE</button>
      </div>
      {/* <Donate /> */}
    </div>


    // <Navbar bg="dark" variant="darl" expand="lg">
    //   <div class="container-xl">
        
    //     <a class="navbar-brand" href="/">
    //       <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-8" alt="..."/>
    //     </a>
        
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
        
    //     <div class="collapse navbar-collapse" id="navbarCollapse">
          
    //       <div class="navbar-nav mx-lg-auto">
    //         <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
    //         <a class="nav-item nav-link" href="/">Product</a>
    //         <a class="nav-item nav-link" href="/">Features</a>
    //         <a class="nav-item nav-link" href="/">Pricing</a>
    //       </div>
          
    //       <div class="navbar-nav ms-lg-4">
    //         <a class="nav-item nav-link" href="/">Sign in</a>
    //       </div>
          
    //       <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
    //         <a href="/" class="btn btn-sm btn-primary w-full w-lg-auto">
    //           Register
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </Navbar>
  );
}

export default Nav;
