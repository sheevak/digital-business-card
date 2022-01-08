import React from "react"
import photo from "../images/Sheeva.jpg"
import email from "../images/email.png"

export default function Info() {
    return (
        <header className="info">
            <img src={photo} alt="A photo of Sheeva Kavousian" className="info--photo"/>
            <div className="container">
                <h1 className="info--name">Sheeva Kavousian</h1>
                <h4 className="info--role">Full Stack Developer</h4>
                <a className="info--site" href="">sheevakavousian.com</a>
                <button>
                    <img src={email}/>
                    Email
                </button>
            </div>
            
        </header>
    )
}