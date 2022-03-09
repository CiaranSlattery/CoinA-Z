import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardGroup,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
//import Coin from "../Coin";
import PortfolioDataService from "../PortfolioDataService";
import AuthenticationService from "../AuthenticationService";
import Portfolio from "../Portfolio";
// import Update from "../CoinPortfolio";
import CoinListItem from "../CoinListItem/CoinListItem";
import './PortfolioList.css'

const PortfolioList = () => {

    const [ciaranCoins, setCiaranCoins] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [toDos, setToDos] = useState([]);
    const [ping, setPing] = useState('');
  
      const refreshPortfolio = () => {
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.retrieveAllPortfolio(username).then((response) => {
          setToDos(response.data);
        });
      }

      const retrievePing = () => {
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.retrievePing(username).then((response) => {
          console.log(response.data)
          setPing(response.data);
        });
      }
    
      const addAssetPortfolio = () => {
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.addAssetPortfolio(username).then((response) => {
          retrievePing();
        });
      }


    useEffect(() => {
        refreshPortfolio()
    }, [])
  
  // retrieveAsset(data){
  //     PortfolioDataService.retrieveAsset(data)

  // }

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
          <Portfolio ciaranCoins={ciaranCoins} setCiaranCoins={setCiaranCoins} />
        </Card>

        <Card
          style={{ width: "30rem" }}
          className="border border-dark bg-dark text-white"
        >
          <Card.Header>Cryptocurrency</Card.Header>

          <h5>Quantity</h5>
          {ciaranCoins.map((coin) => 
           <CoinListItem
           key={coin.id}
           coin={coin}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           price={coin.current_price}
         />
          )}
          <input />
          <Button className="btn btn-success" onClick={addAssetPortfolio}>
            Add to portfolio!
          </Button>
        </Card>

        <Card
          style={{ width: "30rem" }}
          className="border border-dark bg-dark text-white"
        >
          <Card.Header>Portfolio</Card.Header>
          <table className="table">
            <thead>
              <tr>
                <th>Asset </th>
                <th>Quantity </th>
                <th>Value </th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((asset) => (
                <tr key={asset.id}>
                  <td>{asset.name}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Card.Text>
            Ping:
            <div>{retrievePing.toString()}</div>
          </Card.Text>

          <Button className="btn btn-success" onClick={retrievePing}>
            View Portfolio!
          </Button>

          <Button className="btn btn-success" onClick={refreshPortfolio}>
            View Portfolio!
          </Button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default PortfolioList;
