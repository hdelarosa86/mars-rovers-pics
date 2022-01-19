import React from 'react';
import Rover from './components/Rover/Rover.component';
import Nav from './components/Nav/Nav.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/:id" element={<Rover />} />
      </Routes>
    </Router>
  );
};

export default App;
