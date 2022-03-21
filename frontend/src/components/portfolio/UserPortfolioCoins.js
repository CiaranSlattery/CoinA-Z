import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinListItem from "../CoinListItem/CoinListItem";

const UserPortfolioCoins = ({ setCiaranCoin, ciaranCoin, coins, setCoins }) => {
  const [search, setSearch] = useState("");  

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="coin-search">
        <h3 className="coin-text">Search currency for portfolio</h3>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {console.log(filteredCoins)}
      {filteredCoins.map((coin) => (
        <CoinListItem
          key={coin.id}
          coin={coin}
          setCiaranCoin={setCiaranCoin}
          ciaranCoin={ciaranCoin}
        />
      ))}
    </div>
  );
};

export default UserPortfolioCoins;
