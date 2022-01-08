import React from "react"
import gitHub from "../images/GitHub-icon.png"
import linkedin from "../images/Linkedin-icon.png"
import twitter from "../images/Twitter-icon.png"

export default function Footer() {
    return (
        <div className="container" id="footer">
            <a href="https://twitter.com/SheevaCode" target="_blank"><img src={twitter} className="footer--icon"/></a>
            <a href="https://www.linkedin.com/in/sheeva-kavousian-a09887125/" target="_blank"><img src={linkedin} className="footer--icon"/></a>
            <a href="https://github.com/sheevak" target="_blank"><img src={gitHub} className="footer--icon"/></a>
        </div>
    )
}