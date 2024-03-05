import React from "react"
import { Link } from "react-router-dom"


function Error () {
    return (
    <div>
       404
        <nav>
          <Link to = "/Home">Page d'acceuil</Link>
          <Link to = "/About">A Propos</Link>
        </nav>
      </div>
    );
}

export default Error