import React, {useEffect, useState} from "react";
import axios from "axios";
import Coin from "./CoinPortfolio";


function Portfolio() {
    
    const [search, setSearch] = useState('')
    const [coins, setCoins] = useState([]);
    const [ciaranCoins, setCiaranCoins] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            }).catch(error => console.log(error));
    }, []);
    
    const handleChange = e => {
        setSearch(e.target.value)
    }
        
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
                <div className='coin-search'>
                    <h3 className='coin-text'>Search currency for portfolio</h3>
                    <form>
                        <input type='text' placeholder='Search'
                            className='coin-input' onChange={handleChange}/>
                    </form>
                </div>
                {console.log(filteredCoins)}
                {filteredCoins.map(coin => 
                     <Coin
                            key={coin.id}
                            coin={coin}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            ciaranCoins={ciaranCoins}
                            setCiaranCoins={setCiaranCoins}
                        />
                    
                )}
        </div>    
    );
    
}

export default Portfolio;