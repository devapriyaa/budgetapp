import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import AccountDetails from './pages/UserDetails';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import colors from './env/colors';
import db from './env/firebase_config';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Budget from './pages/startBudget';
db.configureFirebase();



const NavBar = styled.nav`
        background-color: ${colors.grey.dark_grey};
        width:100%;
        margin:0 auto;
        position: sticky;
        text-align: right;
        height: 30px;
        padding: 15px;
        font: 17px 'Quicksand', sans-serif;
        display: ${props => props.currentPath === "/startBudget" ? "none" : "block"}
    `;
const List = styled.li`
        display: inline;
    `;

const StyledLink = styled(Link)`
        text-decoration: none;
        padding-right: 80px;    
        color: white;  
    `;

export default function App() {
    const [openLogin, setOpenLogin] = useState(false);
    const [username, setUsername] = useState();
    const currentPath = window.location.pathname;

    const checkAccount = () => {
        setOpenLogin(true);
    }

    const loggingout = async () => {
       let logoutStatus = await db.logout();
       logoutStatus ? window.location.reload() : console.log("something went wrong");
    }

    const getLoginPageStatus = (dataFromHome) => {
        dataFromHome ? setOpenLogin(true) : setOpenLogin(false);
    }

    useEffect(() => {
        async function fetchData() {
            let result = await db.signedUser();
            if (result) {
                let userID = db.getCurrentUser().uid;
                let username =await db.readUsername(userID);
                if(username){
                    setUsername(username.username);    
                }
            }
            else {
                setUsername("")
            }
        }
        fetchData();
    });
    
    return (
        <Router>
            <div>
                <NavBar currentPath={currentPath}>
                    <List><StyledLink to="/">Home</StyledLink></List>
                    
                    {username ? <>
                        <List><StyledLink to="/" onClick={loggingout}>Log out</StyledLink></List>
                        <List><StyledLink to="/Dashboard">Dashboard</StyledLink></List>
                        <List><StyledLink to="/AccountDetails">{username}</StyledLink></List> </> :

                        <List><StyledLink to="/" onClick={checkAccount}>Login</StyledLink></List>}
                    <List><StyledLink to="/About">About</StyledLink></List>
                </NavBar>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path ="/startBudget">
                        <Budget />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/accountdetails">
                        <AccountDetails />
                    </Route>
                    <Route path="/">
                        <Home username={username} LoginPageStatus = {getLoginPageStatus} openLogin = {openLogin}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );


}