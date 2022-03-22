import React, {useEffect, useState} from "react";
import "./styles.css";
import mockdata from "../../mockdata.json";
import deleteAssetClicked from "../PortfolioList/PortfolioList";
import AuthenticationService from "../User/AuthenticationService";
import PortfolioDataService from "../portfolio/PortfolioDataService";

const UserPortfolio = ({coins, ciaranCoin}) => {
  const [fetchedData, setFetchedData] = useState([]);

  
  const refreshPortfolio = async () => {
    let username = AuthenticationService.getLoggedInUserName();
    try {
      const response = await PortfolioDataService.retrieveAllPortfolio(username);
      setFetchedData(response.data);
    } catch (error) {
      console.log(error.message)
    }
  };
  
  const deleteAssetClicked = async (id) => {
    let username = AuthenticationService.getLoggedInUserName();
    try {
      await PortfolioDataService.deleteAssetPortfolio(username, id);
    } catch (error) {
      console.log(error.message)
    }
      refreshPortfolio();
  };

  useEffect(() => {
    refreshPortfolio()
  }, [ciaranCoin])

  return (
    <>
      <div className="header">
        <h5>Asset </h5>
        <h5>Quantity </h5>
        <h5>Value </h5>
        <h5>Delete </h5>
      </div>
      <div className="portfolio-coins">
        {fetchedData?.map((coin) => (
          <div className="list-item" >
            <p>{coin.id}</p>
            <p>{coin.quantity}</p>
            <p>$ {Math.round(coins.find((x) => x.id === coin.id)?.current_price * coin.quantity)}</p>      
            <p><button className="btn btn-warning" onClick={() => deleteAssetClicked(coin.id)}>Delete</button></p>      
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPortfolio;
