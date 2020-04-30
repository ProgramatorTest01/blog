import React, { Component } from "react";
import { register } from "./adminFunction";
import { formValid } from "./adminFunction";
import { emailRegex } from "./adminFunction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      formErrors: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      infoValid: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "first_name":
        formErrors.first_name = value.length < 3 ? "minimum 3 znaki" : "";
        break;
      case "last_name":
        formErrors.last_name = value.length < 3 ? "minimum 3 znaki" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "błędny adres email";
        break;
      case "password":
        formErrors.password = value.length < 5 ? "minimum 5 znaków" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    if (formValid(this.state)) {
      register(newUser).then((res) => {
        this.setState({
          infoValid: "Administrator został utworzony. Teraz zaloguj się.",
        });
        this.props.history.push(`/admin`);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      });
    } else {
      this.setState({
        infoValid:
          "Formularz rejestracji zawiera puste pola lub błędy. Proszę go poprawić.",
      });
    }
  }

  render() {
    return (
      <div>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Imię</Form.Label>
            <Form.Control
              name="first_name"
              value={this.state.first_name}
              onChange={this.onChange}
              type="text"
              placeholder="Twoje Imię"
            />
            {this.state.formErrors.first_name.length > 0 && (
              <span className="errorMessage text-danger">
                {this.state.formErrors.first_name}
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control
              name="last_name"
              value={this.state.last_name}
              onChange={this.onChange}
              type="text"
              placeholder="Twoje Nazwisko"
            />
            {this.state.formErrors.last_name.length > 0 && (
              <span className="errorMessage text-danger">
                {this.state.formErrors.last_name}
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="email"
              placeholder="Twój e-mail"
            />
            {this.state.formErrors.email.length > 0 && (
              <span className="errorMessage text-danger">
                {this.state.formErrors.email}
              </span>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Hasło</Form.Label>
            <Form.Control
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              placeholder="Twoje hasło"
            />
            {this.state.formErrors.password.length > 0 && (
              <span className="errorMessage text-danger">
                {this.state.formErrors.password}
              </span>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Zarejestruj
          </Button>
          <br></br>
          <p className="text-danger">{this.state.infoValid}</p>
        </Form>
      </div>
    );
  }
}

export default Register;
