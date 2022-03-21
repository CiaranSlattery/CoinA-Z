import React from "react";
import "./styles.css";
import mockdata from "../../mockdata.json";

const UserPortfolio = ({coins}) => {

  return (
    <>
      <div className="header">
        <h5>Asset </h5>
        <h5>Quantity </h5>
        <h5>Value </h5>
      </div>
      <div className="portfolio-coins">
        {mockdata.map((coin) => (
          <div className="list-item" >
            <p>{coin.id}</p>
            <p>{coin.quantity}</p>
            <p>$ {Math.round(coins.find((x) => x.id === coin.id)?.current_price * coin.quantity)}</p>            
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPortfolio;
