import React from 'react';
import Picture from '../Picture/Picture.component';

const List = ({ pictures }) => {
  if (!pictures) {
    return <span>No pictures</span>;
  } else {
    return (
      <ul>
        {pictures.map((picture) => (
          <li>
            <Picture picture={picture} />
          </li>
        ))}
      </ul>
    );
  }
};

export default List;
