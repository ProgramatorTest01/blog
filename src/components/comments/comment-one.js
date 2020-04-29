import React, { Component } from "react";

export default class CommentOne extends Component {
  // handleDate() {
  //   let date = this.props.obj.created;
  //   return <div>Data: {date}</div>;
  // }

  render() {
    return (
      <div className="comment-box">
        <h5>Opublikowane przez: {this.props.obj.user}</h5>
        <div>{this.props.obj.content}</div>
        {/* <div>{this.handleDate()}</div> */}
      </div>
    );
  }
}
