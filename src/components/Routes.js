import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import Error from '../pages/Error';

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Housing" element={<Housing />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default CustomRoutes;