import React, { Component } from "react";
import { login } from "./userFunction";
import { formValid } from "./userFunction";
import { emailRegex } from "./userFunction";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      },
      info: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      password: this.state.password
    };
    if (formValid(this.state)) {
      login(user).then(res => {
        if (res) {
          this.props.history.push("/profile");
        }
      });
      this.setState({
        email: "",
        password: ""
      });
    } else {
      this.setState({
        info: "Email lub hasło są błędne. Wprowadź poprawne dane."
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Zaloguj się</h1>
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
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Zaloguj
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

export default SignIn;
