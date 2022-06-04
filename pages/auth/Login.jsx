import React from 'react';

const Login = ({ onClickSignUp, onClickForgotPassword }) => {
  return (
    <form noValidate>
      <ul className='nav flex-column gap-4'>
        <li>
          <div className='text-center'>
            <h5 className='mb-2 fw-normal'>Log in</h5>
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
                  id='KeepME'
                />
                <label className='mb-0 fs-6' htmlFor='KeepME'>
                  <small>Keep me signed in</small>
                </label>
              </div>
            </span>
            <span>
              <button
                type='button'
                className='btn p-0'
                onClick={onClickForgotPassword}
              >
                <span className='fs-6 opacity-75'>
                  <small>Forgot password?</small>
                </span>
              </button>
            </span>
          </div>
        </li>
        <li>
          <div>
            <button type='submit' className='btn btn-primary w-100'>
              Sign in
            </button>
          </div>
        </li>
        <li>
          <div className='d-flex justify-content-center gap-4'>
            <span>
              <button type='button' className='btn p-0' onClick={onClickSignUp}>
                <span className='fs-6'>
                  <small>Not a member yet?</small>
                </span>
              </button>
            </span>
            <span>
              <button type='button' className='btn p-0' onClick={onClickSignUp}>
                <span className='fs-6'>
                  <small>Sign up</small>
                </span>
              </button>
            </span>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default Login;
