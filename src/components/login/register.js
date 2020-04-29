import React, { Component } from "react";
import { register } from "./userFunction";
import { formValid } from "./userFunction";
import { emailRegex } from "./userFunction";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

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
      info: "",
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
        formErrors.first_name = value.length < 2 ? "minimum 2 znaki" : "";
        break;
      case "last_name":
        formErrors.last_name = value.length < 2 ? "minimum 2 znaki" : "";
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
          info: "Użytkownik został utworzony. Teraz zaloguj się.",
        });
        this.props.history.push(`/login`);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      });
    } else {
      this.setState({
        info:
          "Formularz rejestracji zawiera puste pola lub błędy. Proszę go poprawić.",
      });
    }
  }

  /*render() {
    return (
      <div>
          <Form noValidate onSubmit={this.onSubmit}> 
            <Form.Group name="first_name" value={this.state.first_name} onChange={this.onChange}>
              <Form.Label>Imię</Form.Label>
              <Form.Control type="text" placeholder="Twoje Imię" />
              {this.state.formErrors.first_name.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.first_name}
                  </span>
                )}
            </Form.Group>
            <Form.Group name="last_name" value={this.state.last_name} onChange={this.onChange}>
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control type="text" placeholder="Twoje Nazwisko" />
              {this.state.formErrors.last_name.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.last_name}
                  </span>
                )}
            </Form.Group>
            <Form.Group name="email" value={this.state.email} onChange={this.onChange}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Twój e-mail" />
              {this.state.formErrors.email.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.email}
                  </span>
                )}
            </Form.Group>
            <Form.Group name="password" value={this.state.password} onChange={this.onChange}>
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="password" placeholder="Twoje hasło" />
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
            <p className="text-danger">{this.state.info}</p>
          </Form>
      </div>
    );
  }
}

export default Register;*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Imię</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
                {this.state.formErrors.first_name.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.first_name}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Nazwisko</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
                {this.state.formErrors.last_name.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.last_name}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {this.state.formErrors.email.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.email}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {this.state.formErrors.password.length > 0 && (
                  <span className="errorMessage text-danger">
                    {this.state.formErrors.password}
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-lg btn-info btn-block">
                Rejestracja
              </button>
              <br></br>
              <p className="text-danger">{this.state.info}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
