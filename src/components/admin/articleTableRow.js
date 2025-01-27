import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ArticleTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  deleteArticle(e) {
    e.preventDefault();
    axios
      .delete(
        "http://localhost:4000/articles/delete-article/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
    this.forceUpdate();
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.author}</td>
        <td>{this.props.obj.content}</td>
        <td>{this.props.obj.info}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-article/" + this.props.obj._id}
          >
            Edytuj
          </Link>
          <Button onClick={this.deleteArticle} size="sm" variant="danger">
            Usuń
          </Button>
        </td>
      </tr>
    );
  }
}
