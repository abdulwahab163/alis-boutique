import React from 'react';

const SignUp = ({ onClickLogin }) => {
  return (
    <form noValidate>
      <ul className='nav flex-column gap-4'>
        <li>
          <div className='text-center'>
            <h5 className='mb-2 fw-normal'>
              Create an account and discover the benefits
            </h5>
          </div>
        </li>
        <li>
          <div>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control shadow-sm '
              placeholder='Full Name'
            />
          </div>
        </li>
        <li>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control shadow-sm '
              placeholder='E-mail'
            />
          </div>
        </li>
        <li>
          <div>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control shadow-sm '
              placeholder='Password'
            />
          </div>
        </li>
        <li>
          <div className='d-flex px-md-3'>
            <span className='me-auto'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='agreeE'
                />
                <label className='mb-0 fs-6' htmlFor='agreeE'>
                  <small>
                    I agree to the Google Terms of Service and Privacy Policy
                  </small>
                </label>
              </div>
            </span>
          </div>
        </li>
        <li>
          <div>
            <button type='submit' className='btn btn-primary w-100'>
              Sign up
            </button>
          </div>
        </li>
        <li>
          <div className='d-flex justify-content-center gap-4'>
            <span>
              <button type='button' className='btn p-0' onClick={onClickLogin}>
                <span className='fs-6'>
                  <small>Are you already a member?</small>
                </span>
              </button>
            </span>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default SignUp;
