import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/index';
import Register from './components/Register/index';

const Routers: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}

export default Routers;