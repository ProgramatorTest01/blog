import React, { Component } from "react";
import SignIn from "./admin-signin";
import Register from "./admin-register";
import NavigationAdmin from "./admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <NavigationAdmin />
            </Container>
          </Navbar>
        </header>
        <div class="textblocks">
        <Container>
          <Row>
            <Col>
              <h1>Zarejestruj się jako administrator</h1>
              <Register history={this.props.history} />
            </Col>
            <Col>
              <h1>Zaloguj się jako administrator</h1>
              <SignIn history={this.props.history} />
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
