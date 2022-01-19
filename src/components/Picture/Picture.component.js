import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const Picture = ({ picture, setFavoritesHandler }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect( () => {
      setFavoritesHandler(picture.id, isFavorite)
  },[isFavorite])

  const handleOnClick = (event) => {
    if (event.detail === 2) {
      setIsFavorite(!isFavorite);
    }
  };
  return (
    <div>
      <img height="150px" width="150px" src={picture.img_src} alt="" />
      <span>{picture.rover.name}</span> -{' '}
      <span>{picture.camera.full_name}</span>
      <IconButton onClick={handleOnClick}>
        {isFavorite ? (
          <FavoriteIcon style={{ fill: 'red', cursor: 'finger' }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </div>
  );
};
export default Picture;
