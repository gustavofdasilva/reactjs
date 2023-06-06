import React from "react";
import star from "../images/icons/star.png";

export default function Card(props) {
    return(
        <div className="cards">
            <div className="card">
                <div className="card--image" style={{
                    backgroundImage: `url(${props.img})`
                }}>
                    <small className="card--image-info" style={{
                        display: props.status == null ? "none" : "block"
                    }}>{props.status}</small>
                </div>
                <div className="card--rate">
                    <img className="card--rate-star" src={star}/>
                    <aside className="card--rate-grade">{props.rating}</aside>
                    <small className="card--rate-description">({props.reviewCount}) • {props.country}</small>
                </div>
                <p className="card--description">{props.title}</p>
                <aside className="card--price"><strong>From ${props.price}</strong> / person</aside>
            </div>
        </div>
    )
}