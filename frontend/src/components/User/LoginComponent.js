import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService.js";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ciaran",
      password: "dummy",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      <div className="text-white">
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Successful</div>}

          <Row className="justify-content-md-center">
            <Col xs={5}>
              <p></p>
              <Card className="border border-dark bg-dark text-white">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form>
                  <Link to="/register">New user? Sign up</Link>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={this.loginClicked}>Login</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
