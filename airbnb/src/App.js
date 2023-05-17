import React from "react"
import Navbar from "./Components/NavBar.js"
import Hero from "./Components/Hero.js";
import Card from "./Components/Card.js";
import data from "../src/data/experiencesData.js";

export default function App() {

    const cards = data.map((element) => {
      return (
        <Card
          key={element.id}
          element={element}
          // img={element.coverImg}
          // rating={element.stats.rating}
          // reviewCount={element.stats.reviewCount}
          // country={element.country}
          // title={element.title}
          // price={element.price}
          // openSpots={element.openSpots}
          // location={element.location}
        />
      );
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">{cards}</div>
            
        </div>
    )
}