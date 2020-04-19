import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Czytać warto! Blog o książkach i nie tylko...
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/"} className="nav-link">
                    Witaj!
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/about"} className="nav-link">
                    O mnie
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
            </Container>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default withRouter(Navigation);
