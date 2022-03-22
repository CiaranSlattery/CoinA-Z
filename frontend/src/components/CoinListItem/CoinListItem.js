import React from "react";
import './CoinListItem.css';

const 
CoinListItem = ({
  coin,
  ciaranCoin,
  setCiaranCoin,
  quantity
}) => {

  return (
    <div
      className="coin-container"
      style={{ cursor: "pointer" }}
      onClick={() => setCiaranCoin([coin])}
    >
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
          <div>
            <p className="coin-data">${coin.current_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinListItem;
