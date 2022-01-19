import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rover from '../Rover/Rover.component';

const Nav = () => {
  const rovers = ['curiosity', 'opportunity', 'spirit'];

  return (
    <nav>
      <Router>
        {rovers.map((rover) => (
          <Link to={rover}> {rover}</Link>
        ))}
        <Routes>
          <Route path="/:id" element={<Rover />} />
        </Routes>
      </Router>
    </nav>
  );
};
export default Nav;
