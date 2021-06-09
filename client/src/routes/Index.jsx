import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Index';
import Navbar from '../components/header/Navbar';
import Login from '../components/header/user/Login';
import Register from '../components/header/user/Register';
import Home from '../views/homeView/Index';
import Products from '../views/products/Index';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;
