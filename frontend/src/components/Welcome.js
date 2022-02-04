import React from 'react';
import {Link} from "react-router-dom";
import HelloWorldService from "./HelloWorldService";

 class Welcome extends React.Component {
     constructor(props) {
         super(props);
         this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
         this.state = {
             welcomeMessage : ''
         }
         this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
         this.handleError = this.handleError.bind(this)
     }

     render() {
         return(
             <>
                <h1>Welcome!</h1>
                <div className="container">
                     Welcome {this.props.match.params.name}. You can view your todos here <Link to="/todos">here</Link>
                </div>
                 <div className="container">
                     Click here to get a customized welcome message.
                     <button onClick={this.retrieveWelcomeMessage}
                             className="btn btn-success">Get Welcome Message</button>
                 </div>
                 <div className="container">
                     {this.state.welcomeMessage}
                 </div>
             </>
        )
     }
    retrieveWelcomeMessage(){
         // HelloWorldService.executeHelloWorldService()
             //.then(response => this.handleSuccessfulResponse(response))
             //.catch()

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
     }

    handleSuccessfulResponse(response){
         console.log(response)
         this.setState({welcomeMessage: response.data.message})
    }

    handleError(error){
         console.log(error)
         let errorMessage = '';
         if(error.message) {
             errorMessage += error.message
         }
         if (error.response && error.response.data){
             errorMessage += error.response.data.message
         }
         this.setState({welcomeMessage: errorMessage})
    }
 }

export default Welcome;
