import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import NavigationAdmin from "./admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
    this.onChangeArticleAuthor = this.onChangeArticleAuthor.bind(this);
    this.onChangeArticleContent = this.onChangeArticleContent.bind(this);
    this.onChangeArticleInfo = this.onChangeArticleInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: "",
      content: "",
      info: "",
    };
  }

  onChangeArticleTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeArticleAuthor(e) {
    this.setState({ author: e.target.value });
  }

  onChangeArticleContent(e) {
    this.setState({ content: e.target.value });
  }

  onChangeArticleInfo(e) {
    this.setState({ info: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const article = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content,
      info: this.state.info,
    };

    axios
      .post("http://localhost:4000/articles/create-article", article)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      author: "",
      content: "",
      info: "",
    });
  }

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
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Title">
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                type="text"
                value={this.state.title}
                onChange={this.onChangeArticleTitle}
              />
            </Form.Group>

            <Form.Group controlId="Author">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                value={this.state.author}
                onChange={this.onChangeArticleAuthor}
              />
            </Form.Group>

            <Form.Group controlId="Content">
              <Form.Label>Opis</Form.Label>
              <Form.Control
                type="text"
                value={this.state.content}
                onChange={this.onChangeArticleContent}
              />
            </Form.Group>

            <Form.Group controlId="Info">
              <Form.Label>Opis skrócony</Form.Label>
              <Form.Control
                type="text"
                value={this.state.info}
                onChange={this.onChangeArticleInfo}
              />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
              Dodaj artykuł
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
