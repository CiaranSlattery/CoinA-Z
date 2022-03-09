import React from "react";
import './CoinListItem.css';

const CoinListItem = ({
  coin,
  name,
  image,
  symbol,
  price,
  ciaranCoins,
  setCiaranCoins,
  quantity
}) => {
  const clickHandler = (e) => setCiaranCoins([...ciaranCoins, coin]);

  return (
    <div
      className="coin-container"
      style={{ cursor: "pointer" }}
      onClick={clickHandler}
    >
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          <div>
            <p className="coin-data">${price}</p>
          </div>
          {quantity && (
            <p>QTY</p>
            <p>{quantity}</p>
            )}
        </div>
        
      </div>
    </div>
  );
}

export default CoinListItem;
