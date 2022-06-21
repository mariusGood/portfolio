import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const NotFound = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      <Link to={'/'}>
        <Button type='button' color='primary'>
          Go back
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
