import React from 'react'
import '../Coin.css'
import {Link} from "react-router-dom";

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <Link to="/addcoin">
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>  
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                    <div>
                <p className='coin-data'>${price}</p>
                </div> 
                </div>
                
            </div>
        </div>
        </Link>
    );
};

export default Coin;