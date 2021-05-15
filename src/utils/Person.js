import React from "react";

function Person(props){
    return (
        <div className="person">
            <div className="box1">
                <p className="name">{props.name}</p>
                <p>{props.text}</p>
            </div>

            <img alt="person" src={props.img}></img>
        </div>
    );
}

export default Person;