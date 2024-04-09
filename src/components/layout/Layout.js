import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo/LOGO.png'
import logoFooter from '../../assets/logo/LogoFooter.png'
import './layout.css'

function Layout ({ children }) {
    const location = useLocation();

    const isCurrentPage = (link) => {
        return location.pathname === link;
    };

    return (
        <div>
            <header className="flex center">
                <div className="nav flex align-center space-between">
                    <img className="img-logo" src={logo} alt="Logo de Kasa"></img>
                    <div className="flex link">
                        <Link className={`link-spec ${isCurrentPage('/') ? 'focused' : ''}`} 
                              to = "/?id=" >
                            Accueil
                        </Link>
                        <Link className={`link-spec ${isCurrentPage('/About') ? 'focused' : ''}`} 
                              to = "/About" >
                            A propos
                        </Link>
                    </div>
                </div>
            </header>

            <main className="min-height">{children}</main>
            
            <footer className="flex center footer">
                <div className="logo-reserved flex column">
                    <img className="logo" src = {logoFooter} alt="Logo Kasa"></img>
                    <p className="footer-text">© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout;
