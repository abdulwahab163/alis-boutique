import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectColor = () => {
  const [selectColor, setSelectColor] = useState(false);

  const toggleSelectColor = (index) => {
    setSelectColor(index);
  };

  const color = [
    { color: 'black' },
    { color: 'red' },
    { color: 'yellow' },
    { color: 'gainsboro' },
    { color: 'white' },
    { color: 'blue' },
  ];

  return (
    <ButtonGroup className='flex-wrap'>
      {color.map((item, i) => (
        <Button
          key={i}
          onClick={() => toggleSelectColor(i)}
          style={{ width: 38, maxWidth: 38 }}
          className={`border border-light text-uppercase p-1`}
          variant='...'
        >
          <span
            className={`badge border border-light w-100 d-flex justify-content-center align-items-center p-3 ${
              selectColor === i && 'scale-in-center'
            }`}
            style={{
              backgroundColor: `${item.color}`,
              color: `${item.color}`,
              height: 20,
            }}
          >
            {selectColor === i && (
              <i
                className='mdi-18px mdi mdi-check'
                style={{ filter: 'invert(1)' }}
              />
            )}
          </span>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SelectColor;
