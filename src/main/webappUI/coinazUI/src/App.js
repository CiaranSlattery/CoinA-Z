import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import './bootstrap.css';
import Coin from './Coin';
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Coins from "./components/Coins";
import ErrorComponent from "./components/ErrorComponent";
import LoginComponent from "./components/LoginComponent";
import LogoutComponent from "./components/LogoutComponent";
import ListToDosComponents from "./components/todo/ListToDos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import Todo from "./components/todo/Todo";
import AuthenticationService from "./components/AuthenticationService";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import HomePage from "./components/HomePage";


function App() {
  return (
    <Router>
      <NavigationBar/>
        <Container>
            <Row>
                <Col>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/features" exact component={Features}/>
                        <Route path="/portfolio" exact component={Portfolio}/>
                        <Route path="/coins" exact component={Coins}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                        <AuthenticatedRoute path="/todos/:id" exact component={Todo}/>
                        <AuthenticatedRoute path="/todos" exact component={ListToDosComponents}/>
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
  </Router>
  );
}

export default App;
