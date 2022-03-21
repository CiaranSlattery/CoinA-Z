import axios from 'axios';
import React from 'react';

const HeaderDisplay = () => {

        
        axios.get("https://api.coingecko.com/api/v3/global");

        return(
            <div>
                <span>Coins: {}</span>
                <span>Exchanges: </span>
                <span>Market Cap: </span>
                <span>24h Vol: </span>
                <span>Dominance: </span>
            </div>
        )   
}

export default HeaderDisplay