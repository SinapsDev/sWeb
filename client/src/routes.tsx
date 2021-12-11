import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/index'
import Home from './components/home';

const Routers: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default Routers;