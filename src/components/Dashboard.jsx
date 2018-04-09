import React, { Component } from 'react';
import Form from './Form'
import Heading from './Heading'
import List from './List'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <Form/>
        <List/>
      </div>
    )
  }
};

export default Dashboard;
