import React, { Component } from "react";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

export default class About extends Component {
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
              <h1>O autorze bloga!</h1>
            </div>
            <article>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, corporis nostrum aliquid, doloribus deserunt iure
                voluptatum quaerat provident magnam sequi ea non nulla earum
                maiores perferendis porro nisi assumenda laboriosam perspiciatis
                repellat. Nesciunt, perspiciatis unde. Ducimus, eligendi!
                Ratione, dolore aut quaerat dolor nulla dolores. Odio reiciendis
                laborum rerum dolorum voluptatum magnam quis magni! Dolor animi
                quod eius obcaecati debitis nihil hic tenetur, iste in assumenda
                sapiente minima nemo, consequuntur, voluptate distinctio nulla
                atque iusto incidunt vitae! Dolorum possimus provident unde quo
                et sed expedita neque rerum nobis in quis praesentium, quia
                necessitatibus omnis soluta architecto amet atque officiis rem
                illum laboriosam explicabo. Minus, consequatur? Consequuntur
                aliquid nihil odio recusandae, dignissimos at tenetur blanditiis
                neque aperiam? Modi dolorem voluptates alias quod earum
                necessitatibus optio dolores distinctio quidem, quam amet est
                sint explicabo commodi quaerat cum voluptate repellendus quos
                vel quasi a. Eos eum corporis architecto maiores beatae
                quibusdam amet id recusandae exercitationem at, quas harum vel
                cumque dolore magnam ea officiis sunt maxime? Impedit
                perspiciatis deleniti mollitia nesciunt culpa neque quisquam
                alias at commodi ullam quae quos debitis totam, provident
                recusandae non sunt modi quas fuga soluta sed laboriosam.
                Deleniti exercitationem aliquid, impedit reiciendis dignissimos
                corrupti. Deleniti fugiat quos exercitationem impedit.
              </div>
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
