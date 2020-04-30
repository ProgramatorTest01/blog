import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CommentsTableRow from "./commentsTableRow";
import NavigationAdmin from "../../components/admin/admin-navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/comments/")
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.comments.map((res, i) => {
      return <CommentsTableRow obj={res} key={i} />;
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
        <div class="textblocks">
          <Container>
          <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Artykuł</th>
                <th>Autor</th>
                <th>Komentarz</th>
                <th>Data utworzenia</th>
                <th>Funkcje</th>
              </tr>
            </thead>
            <tbody>{this.dataTable()}</tbody>
          </Table>
          </div>
          </Container>
        </div>
        </Container>
      </div>
      </Container>
    );
  }
}
