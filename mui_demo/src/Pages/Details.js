import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get('id');
  const name = queryParams.get('name');
  const age = queryParams.get('age');
  const email = queryParams.get('email');

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Details;
