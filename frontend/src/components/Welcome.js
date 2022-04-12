import React from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "./HelloWorldService";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can view your todos here{" "}
          <Link to="/todos">here</Link>
          <p>
            You can view your portfolio here <Link to="/portfolio">here</Link>
          </p>
        </div>
    
      </>
    );
  }
  retrieveWelcomeMessage() {

    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({ welcomeMessage: response.data.message });
  }

  handleError(error) {
    console.log(error);
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }
}

export default Welcome;
