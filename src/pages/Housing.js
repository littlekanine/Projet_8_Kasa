import React from "react"
import { Link } from "react-router-dom";

function Housing () {
  return (
    <div>
        Fiche logement
        <nav>
          <Link to = "/Home">Acceuil</Link>
          <Link to = "/About">A propos</Link>
        </nav>
    </div>
    );
}

export default Housing