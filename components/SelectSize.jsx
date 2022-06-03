import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectSize = ({sizes,size, setSize}) => {

  const toggleSelectSize = (size) => {
    setSize(size);
  };

  return (
    <ButtonGroup className='flex-wrap'>
      {sizes?.map((item, i) => (
        <Button
          key={item.id}
          onClick={() => toggleSelectSize(item)}
          className={`text-uppercase border border-light ${
            size.id === item.id && 'bg-primary text-white'
          }`}
          variant='outline-primary'
        >
          {item.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SelectSize;
