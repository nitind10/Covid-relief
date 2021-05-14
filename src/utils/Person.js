import React from "react";

function Person(props){
    return (
        <div className="person">
            <div class="box1">
                <p class="name">{props.name}</p>
                <p>{props.text}</p>
            </div>

            <img src={props.img}></img>
        </div>
    );
}

export default Person;