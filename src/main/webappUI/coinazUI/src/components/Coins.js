import React, {useEffect, useState} from "react";
import axios from 'axios'
import '../App.css';
import Coin from '../Coin';
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./Footer";

function Coins()
{
        const [coins, setCoins] = useState([]);
        const [search, setSearch] = useState('')

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
            <Router>
                <div className="text-white"> Top 100 Coins
                    {/*<NavigationBar/>*/}
                </div>
                <Container>
                    <div className='coin-search'>
                        <h1 className='coin-text'>Search a currency</h1>
                        <form>
                            <input type='text' placeholder='Search'
                                   className='coin-input' onChange={handleChange}/>
                        </form>
                    </div>
                    {filteredCoins.map(coin => {
                        return (<Coin
                                key={coin.id}
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

export default Coins;