import React from 'react';
import Rover from './components/Rover/Rover.component';
import Nav from './components/Nav/Nav.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: true,
      pictures: [],
    };
  }

  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/:id" element={<Rover />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
