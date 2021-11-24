import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Coins from "./components/Coins";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";


function App() {
  // const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState('')
  //
  // useEffect(() => {
  //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  //   .then(res => {
  //     setCoins(res.data);
  //     console.log(res.data);
  //   }).catch(error => console.log(error));
  // }, []);
  //
  // const handleChange = e => {
  //   setSearch(e.target.value)
  // }
  //
  // const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Router>
      <NavigationBar/>
        <Container>
        <Row>
      <Col>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/features" exact component={Features}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/coins" exact component={Coins}/>
        </Switch>
      </Col>
        </Row>
            {/*<div className='coin-search'>*/}
            {/*    <h1 className='coin-text'>Search a currency</h1>*/}
            {/*    <form>*/}
            {/*        <input type='text' placeholder='Search'*/}
            {/*               className='coin-input' onChange={handleChange}/>*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*{filteredCoins.map(coin => {*/}
            {/*    return(<Coin*/}
            {/*            key={coin.id}*/}
            {/*            name={coin.name}*/}
            {/*            image={coin.image}*/}
            {/*            symbol={coin.symbol}*/}
            {/*            marketcap={coin.market_cap}*/}
            {/*            price={coin.current_price}*/}
            {/*            priceChange={coin.price_change_percentage_24h}*/}
            {/*            volume={coin.total_volume}*/}
            {/*        />*/}
            {/*    );*/}

            {/*})}*/}

        </Container>
        <Footer/>
  </Router>
  );
}

export default App;
