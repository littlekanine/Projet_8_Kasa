import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo/LOGO.png"
import './Banner.css'
import '../../styles/index.css'

function Banner () {
    return (
            <header className="flex column">
                <div className=" flex align-center space-between">    
                    <img className="img-logo" src={logo} alt="Logo de Kasa"></img>
                    <div className="flex link">
                        <Link className="link-spec" to = "/">Acceuil</Link>
                        <Link className="link-spec" to = "/About">A propos</Link>
                    </div>
                </div>
            </header>
    )
}

export default Banner 