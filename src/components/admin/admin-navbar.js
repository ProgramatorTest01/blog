import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

class NavigationAdmin extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <Nav>
        <Link to={"/admin"} className="nav-link">
          Zaloguj
        </Link>
      </Nav>
    );

    const userLink = (
      <div>
        <Nav className="justify-content-end">
          <Nav>
            <Link to={"/create-article"} className="nav-link">
              Dodaj artykuł
            </Link>
          </Nav>
          <Nav>
            <Link to={"/article-list"} className="nav-link">
              Lista artykułów
            </Link>
          </Nav>
          <Nav>
            <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
              Wyloguj
            </a>
          </Nav>
        </Nav>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <Navbar bg="lightdark" expand="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Czytać warto! Sekcja administratora
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  {localStorage.getItem("usertoken") !== null
                    ? userLink
                    : loginRegLink}
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default withRouter(NavigationAdmin);
