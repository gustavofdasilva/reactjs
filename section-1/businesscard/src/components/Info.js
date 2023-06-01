import React from "react";
import {ReactComponent as Mail} from "../images/icons/mail.svg"
import {ReactComponent as Linkedin} from "../images/icons/linkedin.svg"

export default function Info() {
    return (
        <div className="info">
            <div className="info--profile-pic"></div>
            <h1 className="info--name">Gustavo Silva</h1>
            <aside className="info--role">Frontend Developer</aside>
            <aside className="info--website"><a href="https://gustavofdasilva.github.io">gustavofdasilva.github.io</a></aside>
            <div className="info--buttons">
                <button className="info--button email"><Mail className="info--icon"/> Email</button>
                <button className="info--button linkedin"><Linkedin className="info--icon"/> LinkedIn</button>
            </div>
        </div>
    )
}