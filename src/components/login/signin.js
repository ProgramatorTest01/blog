import React, { Component } from "react";
import { login } from "./userFunction";
import { formValid } from "./userFunction";
import { emailRegex } from "./userFunction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignIn extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: "",
      },
      info: "",
    };
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Wrowadzono błędne dane";
        break;
      case "password":
        formErrors.password = value.length < 5 ? "Wrowadzono błędne dane" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (formValid(this.state)) {
      login(user).then((res) => {
        if (res) {
          this.props.history.push("/profile");
        }
      });
      this.setState({
        email: "",
        password: "",
      });
    } else {
      this.setState({
        info: "Email lub hasło są błędne. Wprowadź poprawne dane.",
      });
    }
  }

  render() {
    return (
      <div>
        <Form noValidate onSubmit={this.onSubmit}>
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
            Zaloguj
          </Button>
          <br></br>
          <p className="text-danger">{this.state.info}</p>
        </Form>
      </div>
    );
  }
}

export default SignIn;
