import React, { Component } from "react";
import SignIn from "./admin-signin";
import Register from "./admin-register";
import NavigationAdmin from "./admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
        <div>
          <Register history={this.props.history} />
          <SignIn history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default AdminLogin;
