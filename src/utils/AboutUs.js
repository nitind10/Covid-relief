import React from "react";
import Person from "./Person";

function AboutUs() {
  return (
    <div className="aboutus">
      {/* <h1>About Us</h1> */}

      <Person
        name="Ashwin Sudheer"
        img="logo.jpeg"
        text="Ashwin Sudheer is a final year undergraduate of Computer Engineering at Delhi Technological 
              University."
      />

<Person
        name="Nitin Dahiya"
        img="logo.jpeg"
        text="Nitin Dahiya is a final year undergraduate of Mathematics and Computing at Delhi Technological 
              University."
      />

<Person
        name="Jai Kumar Joshi"
        img="logo.jpeg"
        text="Jai Kumar Joshi is a final year undergraduate of Mathematics and Computing at Delhi Technological 
              University."
      />

<Person
        name="Keshav Jindal"
        img="logo.jpeg"
        text="Keshav Jindal is a final year undergraduate of Mathematics and Computing at Delhi Technological 
              University."
      />
    </div>
  );
}

export default AboutUs;
