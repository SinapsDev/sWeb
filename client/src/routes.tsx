import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home';

const Routers: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/test" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default Routers;