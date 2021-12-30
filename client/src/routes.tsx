import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';

const Routers: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
    )
}

export default Routers;