import React from "react"
import logo from '../assets/logo/LogoFooter.png'
import '../styles/footer.css'
import '../styles/index.css'

function Footer () {
    return (
        <div className="footer logo-reserved flex column">
            <img className="logo" src = {logo} alt="Logo Kasa"></img>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer