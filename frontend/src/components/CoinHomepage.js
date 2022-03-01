import React, {useEffect, useState} from "react";
import axios from 'axios'
import '../App.css';
import Coin from '../Coin';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./Footer";

function CoinsHome()
{
        const [coins, setCoins] = useState([]);
        const [search, setSearch] = useState('')

        useEffect(() => {
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
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
            <Router>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
                <h3>Top 10 Cryptocurrency Prices by Market Cap</h3>
                   <p></p>
                </div>
                <Container>
              
                    {filteredCoins.map(coin => {
                        return (<Coin
                                key={coin.id}
                                coin={coin}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                marketcap={coin.market_cap}
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                                volume={coin.total_volume}
                            />
                        );
                    })}
                </Container>
                <Footer/>
            </Router>
        );

}

export default CoinsHome;