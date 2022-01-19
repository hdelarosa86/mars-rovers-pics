import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rover from '../Rover/Rover.component';

const Nav = () => {
  //const rovers = ['curiosity', 'opportunity', 'spirit'];

  return (
    <nav>
      <Router>
        <Link to="/curiosity">Curiosity</Link>
        <Link to="/opportunity">opportunity</Link>
        <Link to="/spirit">spirit</Link>
        <Routes>
          <Route path="/:id" element={<Rover />} />
        </Routes>
      </Router>
    </nav>
  );
};
export default Nav;
