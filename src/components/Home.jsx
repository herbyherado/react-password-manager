import React, { Component } from 'react'
import HomeHeading from './HomeHeading'
import SignIn from './SignIn'
import '../styles/Home.css'

export class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <HomeHeading />
          <SignIn />
        </div>
        <div style={{ position: 'fixed', top: '50vh', left: '50%' }}>
          <h3>create your account <a href='/register'>here</a></h3>
        </div>
      </div>
    )
  }
};

export default Home;
