import React from 'react';

const SelectType = ({ item }) => {
  // const type = [
  //   { name: 'T-Shirts', number: '(411)' },
  //   { name: 'Sweatshirts', number: '(130)' },
  //   { name: 'Tank Tops', number: '(45)' },
  //   { name: 'Dress shirts', number: '(8)' },
  // ];

  return (
    <li>
      <div>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id={item.name}
        />
        <label
          className='mb-0 ms-2 text-capitalize cursor-pointer'
          htmlFor={item.name}
        >
          {item.name} <span className='text-black-50'>{item.number}</span>
        </label>
      </div>
    </li>
  );
};

export default SelectType;
