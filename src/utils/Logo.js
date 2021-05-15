import React from "react";

function Logo() {

  function handleClick(){
      
  }

  return (
    <div className="logo" onClick={handleClick}>
      <img src="logo.jpeg" 
      alt="logo" className="img"></img>
      <h1>Covid Relief</h1>
    </div>
  );
}

export default Logo;
