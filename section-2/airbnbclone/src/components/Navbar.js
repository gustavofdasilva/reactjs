import React from "react";
import airbnb from "../images/icons/airbnb-logo.png"
export default function Navbar() {
    return(
        <nav className="nav">
            <img className="nav--logo" src={airbnb}/>
        </nav>
    )
}