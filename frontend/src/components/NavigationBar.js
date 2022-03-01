import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";

export default class NavigationBar extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
       //console.log(isUserLoggedIn);

        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="/bitcoin-btc-logo.png" width="25" height="25" alt={"brand"}/> Coin A-Z
                </Link>
                <Nav className="mr-auto">
                    <Link to={"dashboard"} className="nav-link">Dashboard</Link>
                    <Link to={"features"} className="nav-link">Features</Link>
                    <Link to={"coins"} className="nav-link">Coins</Link>
                </Nav>
                <Nav className="navbar-right">
                    {/*<Link to={"register"} className="nav-link"> Register</Link>*/}
                    {!isUserLoggedIn &&<Link to={"portfolio"} className="nav-link">Portfolio</Link>}
                    {isUserLoggedIn &&<Link to={"portfolio"} className="nav-link">Portfolio</Link>}
                    {isUserLoggedIn && <Link to={"todos"} className="nav-link"> Todos</Link>}
                    {!isUserLoggedIn && <Link to={"login"} className="nav-link"> Login</Link>}
                    {!isUserLoggedIn && <Link to={"register"} className="nav-link"> Sign Up</Link>}
                    {isUserLoggedIn && <Link to={"logout"} className="nav-link" onClick={AuthenticationService.logout}> Logout</Link>}
                </Nav>
            </Navbar>
        );
    }
}