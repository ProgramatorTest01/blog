import React, { Component } from "react";
import SignIn from "./signin";
import Register from "./register";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Footer from "./../articles/footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";


class Login extends Component {
  newWindow(e) {
    e.preventDefault();
    window.open("/admin", "myWindow", "width=1200, height=700");
    this.props.history.push(`/`);
  }

  logOut() {
    this.window.close();
    return false;
  }

  render() {
    return (
      <Container>
      <div>
        <Container>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navigation />
            </Container>
          </Navbar>
        </header>
        </Container>
        <div class="textblocks">
        <Container>
          <Row>
            <Col xs={12} sm={8}>
              <h1>Zarejestruj się</h1>
              <Register history={this.props.history} />
            </Col>
            <Col sm={4}>
              <h1>Zaloguj się</h1>
              <SignIn history={this.props.history} />
            </Col>
          </Row>
          <Row>
            <Col>    
              <Button onClick={this.newWindow.bind(this)} variant="dark" href="/admin" block >
              Zaloguj jako administrator
              </Button>
            </Col>
          </Row>
        </Container>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </Container>
    );
  }
}

export default Login;
