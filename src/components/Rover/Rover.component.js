import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../List/List.component';
import Error from '../Error/Error.component';
import axios from 'axios';

const Rover = (props) => {
  const fetchPictures = (id) => {
    const APIkey = '71Vj7BUTdloD0PqfnxsedPcToe0jQDNMX5Z34SIe';
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?sol=1000&api_key=${APIkey}`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data.photos);
        setPictures(data.photos);
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  };
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [errorObj, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchPictures(id);
  }, [id]);

  return (
    <div>
      {errorObj ? <Error error={errorObj}/>: <List pictures={pictures} />}
    </div>
  );
};

export default Rover;
