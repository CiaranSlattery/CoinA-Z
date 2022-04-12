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
        {/* <div>
          <h1>Welcome to Coin A-Z</h1>
          <h3>An easy way to track and manage crypto assets.</h3>
          <h5>
            Welcome to Coin A-Z. Our plan is to make it easy for our users to
            track, search and research different crypto assets.{" "}
          </h5>
          We allow our users to create their own custom portfolios where they
          are able to track their crypto assets in one place.
        </div> */}
        {/* <CardGroup>
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
        </CardGroup> */}

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

        <p>
          What is market cap?
          <p>
            Market cap is one of the most popular metrics in the industry that
            is used to gauge the value of an asset. The market cap of a
            cryptocurrency is calculated based on the coin's total circulating
            supply multiplied by the current price. For detailed examples on how
            the market capitalization of a coin is calculated, please view our
            methodology page.
          </p>
        </p>
        <p>
          How can I use market cap?
          <p>
            As a financial metric, market cap allows you to compare the total
            circulating value of one cryptocurrency with another. Large cap
            cryptocurrencies such as Bitcoin and Ethereum have a market cap of
            over $10 billion. They typically consist of protocols that have
            demonstrated track record, and have a vibrant ecosystem of
            developers maintaining and enhancing the protocol, as well as
            building new projects on top of them. From a trading perspective,
            large caps would typically be hosted on more exchanges, have higher
            liquidity, and are less volatile when compared against other mid and
            small cap cryptocurrencies.<p></p>
            While market cap is a simple and intuitive comparison metric, it is
            not a perfect point of comparison. Some cryptocurrency projects may
            appear to have inflated market cap through price swings and the
            tokenomics of their supply. As such, it is best to use this metric
            as a reference alongside other metrics such as trading volume,
            liquidity, fully diluted valuation, and fundamentals during your
            research process.{" "}
          </p>
        </p>
      </div>
    );
  }
}

export default HomePage;
