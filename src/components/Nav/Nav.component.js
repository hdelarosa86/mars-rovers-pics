import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const rovers = ['curiosity', 'opportunity', 'spirit'];

  return (
    <nav>
      {rovers.map((rover, idx) => (
        <Link to={rover} key={idx}>
          {rover}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
