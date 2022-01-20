import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const Picture = ({ picture, setFavoritesHandler }) => {
  let localStorageArr = JSON.parse(
    window.localStorage.getItem('favoritesLocalStorage')
  );

  let initialState = localStorageArr.includes(picture.id);

  const [isFavorite, setIsFavorite] = useState(initialState);

  useEffect(() => {
    setFavoritesHandler(picture.id, isFavorite);
  }, [isFavorite]);

  const handleOnClick = (event) => {
    if (event.detail === 2) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={`${picture.rover.name} - ${picture.camera.full_name}`}
        subheader={`${picture.earth_date}`}
      />
      <CardMedia
        component="img"
        height="150"
        image={`${picture.img_src}`}
        alt={`${picture.camera.full_name}`}
      />
      <IconButton onClick={handleOnClick} aria-label="click to like">
        {isFavorite ? (
          <FavoriteIcon style={{ fill: 'red', cursor: 'finger' }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </Card>
  );
};
export default Picture;
