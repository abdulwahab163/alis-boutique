import React from 'react';

const UploadPhoto = () => {
  return (
    <div className='upload-image image-size-very-small'>
      <label
        className='btn hover-scale-small btn-outline-light p-0 h-100 w-100 border border-2 rounded-lg'
        htmlFor='img'
      >
        <img
          className='d-block h-100 w-100 rounded-lg position-relative object-cover'
          src='/assets/images/add-photo.svg'
          alt='...'
        />
        <input type='file' id='img' name='img' accept='image/*' />
      </label>
    </div>
  );
};

export default UploadPhoto;
