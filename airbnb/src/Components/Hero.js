import React from "react";
import grid from "../images/airbnb-grid.png"

function Hero(){
    return(
        <section className="hero">
            <img src={grid} alt="" className="hero--photo"></img>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique activites led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero;