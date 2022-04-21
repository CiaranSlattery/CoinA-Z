import React, { useState } from "react";
import "./App.css";
import "./bootstrap.css";
import NavigationBar from "./components/pages/NavigationBar";
import RegisterComponent from "./components/User/RegisterComponent";
import Footer from "./components/pages/Footer";
import Welcome from "./components/Welcome";
import Coins from "./components/Coins";
import ErrorComponent from "./components/ErrorComponent";
import LoginComponent from "./components/User/LoginComponent";
import LogoutComponent from "./components/User/LogoutComponent";
import ListToDosComponents from "./components/todo/ListToDos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Todo from "./components/todo/Todo";
import AuthenticatedRoute from "./components/User/AuthenticatedRoute";
import HomePage from "./components/homepage/HomePage";
import CoinDetailPage from "./components/pages/CoinDetailPage";
import HeaderDisplay from "./components/pages/HeaderDisplay";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import features from "./components/pages/Features";
import AboutPage from "./components/pages/About";

const App = () => {
  const [loginClicked, setLoginClicked] = useState(false);
  return (
    <div className="App">
      <Router>
        <>
          <HeaderDisplay />
          <NavigationBar loginClicked={loginClicked}  setLoginClicked={setLoginClicked}/>
          <Container>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/features" exact component={features} />
              <Route path="/coins" exact component={Coins} />
              <Route path="/coins/:id" exact component={CoinDetailPage} />
              <Route path="/login" exact render={(props) => <LoginComponent setLoginClicked={setLoginClicked} {...props} />} />
              <Route path="/register" exact component={RegisterComponent} />
              <Route path="/about" exact component={AboutPage} />
              <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
              <AuthenticatedRoute path="/todos/:id" exact component={Todo} />
              <AuthenticatedRoute path="/todos" component={ListToDosComponents}/>
              <AuthenticatedRoute path="/portfolio" component={PortfolioList} />
              <AuthenticatedRoute exactpath="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <Footer />
          </Container>
        </>
      </Router>
    </div>
  );
};

export default App;
