import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card, CardGroup, Form, FormControl, InputGroup, Row, Col, Button } from "react-bootstrap";
//import Coin from "../Coin";
import PortfolioDataService from "./PortfolioDataService";
import AuthenticationService from "./AuthenticationService";
import Portfolio from "./Portfolio";
import Update from "./CoinPortfolio";

class PortfolioList extends React.Component {

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            portfolio : [],
            message : null

        }
        this.addAssetPortfolio = this.addAssetPortfolio.bind(this)
        this.retrievePing = this.retrievePing.bind(this)
        this.refreshPortfolio = this.refreshPortfolio.bind(this)
        //this.retrieveAsset = this.retrieveAsset.bind(this)
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        return true;
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshPortfolio()
        console.log(this.state)
    }

    refreshPortfolio(){
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.retrieveAllPortfolio(username)
            .then(
                response => {
                    //console.log(response)
                    this.setState({todos : response.data})
                }
            )
        console.log(this.state)
    }

    retrievePing(){
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.retrievePing(username)
            .then(
                response => {
                    this.setState({ping : response.data})
                }
            )
        console.log(this.state)
    }

    addAssetPortfolio(){
        let username = AuthenticationService.getLoggedInUserName();
        PortfolioDataService.addAssetPortfolio(username)
            .then(
                response => {
                    this.setState({message : `test`})
                    this.retrievePing()
                }
            )
            
        console.log(this.state)
    }

    // retrieveAsset(data){
    //     PortfolioDataService.retrieveAsset(data)
        
    // }

    render() {
        console.log("Render");

        return <div className="text-white"> Welcome to our portfolio application! 
        <div>Here you can create your own portfolio to manage and track.</div>
        
        
        <CardGroup>
            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
                
                <Portfolio/>

            </Card>
                
            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
            <Card.Header>
            Cryptocurrency
            </Card.Header>

            <table className="table">
                <thead>
                    <tr>
                        <th>Asset </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Update/>                 */}
                </tbody>
            </table>
            
            <Form.Group className="mb-3" controlId="formGroupQuantity">
                <Form.Label>Quantity</Form.Label>

             
                <Form.Control type="quantity" placeholder="Enter Quantity" />
            </Form.Group>
                
            <Card.Text>
                    
            </Card.Text>
            <Button
                className="btn btn-success" onClick={this.addAssetPortfolio}>
                Add to portfolio!
            </Button>
            </Card>

            <Card style={{ width: '30rem' }} className="border border-dark bg-dark text-white">
            <Card.Header>
                Portfolio
            </Card.Header>
            <table className="table">
                <thead>
                    <tr>
                        <th>Asset </th>
                        <th>Quantity </th>
                        <th>Value </th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.portfolio.map(
                        asset => 
                            <tr key={asset.id}>
                                <td>{asset.name}</td>
                                <td>{asset.quantity}</td>
                                <td>{asset.value}</td>
                            </tr>
                    )
                }
                </tbody>
            </table>
            <Card.Text>
                Ping:
                <div>
                    {this.retrievePing.toString()}
                </div>
            </Card.Text>

            <Button
            className="btn btn-success" onClick={this.retrievePing}>
                View Portfolio!
            </Button>

            <Button
            className="btn btn-success" onClick={this.refreshPortfolio}>
                View Portfolio!
            </Button>
        
            </Card>
        </CardGroup>
        </div>     
    };
}

export default PortfolioList;