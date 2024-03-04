import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './styles/App.sass';

const router = createBrowserRouter([
  {
    path: '/Page_acceuil',
    element : ( 
      <div>
        Page d'acceuil 
        <nav>
          <Link to = "/Page_acceuil">Acceuil</Link>
          <Link to = "/Fiche_logement">Fiche logement</Link>
          <Link to = "/A_propos">A propos</Link>
        </nav>
      </div>
    ),
  },
  {
    path: '/Fiche_logement',
    element : ( 
      <div>
        Fiche logement
        <nav>
          <Link to = "/Page_acceuil">Acceuil</Link>
          <Link to = "/A_propos">A propos</Link>
        </nav>
      </div>
    ),
  },

  {
    path: '/A_propos',
    element : ( 
      <div>
        A propos
        <nav>
          <Link to = "/Page_acceuil">Page d'acceuil</Link>
        </nav>
      </div>
    ),
  }
]) // Utilisation de l'Url du navigateur



function App() {
  return <RouterProvider router = {router}/>
}

export default App;
