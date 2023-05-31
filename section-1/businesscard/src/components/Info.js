import React from "react";
export default function Info() {
    return (
        <div className="info">
            <div className="info--profile-pic"></div>
            <h1 className="info--name">Gustavo Silva</h1>
            <aside className="info--role">Frontend Developer</aside>
            <aside className="info--website"><a href="https://gustavofdasilva.github.io">gustavofdasilva.github.io</a></aside>
            <div className="info--buttons">
                <button className="info--button-email"><img src="#"/> Email</button>
                <button className="info--button-LinkedIn"><img src="#"/> LinkedIn</button>
            </div>
        </div>
    )
}