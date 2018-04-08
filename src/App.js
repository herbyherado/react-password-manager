import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css';
import Form from '../src/components/Form'
import Heading from '../src/components/Heading'
import List from '../src/components/List'

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <Heading/>
          <Form/>
          <List/>
        </div>
      </Provider>
    );
  }
}

export default App;
