import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo/LOGO.png'
import logoFooter from '../../assets/logo/LogoFooter.png'
import './layout.css'

function Layout ({ children }) {
    return (
        <div>
            <header className="flex column">
                <div className=" flex align-center space-between">    
                    <img className="img-logo" src={logo} alt="Logo de Kasa"></img>
                    <div className="flex link">
                        <Link className="link-spec" to = "/?id=">Acceuil</Link>
                        <Link className="link-spec" to = "/About">A propos</Link>
                    </div>
                </div>
            </header>

            <main>{children}</main>
            
            <footer>
                <div className="flex center">
                <div className="footer logo-reserved flex column">
                    <img className="logo" src = {logoFooter} alt="Logo Kasa"></img>
                    <p className="footer-text">© 2020 Kasa. All rights reserved</p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout