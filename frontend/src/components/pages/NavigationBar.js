import React, { useEffect, useState } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticationService from "../User/AuthenticationService";
import Img from "../../images/CoinA-Z40.png";

const NavigationBar = ({ loginClicked, setLoginClicked }) => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to={""} className="navbar-brand">
          <img src={Img} />
        </Link>
        <ul className="navbar-nav">
          <Link to={"/features"} className="nav-link">
            Features
          </Link>
          <Link to={"/coins"} className="nav-link">
            Coins
          </Link>
          <Link to={"/portfolio"} className="nav-link">
            Portfolio
          </Link>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <Link className="nav-link" to={"/about"}>
            About Us
          </Link>

          {isUserLoggedIn && (
            <li>
              <Link className="nav-link" to={"/todos"}>
                Todos
              </Link>
            </li>
          )}
          {!isUserLoggedIn && (
            <li>
              <Link className="nav-link" to={"login"}>
                Login
              </Link>
            </li>
          )}
          {!isUserLoggedIn && (
            <li>
              <Link className="nav-link" to={"register"}>
                Sign Up
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link
                className="nav-link"
                to={"/logout"}
                onClick={() => {
                  AuthenticationService.logout();
                  setLoginClicked(!loginClicked);
                }}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
