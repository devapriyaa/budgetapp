import React, { useState } from 'react';
import FirebaseConfig from './env/firebase_config';
import * as firebase from 'firebase';
import Account from './pages/Account'  
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App(){
    FirebaseConfig.configureFirebase();
    /*const [email,setEmail] = useState("");
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            setEmail(user.email);
        } 
    });*/
    
    return (
        <Router>
            <div>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/Account">Account</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/About">About</Link>
                    </li>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    function Home(){
      return <h2>Home</h2>
    }
  }