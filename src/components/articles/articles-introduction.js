import React, { Component } from "react";
import axios from "axios";
import ArticleAll from "./all-articles";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

export default class ArticlesIntro extends Component {
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dataArticles() {
    let dataArticles = this.state.articles.sort(this.state.articles.created);
    dataArticles.reverse();
    return dataArticles.map((res, i) => {
      return <ArticleAll obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Container>
        <div>
          <Container>
            <header className="App-header">
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navigation />
                </Container>
              </Navbar>
            </header>
            <div className="wrapper">
              <Container>
                <main>
                  <div className="textblocks">
                    <h1>Artykuły - recenzje! Wprowadzenie!</h1>
                  </div>
                  <article>
                    <div>{this.dataArticles()}</div>
                  </article>
                </main>
              </Container>
            </div>
          </Container>
          <div>
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}
