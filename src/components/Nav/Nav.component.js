import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.css';

const Nav = () => {
  const rovers = [
    { to: 'curiosity', title: 'Curiosity' },
    { to: 'opportunity', title: 'Opportunity' },
    { to: 'spirit', title: 'Spirit' },
  ];
  return (
    <nav>
      {rovers.map((rover, idx) => {
        return (
          <Link to={rover.to} key={idx}>
            {rover.title}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
