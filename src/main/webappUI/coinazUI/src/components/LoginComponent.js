import React from "react";

class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'Ciaran',
            password: ''
        }

        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    render() {
        return (
            <div className="text-white">
                {/*<NavigationBar/>*/}
                <center>
                    User Name: <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} />
                    <button>Login</button>
                </center>
            </div>
        );
    }
}

export default LoginComponent;