import React from 'react';
import ButtonWithIcon from '../../../components/ButtonWithIcon';

const ProfileSection = () => {
  const [edit, setEdit] = React.useState(false);

  const list = [
    { title: 'Phone', value: '+352-987654321', edit: false },
    { title: 'e-Mail', value: 'Julia@gmail.com', edit: false },
    { title: 'Insured', value: 'Yes', edit: false },
    {
      title: 'Address',
      value: '25, rue Jean, Luxembourg, Luxembourg L-1283',
      edit: false,
    },
  ];

  return (
    <div className='px-0 col-12 col-md-12 col-lg-9 col-xl-8 col-xxl-7 mx-auto'>
      <div className='row mx-0'>
        <div className='col-7 col-sm-4 col-md-3 px-0'>
          <div className='d-flex flex-column'>
            <div className='height-size position-relative'>
              {edit ? (
                <div className='upload-image h-100'>
                  <label
                    className='btn hover-scale-small p-0 h-100 w-100'
                    htmlFor='img'
                  >
                    <img
                      className='d-block h-100 w-100 rounded-lg position-relative bg-primary object-cover opacity-75'
                      src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=580&q=80'
                      alt='...'
                    />
                    <input type='file' id='img' name='img' accept='image/*' />
                  </label>
                </div>
              ) : (
                <>
                  <div className='placeholder placeholder-wave position-absolute start-0 h-100 w-100 rounded-lg' />
                  <img
                    className='d-block h-100 w-100 rounded-lg position-relative object-cover'
                    src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=580&q=80'
                    alt='...'
                  />
                </>
              )}
            </div>
            <div className='mb-4 mb-md-0 mt-md-4 order-first order-md-last'>
              <ul className='nav flex-column'>
                <li className='mb-2'>
                  <ButtonWithIcon
                    onClick={() => setEdit(!edit)}
                    title='Edit profile'
                    icon='mdi-open-in-new'
                  />
                </li>
                {/* <li className='mb-2'>
                  <ButtonWithIcon
                    link={true}
                    href='/profile-statistics'
                    title='Statistics'
                    icon='mdi-eye-outline'
                  />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='px-0 col-12 col-md mt-2 mt-md-0 ms-md-4'>
          <form noValidate className='h-100 d-flex flex-column'>
            <div className='d-flex align-items-center mb-2'>
              {edit ? (
                <input
                  type='text'
                  className='form-control form-control-lg me-3 fw-500'
                  defaultValue='Alexandria'
                />
              ) : (
                <h4 className='mb-0 fw-500 text-capitalize me-2'>Alexandria</h4>
              )}

              {edit && (
                <div className='ms-auto'>
                  {' '}
                  <button
                    onClick={() => setEdit(!edit)}
                    type='submit'
                    className='btn btn-primary shadow-1'
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            <ul className='nav flex-column text-capitalize mb-4'>
              <li className='mb-1'>
                <span>Joined on 13, July2020</span>
              </li>
              {list.map((item) => (
                <li
                  key={item.title}
                  className='mb-1 d-flex align-items-baseline'
                >
                  <span className='flex-shrink-0 fw-500'>{item.title}</span>
                  <span className='mx-1'>:</span>
                  {edit ? (
                    <input
                      type='text'
                      className='form-control form-control-sm mb-2'
                      defaultValue={item.value}
                    />
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <div>
              <h5 className='mb-1'>Description:</h5>
              {edit ? (
                <textarea
                  rows='4'
                  className='form-control form-control-sm'
                  defaultValue='I am friendly, helpful and polite, have a good sense of
                humour. I am able to work independently in busy environments
                and also within a team setting.'
                />
              ) : (
                <div className='small'>
                  I am friendly, helpful and polite, have a good sense of
                  humour. I am able to work independently in busy environments
                  and also within a team setting.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
