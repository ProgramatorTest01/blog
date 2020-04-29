import React, { Component } from "react";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

export default class Contact extends Component {
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
        </div>
        <Container>
        <div className="wrapper">  
        <main>
        <Container>
        <section class="textblocks">
          <h1>
            Kontakt
          </h1>
          <p>
            Masz pytania? Proszę skontaktuj się z nami. Z chęcią poznamy Twoje
            zdanie lub opinie o książkach, tym blogu, programowaniu, pisaniu stron i innych ważnych sprawach. Wystarczy tylko że wypełnisz formularz poniżej. 
          </p>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Imię</Form.Label>
                <Form.Control required placeholder="Twoje Imię" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Twój e-mail" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Temat wiadomości</Form.Label>
              <Form.Control required placeholder="Krótki opis o czym będzie Twoja wiadomość" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Treść wiadomości</Form.Label>
              <Form.Control required as="textarea" rows="8" placeholder="Pełna treść Twojej wiadomości" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Prześlij
            </Button>
          </Form>
        </section>
        </Container>
        <Container className="wrapper">
          <div className="textblocks">
          <Row>
          <Col>
            <p>
              Do zaliczenia pracy musimy też zamieścić mapkę z Google Maps. Skoro to blog o książkach zamieszczamy w takim razie adres Biblioteki Narodowej i korzystamy z okazji by zachęcić Was do jej odwiedzenia. Czy wiecie że:
            </p>
            <p>
              Zbiory Biblioteki Narodowej sięgają 8.8 miliona jednostek.
            </p>
            <p>
              Wydawcy mają obowiązek przekazać do Biblioteki Narodowej w ramach egzemplarza obowiązkowego 2 egzemplarze każdej publikacji ukazującej się na terenie Polski.
            </p>
            <p>
              Informatorium to miejsce, gdzie każdy czytelnik Biblioteki Narodowej może prosić o radę, w jaki sposób szukać potrzebnych materiałów lub informacji na dany temat oraz jak się poruszać po Bibliotece. 
            </p>
            <p>
              Nie musisz być w Warszawie by korzystać z jej zbiorów. Możesz zamówić sobie książkę do biblioteki publicznej blisko Twojego miejsca zamieszkania w ramach wypożyczenia międzybibliotecznego, lub skorzystać z zasobów internetowych.
            </p>

          </Col>
          <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9778.520578558164!2d21.0034221!3d52.2137684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9140378313c7f946!2sBiblioteka%20Narodowa!5e0!3m2!1spl!2spl!4v1587470631700!5m2!1spl!2spl" title="Biblioteka Narodowa" width="450" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Col>
          </Row>
          <Row>
            <Col>
            Jak widać warto korzystać z zasobów Biblioteki Narodowej, do czego serdecznie Wszystkich zapraszamy. Na pewno znajdziecie tam też wszystkie recenzowane przez nas książki.
            </Col> 
          </Row>
          </div>
        </Container>
        </main>
        </div>
        </Container>
        <div>
          <Footer />
        </div>
      </Container>
    );
  }
}