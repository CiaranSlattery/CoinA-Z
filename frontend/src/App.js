import React from "react";
import "./App.css";
import "./bootstrap.css";
import NavigationBar from "./components/pages/NavigationBar";
import Dashboard from "./components/pages/Dashboard";
import RegisterComponent from "./components/User/RegisterComponent";
import Footer from "./components/pages/Footer";
import Welcome from "./components/Welcome";
import Coins from "./components/Coins";
import ErrorComponent from "./components/ErrorComponent";
import LoginComponent from "./components/User/LoginComponent";
import LogoutComponent from "./components/User/LogoutComponent";
import ListToDosComponents from "./components/todo/ListToDos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Todo from "./components/todo/Todo";
import AuthenticatedRoute from "./components/User/AuthenticatedRoute";
import HomePage from "./components/homepage/HomePage";
import CoinDetailPage from "./components/pages/CoinDetailPage";
import HeaderDisplay from "./components/pages/HeaderDisplay";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import features from "./components/pages/Features";

function App() {
  return (
    <Router>
      <HeaderDisplay />
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <Switch>
              {/*<BrowserRouter>*/}
              <Route path="/" exact component={HomePage} />
              <Route path="/dashboard" exact component={Dashboard} />
              {/*<Route path="/features" exact component={Features}/>*/}
              <Route path="/features" exact component={features} />
              <Route path="/portfolio" exact component={PortfolioList} />
              {/* <Route path="/portfolio1" exact component={UserPortfolioCoins}/> */}
              <Route path="/coins" exact component={Coins} />
              <Route path="/coins/:id" component={CoinDetailPage} />
              <Route path="/login" exact component={LoginComponent} />
              <Route path="/register" exact component={RegisterComponent} />
              <AuthenticatedRoute
                path="/welcome/:name"
                exact
                component={Welcome}
              />
              <AuthenticatedRoute path="/todos/:id" exact component={Todo} />
              <AuthenticatedRoute
                path="/todos"
                exact
                component={ListToDosComponents}
              />
              <AuthenticatedRoute
                path="/logout"
                exact
                component={LogoutComponent}
              />
              <Route component={ErrorComponent} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
