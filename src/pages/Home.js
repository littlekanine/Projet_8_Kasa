import { Link } from "react-router-dom"


function Home () {
<div>
        Page d'acceuil 
        <nav>
          <Link to = "/Home">Acceuil</Link>
          <Link to = "/Housing">Fiche logement</Link>
          <Link to = "/About">A propos</Link>
        </nav>
      </div>
}

export default Home