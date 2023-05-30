import React from "react";
import reactLogo from '../images/reactLogo.png';
export default function Navbar() {
    return(
        <nav className="navbar">
            <img className="nav-react-logo" src={reactLogo}/>
            <h3 className="nav-h3">ReactFacts</h3>
            <h4 className="nav-h4">React Course - Project 1</h4>
        </nav>
    )
}