import React from "react";

function Donate(){

    function handleClick(){
        console.log("i gor clicked");
    }

    return (
            <button onClick={handleClick} className="btn">
                Donate
            </button>
    );
}

export default Donate;