import { Component } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class RegisterComponent extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <Card className="border border-dark bg-dark text-white">
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPasswordCheck">
                  <Form.Label>Re-Enter Password</Form.Label>
                  <Form.Control
                    type="passwordcheck"
                    placeholder="Re-Enter Password"
                  />
                </Form.Group>
              </Form>
              <Link to="/login">Existing user? Log in</Link>
            </Card.Body>
            <Card.Footer>
              <Button>Sign Up!</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RegisterComponent;
