import React from "react";
import jim from "../images/Jim-halpert.jpg";
function Card(){
    return(
        <div className="card">
            <img src={jim} alt=""></img>
            <div className="card--stats">
                <img src="" alt=""></img>
                <span>5.0</span>
                <span>(6) </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Jim Halpert</p>
            <p>From $136 / person</p>
        </div>
    )
}

export default Card;