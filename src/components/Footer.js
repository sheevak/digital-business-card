import React from "react"
import gitHub from "../images/GitHub-icon.png"
import linkedin from "../images/Linkedin-icon.png"
import twitter from "../images/Twitter-icon.png"

export default function Footer() {
    return (
        <div className="container" id="footer">
            <a href="twitter"><img src={twitter} className="footer--icon"/></a>
            <a href="twitter"><img src={linkedin} className="footer--icon"/></a>
            <a href="twitter"><img src={gitHub} className="footer--icon"/></a>
        </div>
    )
}