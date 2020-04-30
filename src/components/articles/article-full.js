import React, { Component } from "react";
import axios from "axios";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import CommentsList from "./../comments/list-comments";
import AddComment from "./../comments/add-comment";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

export default class ArticleFull extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      photo: "",
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
          this.props.match.params.id) 
      .then((res) => {
        this.setState({
          photo: res.data.photo,
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
                  <div className="textblocks" >
                    <CardGroup>
                      <Card xs={4} sm={4}>
                        <Card.Img src={this.state.photo} />
                      </Card>
                      <Card xs={8} sm={8}>
                        <Card.Body>
                          <Card.Title>
                            <h2>{this.state.title}</h2>
                            <h3>{this.state.author}</h3>
                          </Card.Title>
                          <Card.Text>{this.state.content}</Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                    <br></br>
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
