import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../List/List.component';

const Rover = (props) => {
  const fetchPictures = (id) => {
      console.log(id);
    const APIkey = '71Vj7BUTdloD0PqfnxsedPcToe0jQDNMX5Z34SIe';
    window
      .fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?sol=0&api_key=${APIkey}&page=1`
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.photos);
        setPictures(data.photos);
      });
  };
  const { id } = useParams();
  const [pictures, setPictures] = useState();
  useEffect(() => {
    fetchPictures(id);
  }, [id]);

  return (
    <div>
      <List pictures={pictures} />
    </div>
  );
};

export default Rover;
