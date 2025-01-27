import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <Container>
      <div>
          <Container>
            <header>
              <Navbar bg="dark" variant="dark">
                <Navigation />
              </Navbar>
            </header>
          </Container>
          <Container>
          <div className="wrapper">
          <Container>
          <div class="textblocks">
          <h1 className="text-center">Witaj użytkowniku. Twoje dane to:</h1>
              <br></br>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>Imię</td>
                    <td>{this.state.first_name}</td>
                  </tr>
                  <tr>
                    <td>Nazwisko</td>
                    <td>{this.state.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                </tbody>
              </table>
          </div>
          </Container>
          </div>
          </Container>
      </div>
      </Container>
    );
  }
}

export default Profile;

