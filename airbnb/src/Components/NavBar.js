import React from "react";
import logo from "../images/airbnb-logo.png";


function NavBar(){
    return(
        <nav>
            <img src={logo} className="nav--logo" alt=""></img>
        </nav>
    )
}

export default NavBar;