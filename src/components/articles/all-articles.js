import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default class ArticleAll extends Component {
  render() {
    return (
      <div className="wrapper">
        <Link to={"/one-article/" + this.props.obj._id}>
          <CardGroup>
            <Card xs={4} sm={4}>
              <Card.Img src={this.props.obj.photo} />
            </Card>
            <Card xs={8} sm={8} text="dark">
              <Card.Body>
                <Card.Title>
                  <h2>{this.props.obj.title}</h2>
                  <h3>{this.props.obj.author}</h3>
                </Card.Title>
                <Card.Text>{this.props.obj.info}</Card.Text>
                <Button variant="dark">Czytaj dalej</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Link>
      </div>
    );
  }
}
