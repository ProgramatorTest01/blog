import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CommentsTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteComments = this.deleteComments.bind(this);
  }

  deleteComments(e) {
    e.preventDefault();
    axios
      .delete(
        "http://localhost:4000/comments/delete-comment/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Deleted comment!");
      })
      .catch((error) => {
        console.log(error);
      });
    this.forceUpdate();
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.titleArticle}</td>
        <td>{this.props.obj.user}</td>
        <td>{this.props.obj.content}</td>
        <td>{this.props.obj.created}</td>
        <td>
          <Button onClick={this.deleteComments} size="sm" variant="danger">
            Usuń
          </Button>
        </td>
      </tr>
    );
  }
}
