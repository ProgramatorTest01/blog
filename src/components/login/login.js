import React, { Component } from "react";
import SignIn from "./signin";
import Register from "./register";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
      <div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navigation />
            </Container>
          </Navbar>
        </header>
        <div>
          <Register history={this.props.history} />
          <SignIn history={this.props.history} />
        </div>
        <div className="col-md-6 mt-5 mx-auto">
          <a
            className="btn btn-secondary btn-block"
            href="/admin"
            onClick={this.newWindow.bind(this)}
            role="button"
          >
            Zaloguj jako administrator
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
