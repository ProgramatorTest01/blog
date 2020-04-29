import React, { Component } from "react";
import axios from "axios";
import CommentOne from "./comment-one";

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  commentsTable() {
    let dataComments = this.state.comments;

    let articleNumber = (dataComments) => {
      if (dataComments.articleId === this.props.articleId) return true;
    };
    let commentsById = dataComments.filter(articleNumber);
    commentsById.sort(commentsById.created);
    commentsById.reverse();

    return commentsById.map((res, i) => {
      return <CommentOne obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <h4>Komentarze</h4>
        {this.commentsTable()}
      </div>
    );
  }
}
