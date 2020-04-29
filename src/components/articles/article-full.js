import React, { Component } from "react";
import axios from "axios";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import CommentsList from "./../comments/list-comments";
import AddComment from "./../comments/add-comment";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

export default class ArticleFull extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      author: "",
      content: "",
      created: "",
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
          created: res.data.created,
        });
      })
      .catch((error) => {
        console.log(error);
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
            <Container>
              <main className="wrapper">
                <Container>
                  <div className="textblocks">
                    <div className="article-box">
                      <h2>{this.state.title}</h2>
                      <h3>{this.state.author}</h3>
                      <p>{this.state.content}</p>
                    </div>
                    <div>
                      {localStorage.getItem("usertoken") !== null ? (
                        <AddComment
                          articleId={this.props.match.params.id}
                          titleArticle={this.state.title}
                        />
                      ) : (
                        <div>Możliwość dodawania komentarzy po zalogowaniu</div>
                      )}
                    </div>
                    <div>
                      <CommentsList articleId={this.props.match.params.id} />
                    </div>
                  </div>
                </Container>
              </main>
            </Container>
          </Container>
        </div>
        <div>
          <Footer />
        </div>
      </Container>
    );
  }
}
