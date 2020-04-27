import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ArticleWelcome extends Component {
  render() {
    return (
      <div className="article-box" className="wrapper">
        <Link
          className="text-primary"
          to={"/one-article/" + this.props.obj._id}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.obj.photo} />
            <Card.Body>
              <Card.Title>
                <h2>{this.props.obj.title}</h2>
                <h3>{this.props.obj.author}</h3>
              </Card.Title>
              <Card.Text>{this.props.obj.info}</Card.Text>
              <Button variant="primary">Czytaj dalej</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
