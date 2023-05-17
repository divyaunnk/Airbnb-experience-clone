import React from "react";


function Card(props){

    let badgeText;
    if(props.element.openSpots === 0) {
        badgeText = "SOLD"
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE";
    }
     
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.element.coverImg}`} alt="Jim Halper cover picture" className="card--image"></img>
            <div className="card--stats">
                <img src="../images/star-solid.svg" className="card--star" alt="Star icon"/>
                <span>&nbsp;{props.element.stats.rating}&nbsp;</span>
                <span>({props.element.stats.reviewCount})&nbsp;</span>
                <span>{props.element.country}&nbsp;</span>
            </div>
            <p>{props.element.title}</p> 
            <p>From ${props.element.price}/ person</p>
        </div> 
    )
}

export default Card;