import React from 'react';

const List = ({ pictures }) => {
  return (
    <div>
      {pictures.map((picture) => (
        <div>
          <img height="150px" width="150px" src={picture.img_src} alt="" />
          <span>Heart</span>
        </div>
      ))}
    </div>
  );
};

export default List;
