import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img from "../../images/homepage.png";
import portfolioImg from "../../images/portfoliotest.png";
import CoinHomePage from "./CoinHomepage";
import { CardGroup, Card } from "react-bootstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to Coin A-Z</h1>
          <h3>An easy way to track and manage crypto assets.</h3>
          <h5>
            Welcome to Coin A-Z. Our plan is to make it easy for our users to
            track, search and research different crypto assets.{" "}
          </h5>
          We allow our users to create their own custom portfolios where they
          are able to track their crypto assets in one place.
        </div>
        <CardGroup>
          <Card
            style={{ width: "30rem" }}
            className="border border-dark bg-dark text-white"
          >
            <Card.Header>Todos Application</Card.Header>
            <img src={Img} />
          </Card>

          <Card
            style={{ width: "30rem" }}
            className="border border-dark bg-dark text-white"
          >
            <Card.Header>Portfolio Tracking</Card.Header>
            <img src={portfolioImg} />
            <div>
              <p className="font15 whiteColor">
                <em>Track your crypto assets with our portfolio tracker</em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                <em>Click here to get started </em>
                <Link to="/portfolio">Portfolio Tracker</Link>
              </p>
            </div>
          </Card>
        </CardGroup>

        <div>
            <CoinHomePage />
        </div>

        <p
          className="font13 orangeColor textRight"
          style={{ marginTop: "10px" }}
        >
          <em>Click here to view all coins: </em>
          <Link to="/Coins"> Coins List</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;
