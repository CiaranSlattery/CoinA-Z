import React from "react";
import "./components/CoinListItem/CoinListItem.css";
import { Link } from "react-router-dom";

const Coin = ({
  coin,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <Link to={`/coins/${coin.id}`}>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-data">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
