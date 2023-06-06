import React from "react";
import photocollage from "../images/photo-collage.png"

export default function Hero() {
    return(
        <div className="hero">
            <img className="hero--photo" src={photocollage}/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}