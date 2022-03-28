import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/index';
import Register from './components/Register/index';
import Login from './components/Login/index';
import AuthPage from './components/AuthPage';

const Routers: React.FC = () => {
    return (
        <Router>
            <Navbar/> 
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/auth" exact component={AuthPage}/>
            </Switch>
        </Router>
    )
}

export default Routers;