import React from 'react';

const List = ({ pictures }) => {
  let list;
  if (!pictures) {
    list = <span>No pictures</span>;
  } else {
    list = (
      <div>
        {pictures.map((picture) => (
          <div>
            <img height="150px" width="150px" src={picture.img_src} alt="" />
            <span>Heart</span>
          </div>
        ))}
      </div>
    );
  }
  return list;
};

export default List;
