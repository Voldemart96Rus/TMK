import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Home from '../pages/Home';
import Delivery from '../pages/Delivery';
import Contacts from '../pages/Contacts';
import Job from '../pages/Job';
import Payment from '../pages/Payment';
import Production from '../pages/Production';
import Quality from '../pages/Quality';
import Catalog from '../pages/Catalog';

import NotFound from '../pages/NotFound';

import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/production" component={Production} />
                    <Route exact path="/quality" component={Quality} />
                    <Route exact path="/job" component={Job} />
                    <Route exact path="/catalog" component={Catalog} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
