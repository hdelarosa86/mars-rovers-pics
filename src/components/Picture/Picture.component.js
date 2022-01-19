import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Picture = ({ picture }) => (
  <div>
    <img height="150px" width="150px" src={picture.img_src} alt="" />
    <span>{picture.rover.name}</span> - <span>{picture.camera.full_name}</span>
    <span>{true ? <FavoriteIcon /> : <FavoriteBorderIcon />}</span>
  </div>
);
export default Picture;
