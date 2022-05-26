import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectSize = () => {
  const [selectSize, setSelectSize] = useState(false);

  const toggleSelectSize = (index) => {
    setSelectSize(index);
  };

  const size = [
    { name: 'xs' },
    { name: 's' },
    { name: 'm' },
    { name: 'l' },
    { name: 'xl' },
    { name: 'xxl' },
  ];

  return (
    <ButtonGroup className='flex-wrap'>
      {size.map((item, i) => (
        <Button
          key={i}
          onClick={() => toggleSelectSize(i)}
          className={`text-uppercase border border-light ${
            selectSize === i && 'bg-primary text-white'
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
