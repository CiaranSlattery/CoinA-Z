import React from "react";
import LoginComponent from "./LoginComponent";


class LogoutComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    You are logged out!
                </h1>
                <div className="container">
                    Thank You For Using Coin A-Z.
                </div>
            </div>
        )
    }
}

export default LogoutComponent;
