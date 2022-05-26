import React from 'react';
import { NavLink } from './NavLink';

const ButtonWithIcon = ({ title, icon, onClick, link = false, to }) => {
  return (
    <>
      {link ? (
        <NavLink
          href={to}
          className='btn btn-sm btn-primary-1 px-3 w-100 h-100 d-flex align-items-center justify-content-center text-capitalize'
        >
          <span className='text-start fs-6'>{title}</span>
          <span className='ms-auto'>
            <i className={`mdi ${icon} fs-6`} />
          </span>
        </NavLink>
      ) : (
        <button
          onClick={onClick}
          type='button'
          className='btn btn-sm btn-primary-1 px-3 w-100 h-100 d-flex align-items-center justify-content-center text-capitalize'
        >
          <span className='text-start fs-6'>{title}</span>
          <span className='ms-auto'>
            <i className={`mdi ${icon} fs-6`} />
          </span>
        </button>
      )}
    </>
  );
};

export default ButtonWithIcon;
