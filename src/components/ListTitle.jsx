import React, { Component } from 'react';

class ListTitle extends Component {
  render() {
    return (
      <div className="list-heading">
        <div className="title">URL</div>
        <div className="title">Username</div>
        <div className="title">Password</div>
        <div className="title">Created At</div>
        <div className="title">Updated At</div>
      </div>
    )
  }
};

export default ListTitle