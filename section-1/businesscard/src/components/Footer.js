import React from "react";
import {ReactComponent as Twitter} from "../images/icons/twitter.svg"
import {ReactComponent as Facebook} from "../images/icons/facebook.svg"
import {ReactComponent as Instagram} from "../images/icons/instagram.svg"
import {ReactComponent as GitHub} from "../images/icons/github.svg"

export default function Footer() {
    return(
        <div className="footer">
            <a href="#" className="twitter">
                <Twitter className="icon twitter-img"/>
            </a>
            <a href="#" className="facebook">
                <Facebook className="icon facebook-img"/>
            </a>
            <a href="#" className="instagram">
                <Instagram className="icon instagram-img"/>
            </a>
            <a href="#" className="github">
                <GitHub className="icon github-img"/>
            </a>
        </div>
    )
}