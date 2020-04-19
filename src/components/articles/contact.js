import React, { Component } from "react";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navigation />
            </Container>
          </Navbar>
        </header>
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Kontakt
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Masz pytania? Proszę skontaktuj się ze mną. Z chęcią poznam Twoje
            zdanie lub opinie o książkach, tym blogu i innych ważnych sprawach.
          </p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      ></input>
                      <label htmlFor="name" className="">
                        Twoje imię
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      ></input>
                      <label htmlFor="email" className="">
                        Twój email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      ></input>
                      <label htmlFor="subject" className="">
                        Temat
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label htmlFor="message">Twoja wiadomość</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <a href="/" className="btn btn-primary">
                  {" "}
                  Wyślij
                </a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Warszawa</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 48 22 234 56 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>kontakt@blog.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer>Artur &amp; Grzegorz 2020. Wszelkie prawa wyłączone :-)</footer>
      </Container>
    );
  }
}
