import React from 'react'
import '../Coin.css'

export function Update(e) {
    
    console.log(e.target);
    return (
        <div>
            
        </div>
    )
}

function Coin ({name, image, symbol, price })  {

    return (
        //<Link to="/addcoin">
        <div className='coin-container' style={{ cursor: "pointer" }} onClick={Update}>
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
        //</Link>
    );
};

export default Coin;