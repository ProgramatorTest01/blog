import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

class Navigation extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <Nav>
        <Link to={"/login"} className="nav-link">
          Zaloguj
        </Link>
      </Nav>
    );

    const userLink = (
      <div>
        <Nav>
          <Link to={"/profile"} className="nav-link">
            Profil
          </Link>
        </Nav>
        <Nav>
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Wyloguj
          </a>
        </Nav>
      </div>
    );

    return (
      <div className="App">
        <Container>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Row>
              <Col>              
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Czytać warto! Blog o książkach i nie tylko...
                </Link>
              </Navbar.Brand>
              </Col>
              <Col>  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/"} className="nav-link">
                    Witaj!
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/about"} className="nav-link">
                    O nas
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/articles"} className="nav-link">
                    Artykuły
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/contact"} className="nav-link">
                    Kontakt
                  </Link>
                </Nav>
                {localStorage.getItem("usertoken") !== null
                  ? userLink
                  : loginRegLink}
              </Nav>
              </Col>
              <Col>
              <Form inline>
                <FormControl type="text" placeholder="Szukaj" className="mr-sm-2" />
                <Button variant="light">Szukaj</Button>
                
              </Form>
              </Col>
              </Row>
            </Container>
          </Navbar>
        </header>
        </Container>
      </div>
    );
  }
}

export default withRouter(Navigation);

