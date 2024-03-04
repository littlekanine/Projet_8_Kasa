import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/Home',
    element : () => <Home />
  },

  {
    path: '/Housing',
    element : () => <Housing />
  },

  {
    path: '/A_propos',
    element : () => <About />
  },

  {
    path : '*',
    element : () => <Error />
  }
])



function App() {
  return <RouterProvider router = {router}/>
}

export default App;
