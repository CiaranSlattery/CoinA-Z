import React, {useState} from 'react';
import './App.css';
import './bootstrap.css';
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/pages/Dashboard";
import RegisterComponent from "./components/User/RegisterComponent"
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Coins from "./components/Coins";
import ErrorComponent from "./components/ErrorComponent";
import LoginComponent from "./components/User/LoginComponent";
import LogoutComponent from "./components/User/LogoutComponent";
import ListToDosComponents from "./components/todo/ListToDos";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import Todo from "./components/todo/Todo";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import HomePage from "./components/pages/HomePage";
import CoinSummaryPage from "./components/pages/CoinSummaryPage";
import CoinDetailPage from "./pages/CoinDetailPage";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./themes"
import HeaderDisplay from './components/HeaderDisplay';

const StyledApp = styled.div``;

function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ?lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <Router>
                <HeaderDisplay/>
                <NavigationBar/>
                    <Container>
                        <Row>
                            <Col>
                                <Switch>
                                    {/*<BrowserRouter>*/}
                                    <Route path="/" exact component={HomePage}/>
                                    <Route path="/dashboard" exact component={Dashboard}/>
                                    {/*<Route path="/features" exact component={Features}/>*/}
                                    <Route path="/features" exact component={CoinSummaryPage}/>
                                    <Route path="/portfolio" exact component={Portfolio}/>
                                    <Route path="/coins" exact component={Coins}/>
                                    <Route path="/coins/:id" component={CoinDetailPage}/>
                                    <Route path="/login" exact component={LoginComponent}/>
                                    <Route path="/register" exact component={RegisterComponent}/>
                                    <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                                    <AuthenticatedRoute path="/todos/:id" exact component={Todo}/>
                                    <AuthenticatedRoute path="/todos" exact component={ListToDosComponents}/>
                                    <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                                    <Route component={ErrorComponent}/>
                                    {/*</BrowserRouter>*/}
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                    <p></p>
                    <Footer/>
              </Router>
            </StyledApp>
        </ThemeProvider>
  );
}

export default App;
