import React, { Component } from "react";
import axios from "axios";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

export default class ArticleFull extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      content: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/articles/one-article/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          content: res.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="wrapper">
          <div className="article-box">
            <h2>{this.state.title}</h2>
            <h3>{this.state.author}</h3>
            <p>{this.state.content}</p>
          </div>
        </div>
        <footer>Artur &amp; Grzegorz 2020. Wszelkie prawa wyłączone :-)</footer>
      </div>
    );
  }
}
