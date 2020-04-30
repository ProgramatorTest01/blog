import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import NavigationAdmin from "./admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { formValid } from "./adminFunction";

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      author: "",
      content: "",
      info: "",
      photo: "",
      infoValid: "",
      formErrors: {
        title: "",
        author: "",
        content: "",
        info: "",
        photo: "",
      },
    };
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title = value.length > 100 ? "maksimum 100 znaków" : "";
        break;
      case "author":
        formErrors.author = value.length > 100 ? "maksimum 100 znaków" : "";
        break;
      case "content":
        formErrors.content = value.length > 5000 ? "maksimum 5000 znaków" : "";
        break;
      case "info":
        formErrors.info = value.length > 500 ? "maksimum 500 znaków" : "";
        break;
      case "photo":
        formErrors.photo = value.length > 100 ? "maksimum 100 znaków" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const article = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content,
      info: this.state.info,
      photo: this.state.photo,
    };

    if (formValid(this.state)) {
      axios
        .post("http://localhost:4000/articles/create-article", article)
        .then((response) => {
          console.log(response.data);
        })
        .then((res) =>
          this.setState({ infoValid: "Artykuł został utworzony" })
        );
      this.setState({
        title: "",
        author: "",
        content: "",
        info: "",
        photo: "",
      });
    } else {
      this.setState({
        infoValid:
          "Formularz kreatora artykułu zawiera puste pola lub błędy. Proszę go poprawić.",
      });
    }
  }

  render() {
    return (
      <Container>
        <div>
          <Container>
            <header className="App-header">
              <Navbar bg="dark" variant="dark">
                <Container>
                  <NavigationAdmin />
                </Container>
              </Navbar>
            </header>
          </Container>
          <Container>
            <div className="form-wrapper textblocks">
              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                  {this.state.formErrors.title.length > 0 && (
                    <span className="errorMessage text-danger">
                      {this.state.formErrors.title}
                    </span>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    name="author"
                    type="text"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                  {this.state.formErrors.author.length > 0 && (
                    <span className="errorMessage text-danger">
                      {this.state.formErrors.author}
                    </span>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Opis</Form.Label>
                  <Form.Control
                    name="content"
                    type="text"
                    value={this.state.content}
                    placeholder="Maksymalnie 5000 znaków"
                    onChange={this.onChange}
                  />
                  {this.state.formErrors.content.length > 0 && (
                    <span className="errorMessage text-danger">
                      {this.state.formErrors.content}
                    </span>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Opis skrócony</Form.Label>
                  <Form.Control
                    name="info"
                    type="text"
                    value={this.state.info}
                    placeholder="Maksymalnie 500 znaków"
                    onChange={this.onChange}
                  />
                  {this.state.formErrors.info.length > 0 && (
                    <span className="errorMessage text-danger">
                      {this.state.formErrors.info}
                    </span>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Okładka książki</Form.Label>
                  <Form.Control
                    name="photo"
                    type="text"
                    value={this.state.photo}
                    placeholder="Wprowadź nazwę pliku z rozszerzeniem"
                    onChange={this.onChange}
                  />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                  Dodaj artykuł
                </Button>
                <p className="text-danger">{this.state.infoValid}</p>
              </Form>
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}
