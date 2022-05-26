import React from 'react';
import Rating from 'react-rating';

const StarComponent = ({ rating }) => {
  return (
    <div className='text-warning'>
      <Rating
        emptySymbol='mdi mdi-star-outline'
        fullSymbol='mdi mdi-star'
        initialRating={rating}
        readonly
      />
    </div>
  );
};

export default StarComponent;
