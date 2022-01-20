import React, { useState, useEffect, useCallback } from 'react';
import Picture from '../Picture/Picture.component';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const List = ({ pictures }) => {
  if (!window.localStorage.getItem('favoritesLocalStorage')) {
    window.localStorage.setItem('favoritesLocalStorage', JSON.stringify([]));
  }

  let initialState = JSON.parse(
    window.localStorage.getItem('favoritesLocalStorage')
  );
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(
      'favoritesLocalStorage',
      JSON.stringify(favorites)
    );
  });

  const onClickSetFavoritesHandler = useCallback(
    (favoriteId, isFavoriteBool) => {
      if (isFavoriteBool) {
        setFavorites((setFavoritesArr) => [...setFavoritesArr, favoriteId]);
      } else {
        let filteredArr = favorites.filter((id) => id !== favoriteId);
        setFavorites(filteredArr);
      }
    },
    [favorites]
  );

  if (!pictures) {
    return <span>No pictures</span>;
  } else {
    return (
      <ImageList cols={3} rowHeight={325}>
        {pictures.map((picture) => (
          <ImageListItem key={picture.id}>
            <Picture
              picture={picture}
              setFavoritesHandler={onClickSetFavoritesHandler}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
};

export default List;