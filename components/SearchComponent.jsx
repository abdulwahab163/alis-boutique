import React from 'react';

const SearchComponent = () => {
  return (
    <div className='w-100'>
      <form
        action='/search-page'
        className='align-items-center d-flex form-control pe-1 position-relative ps-3 py-0 shadow-sm'
      >
        <input
          className='border-0 flex-fill fs-6 fw-light me-2 px-0 py-1'
          type='search'
          placeholder='Search...'
        />
        <button
          type='submit'
          className='align-items-center btn btn-primary d-flex justify-content-around rounded-circle'
          style={{ height: '1.6rem', width: '1.6rem' }}
        >
          <i className='mdi mdi-magnify' />
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
