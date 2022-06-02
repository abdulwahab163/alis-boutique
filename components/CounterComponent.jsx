import React, { useState} from 'react';

const CounterComponent = ({count, setCount}) => {

  return (
    <div className='bg-white shadow-sm border bg-opacity-10 rounded-pill d-flex'>
      <button
        type='button'
        onClick={() => {count > 1 && setCount(count - 1)}}
        className='btn btn-lg bg-opacity-10 minus border-0 bg-opacity-50 rounded-start-pill hover-scale'
      >
        -
      </button>
      <input
        className='form-control form-control-lg p-0 text-center bg-opacity-10 fw-bold border-0 bg-white bg-opacity-50'
        type='text'
        value={count}
      />
      <button
        type='button'
        onClick={() => setCount(count + 1)}
        className='btn btn-lg bg-opacity-10 minus border-0 bg-opacity-50 rounded-start-pill hover-scale'
      >
        +
      </button>
    </div>
  );
};

export default CounterComponent;
