import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/HomePage';
import Housing from '../../pages/HousingPage';
import About from '../../pages/AboutPage';
import Error from '../../pages/ErrorPage';

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Housing/:id" element={<Housing />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default CustomRoutes;