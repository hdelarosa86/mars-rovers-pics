import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const rovers = ['curiosity', 'opportunity', 'spirit'];

  return (
    <nav>
      {rovers.map((rover) => (
        <Link to={rover}> {rover}</Link>
      ))}
    </nav>
  );
};
export default Nav;
