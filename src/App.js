import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './components/Routes/Routes';
import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <CustomRoutes />
      </Router>
    </div>
  )
}

export default App;
