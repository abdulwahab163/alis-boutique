import React from 'react';

const ForgotPassword = () => {
  return (
    <form noValidate>
      <ul className='nav flex-column gap-4'>
        <li>
          <div className='text-center'>
            <h5 className='mb-2 fw-normal'>Forgot your password?</h5>
            <p className='mb-0 text-black-50'>
              <small>
                {' '}
                Enter your email or phone number and recover your account
              </small>
            </p>
          </div>
        </li>
        <li>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control shadow-sm'
              placeholder='E-mail'
            />
          </div>
        </li>
        <li>
          <div>
            <button type='submit' className='btn btn-primary w-100'>
              Reset password
            </button>
          </div>
        </li>
        {/* <li>
          <div className='d-flex justify-content-center gap-4'>
            <span>
              <Link to onClick={onClickSignIn}>
                <span className='fs-6'>
                  <small>Are you already a member?</small>
                </span>
              </Link>
            </span>
            <span>
              <Link to onClick={onClickSignUp}>
                <span className='fs-6'>
                  <small>Not a member yet?</small>
                </span>
              </Link>
            </span>
          </div>
        </li> */}
      </ul>
    </form>
  );
};

export default ForgotPassword;
