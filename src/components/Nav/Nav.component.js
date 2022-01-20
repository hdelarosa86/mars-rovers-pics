import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.css';

const Nav = () => {
  const rovers = ['curiosity', 'opportunity', 'spirit'];
  return (
    <nav>
      {rovers.map((rover, idx) => {
        return (
          <Link to={rover} key={idx}>
            {rover}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
