import React from 'react';

const SelectType = () => {
  const type = [
    { name: 'T-Shirts', number: '(411)' },
    { name: 'Sweatshirts', number: '(130)' },
    { name: 'Tank Tops', number: '(45)' },
    { name: 'Dress shirts', number: '(8)' },
  ];

  return (
    <ul className='nav flex-column gap-3'>
      {type.map((item) => (
        <li>
          <div className='d-flex align-items-center'>
            <input
              className='form-check-input form-check'
              type='checkbox'
              value=''
              id={item.name}
            />
            <label
              className='mb-0 ms-3 text-capitalize cursor-pointer'
              for={item.name}
            >
              {item.name} <span className='text-black-50'>{item.number}</span>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SelectType;
