import axios from 'axios';
import React, {Component} from 'react';

export default class HeaderDisplay extends Component {

    render(){
        
        axios.get("https://api.coingecko.com/api/v3/global");

        return(
            <div>
                <h90>Coins: </h90>
                <h90>Exchanges: </h90>
                <h90>Market Cap: </h90>
                <h90>24h Vol: </h90>
                <h90>Dominance: </h90>
            </div>
        )
    }
}