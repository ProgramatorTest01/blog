import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default class Footer extends Component {
  render() {
    return (
      <Container>
      <div>
        <footer className="wrapper">
          <Card bg="warning" border="danger" style= {{ width: 'auto' }}>
            <Card.Body>
              <Card.Text>
                Strona stworzona przez Artura Maziarczuka i Grzegorza Szymczykiewicza za pomocą React Bootstrap i własnej pracy. Wszystkie prawa zastrzeżone. 
              </Card.Text>
              <Card.Text>
                Grafika w tle na licencji CC0 za https://c2.peakpx.com/561693/assorted-books
              </Card.Text>
            </Card.Body>
          </Card>
        </footer>
      </div>
      </Container>
    );
  }
}
