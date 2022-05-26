import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectTags = () => {
  const [selectTags, setSelectTags] = useState(false);

  const toggleSelectTags = (index) => {
    setSelectTags(index);
  };

  const tags = [
    { type: 'Recipes' },
    { type: 'Best Sellers' },
    { type: 'Sale' },
    { type: 't-shirts' },
    { type: 'jackets' },
    { type: 'jeans' },
    { type: 'bras' },
    { type: 'shirts' },
    { type: 'dresses' },
  ];

  return (
    <ButtonGroup className='flex-wrap'>
      {tags.map((item, i) => (
        <Button
          key={i}
          onClick={() => toggleSelectTags(i)}
          className={`text-uppercase border border-light ${
            selectTags === i && 'bg-primary text-white'
          }`}
          variant='outline-primary'
        >
          <small>{item.type}</small>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SelectTags;
