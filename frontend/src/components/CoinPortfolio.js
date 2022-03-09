import React from "react";
import "../Coin.css";

function Coin({
  coin,
  name,
  image,
  symbol,
  price,
  ciaranCoins,
  setCiaranCoins,
}) {
    const clickHandler = (e) => 
        setCiaranCoins([...ciaranCoins, coin])
    
  return (
    //<Link to="/addcoin">
    
    <div
      className="coin-container"
      style={{ cursor: "pointer" }}
      onClick={clickHandler}
    >
        {console.log(ciaranCoins)}
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          <div>
            <p className="coin-data">${price}</p>
          </div>
        </div>
      </div>
    </div>
    //</Link>
  );
}

export default Coin;
