// React component for displaying a 404 error alert.
// Renders a message indicating that the requested page does not exist, with a link to return to the homepage.

import React from "react";
import '../error/error.css'
import { Link } from "react-router-dom";


function ErrorAlert () {
    return (
        <div className="flex center align-center error column">
            <h1 className="flex error-title center">404</h1>
            <h2 className="flex center error-h2">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="link-back" to = "/?id=">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorAlert