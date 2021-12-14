import React, {Component} from "react";
import Welcome from "./Welcome";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'Ciaran',
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
        if (this.state.username === 'Ciaran' && this.state.password === 'dummy'){
            AuthenticationService.registeredSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})

        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})

        }
        // console.log(this.state)
    }

    render() {
        return (
            <div className="text-white">
                {/*<NavigationBar/>*/}
                <center>
                    <h1>Login</h1>
                    <div className="container">
                        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                        {this.state.hasLoginFailed && <div className="warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div>Login Successful</div>}
                        {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                        User Name: <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                        Password: <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} />
                        <button onClick={this.loginClicked}>Login</button>
                    </div>
                </center>
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