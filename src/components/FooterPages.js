import React from "react"
import logo from '../assets/logo/LogoFooter.png'
import '../styles/footer.css'
import '../styles/index.css'

function Footer () {
    return (
        <div className="flex center">
            <div className="footer logo-reserved flex column">
                <img className="logo" src = {logo} alt="Logo Kasa"></img>
                <p className="footer-text">© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer