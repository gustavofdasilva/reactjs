import React from "react";
import star from "../images/icons/star.png";
export default function Card() {
    return(
        <div className="cards">
            <div className="card">
                <div className="card--image">
                    <small className="card--image-info">Sold out</small>
                </div>
                <div className="card--rate">
                    <img className="card--rate-star" src={star}/>
                    <aside className="card--rate-grade">5.0</aside>
                    <small className="card--rate-description">(6) • USA</small>
                </div>
                <p className="card--description">Life lessons with Katie Zaferes</p>
                <aside className="card--price"><strong>From $136</strong> / person</aside>
            </div>
        </div>
    )
}