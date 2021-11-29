import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Coins from "./components/Coins";
import LoginComponent from "./components/LoginComponent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";


function App() {
  return (
    <Router>
      <NavigationBar/>
        <Container>
        <Row>
      <Col>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/features" exact component={Features}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/coins" exact component={Coins}/>
            <Route path="/login" exact component={LoginComponent}/>
        </Switch>
      </Col>
        </Row>
        </Container>
        <Footer/>
  </Router>
  );
}

export default App;
