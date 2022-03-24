import React, { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
//import Coin from "../Coin";
import PortfolioDataService from "../portfolio/PortfolioDataService";
import AuthenticationService from "../User/AuthenticationService";
import UserPortfolioCoins from "../portfolio/UserPortfolioCoins";
// import Update from "../CoinPortfolio";
import CoinListItem from "../CoinListItem/CoinListItem";
import "./PortfolioList.css";
import mockdata from "../../mockdata.json";
import UserPortfolio from "../UserPortfolio/UserPortfolio";

const PortfolioList = () => {
  const [ciaranCoin, setCiaranCoin] = useState([]);
  const [coinQuantity, setCoinQuantity] = useState(0);
  const [coins, setCoins] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [Assets, setAssets] = useState([]);
  const [ping, setPing] = useState("");

  const refreshPortfolio = () => {
    let username = AuthenticationService.getLoggedInUserName();
    PortfolioDataService.retrieveAllPortfolio(username).then((response) => {
      console.log(response.data);
      setAssets(response.data);
    });
  };

  const retrievePing = () => {
    let username = AuthenticationService.getLoggedInUserName();
    PortfolioDataService.retrievePing(username).then((response) => {
      console.log(response.data);
      setPing(response.data);
    });
  };

  const submitCoin = async (event) => {
    event.preventDefault();

    let username = AuthenticationService.getLoggedInUserName();

    const asset = {
      id: ciaranCoin[0].id,
      userCoin: ciaranCoin[0],
      quantity: coinQuantity,
    };

    try {
      await PortfolioDataService.addAssetPortfolio(username, asset);
    } catch (error) {
      console.log(error.message);
      // throw Error(error.message)
    }
    console.log("mockdata", mockdata);
    setCiaranCoin([]);
    setCoinQuantity(0);
  };

  useEffect(() => {
    refreshPortfolio();
  }, []);

  return (
    <div className="text-white">
      {" "}
      Welcome to our portfolio application!
      <div>Here you can create your own portfolio to manage and track.</div>
      <CardGroup>
        <Card
          style={{ width: "30rem" }}
          className="border border-dark bg-dark text-white"
        >
          <UserPortfolioCoins
            coins={coins}
            setCoins={setCoins}
            ciaranCoin={ciaranCoin}
            setCiaranCoin={setCiaranCoin}
          />
        </Card>

        <Card
          style={{ width: "30rem" }}
          className="border border-dark bg-dark text-white"
        >
          <Card.Header>Cryptocurrency</Card.Header>
          <div className="container">
            {ciaranCoin.map((coin) => (
              <CoinListItem key={coin.id} coin={coin} />
            ))}

            <form onSubmit={submitCoin}>
              <h5>
                Quantity:{" "}
                <input
                  type="number"
                  placeholder="Enter Quantity"
                  name="quantity"
                  value={coinQuantity}
                  onChange={(event) => setCoinQuantity(event.target.value)}
                />
              </h5>
              {/* <Button className="btn btn-success" onClick={addAssetPortfolio}> */}

              {/* <button className="btn btn-success" type="submit">
                Add to portfolio!
              </button> */}
            </form>
          </div>
        </Card>

        <Card
          style={{ width: "30rem" }}
          className="border border-dark bg-dark text-white"
        >
          <Card.Header>Portfolio</Card.Header>
          <UserPortfolio coins={coins} ciaranCoin={ciaranCoin} />

          <Button className="btn btn-success" onClick={refreshPortfolio}>
            View Ping!
          </Button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default PortfolioList;
