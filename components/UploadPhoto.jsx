import Image from 'next/image';
import React from 'react';

const UploadPhoto = () => {
  return (
    <div className='upload-image image-size-very-small'>
      <label
        className='btn hover-scale-small btn-outline-light p-0 h-100 w-100 border border-2 rounded-lg'
        htmlFor='img'
      >
        <span className='d-block h-100 w-100 rounded-lg position-relative'>
          <Image
            className='rounded-lg'
            src={`/assets/images/add-photo.svg`}
            alt='..'
            layout='fill'
            objectFit='cover'
          />
        </span>

        <input type='file' id='img' name='img' accept='image/*' />
      </label>
    </div>
  );
};

export default UploadPhoto;
