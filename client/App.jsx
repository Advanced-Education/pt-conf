import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
class App extends Component {
  constructor() {
    super();
    this.state = {login: true, signup: true};
  }
  render() {
    const { login, signup } = this.state; // ML is this not necessart with RTK?
    return (
      // <h1>Welcome to PT Conferences</h1>
      <HomeContainer login={login} signup={signup}/>
    );
  }
}

export default App;