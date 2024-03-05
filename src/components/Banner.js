import React from "react"
import { Link } from "react-router-dom"
import logo from '../assets/logo/LOGO.png'
import '../styles/banner.css'
import '../styles/index.css'

function Banner () {
    return (
        <div>
            <header className="flex column">
                <div className=" flex align-center space-between">    
                    <img src={logo} alt="Logo de Kasa"></img>
                    <div className="flex link">
                        <Link className="link-spec" to = "/Home">Acceuil</Link>
                        <Link className="link-spec" to = "/About">A propos</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Banner 