import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ArticleTableRow from "./articleTableRow";
import NavigationAdmin from "./admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class ArticleList extends Component {
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
    return this.state.articles.map((res, i) => {
      return <ArticleTableRow obj={res} key={i} />;
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
            <NavigationAdmin />
          </Container>
          </Navbar>
        </header>
       </Container>
       <Container>
        <div className="table-wrapper" class="textblocks">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Tytuł</th>
                <th>Autor</th>
                <th>Opis</th>
                <th>Opis skrócony</th>
                <th>Funkcje</th>
              </tr>
            </thead>
            <tbody>{this.dataTable()}</tbody>
          </Table>
        </div>
        </Container>
      </div>
      </Container>   
    );
  }
}
