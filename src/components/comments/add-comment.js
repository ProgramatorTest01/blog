import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class AddComment extends Component {
  constructor(props) {
    super(props);

    this.onChangeCommentContent = this.onChangeCommentContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      content: "",
    };
  }

  onChangeCommentContent(e) {
    this.setState({ content: e.target.value });
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = `${this.state.first_name} ${this.state.last_name}`;
    const comment = {
      articleId: this.props.articleId,
      titleArticle: this.props.titleArticle,
      user: user,
      content: this.state.content,
    };
    console.log(this.props.titleArticle);

    axios
      .post("http://localhost:4000/comments/create-comment", comment)
      .then((res) => console.log(res.data));

    this.setState({
      content: "",
    });
  }

  render() {
    return (
      <div>
        <h4>Dodaj komentarz</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              rows="5"
              required
              className="form-control"
              value={this.state.content}
              placeholder="Komentarz"
              onChange={this.onChangeCommentContent}
            ></textarea>
          </div>
          <div className="form-group" align="right">
            <input type="submit" className="btn btn-dark" value="Dodaj"></input>
          </div>
        </form>
      </div>
    );
  }
}
