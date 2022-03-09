import axios from 'axios';
import React, {Component} from 'react';

export default class HeaderDisplay extends Component {

    render(){
        
        axios.get("https://api.coingecko.com/api/v3/global");

        return(
            <div>
                <h25>Coins: </h25>
                <h25>Exchanges: </h25>
                <h25>Market Cap: </h25>
                <h25>24h Vol: </h25>
                <h25>Dominance: </h25>
            </div>
        )
    }
}