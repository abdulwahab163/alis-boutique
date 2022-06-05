import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectSize = ({ size }) => {
  const [selectSize, setSelectSize] = useState(false);

  return (
    <ButtonGroup className='flex-wrap'>
      <Button
        onClick={() => setSelectSize(!selectSize)}
        className={`text-uppercase border border-light ${
          selectSize && 'bg-primary text-white'
        }`}
        variant='outline-primary'
      >
        <small>{size.name}</small>
      </Button>
    </ButtonGroup>
  );
};

export default SelectSize;
