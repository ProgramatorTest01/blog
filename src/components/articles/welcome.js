import React, { Component } from "react";
import axios from "axios";
import ArticleWelcome from "./welcome-articles";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./footer";
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
    let dataArticles = this.state.articles.sort(this.state.articles.created);
    dataArticles.reverse();
    let article1 = { ...dataArticles[0] };
    let article2 = { ...dataArticles[1] };
    let article3 = { ...dataArticles[2] };

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <ArticleWelcome obj={article1} />
            </Col>
            <Col>
              <ArticleWelcome obj={article2} />
            </Col>
            <Col>
              <ArticleWelcome obj={article3} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
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
          </Container>
          <div className="wrapper">
            <Container>
              <main>
                <Container>
                  <div class="textblocks">
                    <h1>Czy czytać warto, a jeżeli tak, to co?</h1>
                    <p>
                      Czytanie stymuluje umysł, wzbogaca słownictwo (zwłaszcza
                      gdy człowiek jest jeszcze młody), poprawia pamięć i jest
                      po prostu ciekawą rozrywką. Z powyższego wyraźnie wynika
                      że czytać warto. Ale co czytać? Tu niestety nie ma równie
                      prostej odpowiedzi. Coraz łatwiejszy dostęp do literatury
                      oznacza bowiem również coraz łatwiejszy dostęp do książek
                      przedstawiających wąski punkt widzenia, o marnym stylu,
                      przekazujących fałszywe informacje, czy wręcz do pozycji
                      łączących wszystkie te trzy aspekty na raz. Na naszym
                      blogu postaramy się przedstawić zarówno książki które
                      warto przeczytać, jak i te których należy unikać i za
                      każdym razem postaramy sie obiektywnie uargumentować nasze
                      zdanie.
                    </p>
                    <p>Zapraszamy Artur & Grzegorz</p>
                  </div>
                </Container>
                <article>
                  <div>{this.dataTable()}</div>
                </article>
              </main>
            </Container>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}
