import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src = "/bitcoin-btc-logo.png"width="25" height="25" alt={"brand"} /> Coin A-Z
                </Link>
                <Nav className="me-auto">
                    <Link to={"dashboard"} className="nav-link">Dashboard</Link>
                    <Link to={"features"} className="nav-link">Features</Link>
                    <Link to={"portfolio"} className="nav-link">My Portfolio</Link>
                    <Link to={"coins"} className="nav-link">Coins</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;