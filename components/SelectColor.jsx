import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SelectColor = ({ colors }) => {
  const [selectColor, setSelectColor] = useState(false);

  return (
    <ButtonGroup className='flex-wrap'>
      <Button
        onClick={() => setSelectColor(!selectColor)}
        style={{ width: 38, maxWidth: 38 }}
        className={`border border-light text-uppercase p-1`}
        variant='...'
      >
        <span
          className={`badge border border-light w-100 d-flex justify-content-center align-items-center p-3 ${
            selectColor && 'scale-in-center'
          }`}
          style={{
            backgroundColor: `${colors.color}`,
            color: `${colors.color}`,
            height: 20,
          }}
        >
          {selectColor && (
            <i
              className='mdi-18px mdi mdi-check'
              style={{ filter: 'invert(1)' }}
            />
          )}
        </span>
      </Button>
    </ButtonGroup>
  );
};

export default SelectColor;
