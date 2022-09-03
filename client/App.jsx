import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      // <h1>Welcome to PT Conferences</h1>
      <HomeContainer/>
    );
  }
}

export default App;