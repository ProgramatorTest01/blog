import React, { Component } from "react";
import Navigation from "./../login/navbar";
import Footer from "./footer";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default class About extends Component {
  render() {
    return (
      <Container>
        <div>
          <Container>
            <header className="App-header">
              <Navbar bg="dark" variant="dark">
                <Navigation />
              </Navbar>
            </header>
          </Container>

          <div className="wrapper">
            <Container>
              <main>
                <div>
                  <Container>
                    <article class="textblocks">
                      <h1>O autorach bloga!</h1>
                      <CardGroup>
                        <Card>
                          <Card.Img src="https://media.quiz.me/quiz/C-T7nfSqKj3q_189x189_2mRPEZPf.jpg" />
                        </Card>
                        <Card>
                          <Card.Img src="https://i.ytimg.com/vi/rvaCpTsayDk/mqdefault.jpg" />
                        </Card>
                        <Card>
                          <Card.Text>
                            <h2>
                              Z prawej Grzegorz, z lewej Artur... albo na
                              odwrót...
                            </h2>
                            <p>Nie jesteśmy pewni...</p>
                          </Card.Text>
                        </Card>
                      </CardGroup>
                      <br></br>
                      <p>
                        To my. Artur i Grzegorz. Jesteśmy początkującymi
                        programistami. Na kursie programowania postawiono nam
                        wydawałoby sie typowe zadanie w ramach pracy domowej.
                        Stworzenie bloga na dowolny temat. Gdy postanowiliśmy
                        znaleźć jakiś temat wspólny dla nas obu, szybko okazało
                        się że są to książki. Wydawałoby się temat oklepany i
                        nudny. O nie! Kolejny blog o książkach. Ale czy na
                        pewno? Czy w dzisiejszych czasach pełnych teorii
                        spiskowych, fakenewsów, w czasach w których o rzetelną
                        informację niezwykle trudno, rzetelnie oceniający różne
                        publikacje blog jest aby na pewno zbędny, wtórny i
                        nieciekawy? My uważamy że nie! Za zadanie postawiliśmy
                        sobie nie tylko napisanie kodu i ostylowanie strony o
                        niczym. Postanowiliśmy zrobić rasowy blog od A do Z w
                        którym oprócz zadań z zakresu programowania i pisania
                        stron, bedzie także rzetelna i wartościowa treść. Tak
                        oto powstał: "Czytać warto! Blog o książkach i nie
                        tylko...". Zapraszamy!
                      </p>
                    </article>
                  </Container>
                </div>
              </main>
            </Container>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
