import React from "react";
import AuthenticationService from "../AuthenticationService.js";
import { Card, Form, FormControl, InputGroup, Row, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState(
            {
                    [event.target.name]
                    :event.target.value
                }
            )
    }

    // handlerUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             [event.target.name]
    //                 :event.target.value
    //         }
    //     )
    // }

    // handlerPasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        // if (this.state.username === 'Ciaran' && this.state.password === 'dummy'){
        //     AuthenticationService.registeredSuccessfulLogin(this.state.username,this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({showSuccessMessage:true})
        //     // this.setState({hasLoginFailed:false})
        //
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        //
        // }

        /*AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registeredSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            })*/

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })
    }

    render() {
        return (
            <div className="text-white">
                {/*<NavigationBar/>*/}
                
                    {/* <h1>Login</h1> */}
                    <div className="container">
                
                        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                        {this.state.hasLoginFailed && <div className="warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div>Login Successful</div>}
                        {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                        {/* User Name: <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                        Password: <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} />
                        <button onClick={this.loginClicked}>Login</button> */}
                        
                        <p></p>

                        <Row className="justify-content-md-center">
                            <Col xs={5}>
                                <Card className="border border-dark bg-dark text-white">
                                    <Card.Header>
                                        Login
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formGroupUsername">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                            </Form.Group>
                                        </Form>
                                        <Link to="/register">New user? Sign up</Link>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button onClick={this.loginClicked}>
                                            Login
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
            </div>
        );
    }

}
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null;
// }

export default LoginComponent;