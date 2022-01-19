import React, { useState, useEffect, useCallback } from 'react';
import Picture from '../Picture/Picture.component';

const List = ({ pictures }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
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
      <ul>
        {pictures.map((picture) => (
          <li key={picture.id}>
            <Picture
              picture={picture}
              setFavoritesHandler={onClickSetFavoritesHandler}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default List;
