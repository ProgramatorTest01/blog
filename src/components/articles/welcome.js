import React, { Component } from "react";
import axios from "axios";
import ArticleWelcome from "./welcome-articles";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/articles/")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dataTable() {
    let article1 = { ...this.state.articles.reverse()[0] };
    let article2 = { ...this.state.articles.reverse()[1] };
    let article3 = { ...this.state.articles.reverse()[2] };

    return (
      <React.Fragment>
        <ArticleWelcome obj={article1} />
        <ArticleWelcome obj={article2} />
        <ArticleWelcome obj={article3} />
      </React.Fragment>
    );
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
          <main>
            <div>
              <h1>
                To będzie powitanie i kilka słów o blogu - co to jest, z czym
                sie je i dlaczego!
              </h1>
            </div>
            <article>
              <div>{this.dataTable()}</div>
            </article>
          </main>
          <footer>
            Artur &amp; Grzegorz 2020. Wszelkie prawa wyłączone :-)
          </footer>
        </div>
      </div>
    );
  }
}
