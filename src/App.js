import React from 'react';
import Rover from './components/Rover/Rover.component';
import Nav from './components/Nav/Nav.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: true,
      pictures: [],
    };
  }

  render() {
    return <Nav />;
  }
}

export default App;
