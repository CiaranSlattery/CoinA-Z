import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card, CardGroup, Form, FormControl, InputGroup, Row, Col, Button } from "react-bootstrap";
//import Coin from "../Coin";
import Coin from "./CoinPortfolio";
import { NumberBox } from 'devextreme-react/number-box';
import NavigationBar from "./NavigationBar";

function Portfolio() {

    
    const [search, setSearch] = useState('')
    const [coins, setCoins] = useState([]);
    
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
        //axios.get('http://localhost:8080/assets');
        
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="text-white"> Welcome to our portfolio application! 
        <div>Here you can create your own portfolio to manage and track.</div>
            
        <CardGroup>
            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
            <Card.Header>
                Cryptocurrency
            </Card.Header>
            <Card.Body >
                <Form>
                <div className='coin-search'>
                    <h3 className='coin-text'>Search currency for portfolio</h3>
                    <form>
                        <input type='text' placeholder='Search'
                            className='coin-input' onChange={handleChange}/>
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return (<Coin
                            key={coin.id}
                            coin={coin}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                        />
                    );
                })}
                </Form>
            </Card.Body>
            </Card>
                
            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
            <Card.Header>
                Quantity
            </Card.Header>
            <Form.Group className="mb-3" controlId="formGroupCrypto">
                <Form.Label>Cryptocurrency</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupQuantity">
                <Form.Label>Quantity</Form.Label>
                <div className="dx-field">
                <div className="dx-field-label">Quantity</div>
                <div className="dx-field-value">
                <NumberBox
                defaultValue={0.0}
                showSpinButtons={true}
                showClearButton={true}
                />
                </div>
                </div>
                <Form.Control type="quantity" placeholder="Enter Quantity" />
            </Form.Group>
                
            <Card.Text>
                    
            </Card.Text>
            <Button>
                Add to portfolio!
            </Button>
            </Card>

            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
            <Card.Header>
                Portfolio
            </Card.Header>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card>
        </CardGroup>
        </div>     
    );
}

export default Portfolio;