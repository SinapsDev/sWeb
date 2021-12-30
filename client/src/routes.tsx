import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from './components/home/index';
import Register from './components/Register/index';

const Routers: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}

export default Routers;