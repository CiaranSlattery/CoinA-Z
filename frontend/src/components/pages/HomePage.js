import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Img from '../../homepage.png';
import CoinHomePage from "../CoinHomepage";

class HomePage extends React.Component{
    render() {
        return (
            <div>              
                <div>
                    <h1>Welcome to Coin A-Z</h1>
                    <h3>An easy way to track and manage crypto assets.</h3>
                        <h5>Welcome to Coin A-Z. Our plan is to make it easy for our users to track, search and research different crypto assets. </h5>
                        We allow our users to create their own custom portfolios where they are able to track their crypto assets in one place.
                </div>
                <p></p>
                <div>
                    <img src={Img} />    
                </div>
                <p></p>
                <div>
                    <p className="font15 whiteColor">
                        <em>Track your crypto assets with our portfolio tracker</em>
                    </p>
                    <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}><em>Click here to get started </em><Link to="/portfolio">Portfolio Tracker</Link></p>
                </div>

                <div>
                <p><CoinHomePage/></p>
                    
                </div>
                
                <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}><em>Click here to view all coins: </em><Link to="/Coins"> Coins List</Link></p>
            </div>
           
        );
    }
}


export default HomePage;