import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleWelcome extends Component {
  render() {
    return (
      <div className="article-box">
        <h2>{this.props.obj.title}</h2>
        <h3>{this.props.obj.author}</h3>
        <p>{this.props.obj.info}</p>
        <Link
          className="text-primary"
          to={"/one-article/" + this.props.obj._id}
        >
          Czytaj więcej
        </Link>
      </div>
    );
  }
}
