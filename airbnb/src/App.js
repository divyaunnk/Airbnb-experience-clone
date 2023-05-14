import React from "react"
import Navbar from "./Components/NavBar.js"
import Hero from "./Components/Hero.js";
import Card from "./Components/Card.js";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}