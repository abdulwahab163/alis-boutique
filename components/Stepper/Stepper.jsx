import React from 'react';
import './stepper.css';

const Stepper = () => {
  const [page, setPage] = React.useState(1);

  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goPrevPage() {
    setPage((page) => page - 1);
  }

  return (
    <section className='container h-100'>
      <div className='row gy-3'>
        <div className='col'>
          <div
            className='steps-container-v shadow p-4 rounded-lg position-sticky'
            style={{ top: '10rem' }}
          >
            <ul className='nav flex-column gap-5'>
              <li
                className={`mb-4 ${
                  page === 1 ? `active` : page === 2 ? `done` : ``
                }`}
              >
                <b
                  className={`${
                    page === 1 ? `active` : page === 2 ? `done` : ``
                  }`}
                />
                <div className='d-flex align-items-center'>
                  <span className='me-3'>01</span>
                  <div>
                    <div className='d-flex flex-column gap-1'>
                      <div className='text-uppercase font-monospace small'>
                        STEP 01
                      </div>
                      <div className='text-primary fw-bold'>File Upload</div>
                      {page === 1 ? (
                        <div className='text-warning small'>Active</div>
                      ) : page === 2 ? (
                        <div className='text-success small'>Completed ✔</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={`mb-4 ${
                  page === 1 ? `fall` : page === 2 ? `active` : ``
                }`}
              >
                <b
                  className={`${
                    page === 1 ? `fall` : page === 2 ? `active` : ``
                  }`}
                />
                <div className='d-flex align-items-center'>
                  <span className='me-3'>02</span>
                  <div>
                    <div className='d-flex flex-column gap-1'>
                      <div className='text-uppercase font-monospace small'>
                        STEP 02
                      </div>
                      <div className='text-primary fw-bold'>
                        Add/Update Courses
                      </div>
                      {page === 1 ? (
                        ''
                      ) : page === 2 ? (
                        <div className='text-warning small'>Active</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-md-12 col-lg-8 col-xxl-9 mt-4 mt-lg-0'>
          <div className='d-flex flex-column h-100 py-2'>
            {/* Pages */}
            {page === 1 && <h1>first page</h1>}
            {page === 2 && <h1>second page</h1>}
            {/* Buttons */}

            <div className='button-container mt-auto pt-3 d-flex flex-wrap gap-3'>
              <div className='flex-fill'>
                {page === 1 && (
                  <button
                    type='button'
                    disabled
                    className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                    onClick={goPrevPage}
                  >
                    <span>Prev</span>
                  </button>
                )}
                {page === 2 && (
                  <button
                    type='button'
                    className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                    onClick={goPrevPage}
                  >
                    <span>Prev</span>
                  </button>
                )}
              </div>

              <div>
                {page === 1 && (
                  <button
                    type='button'
                    className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                    onClick={goNextPage}
                  >
                    NextStep
                  </button>
                )}
                {page === 2 && (
                  <button
                    type='submit'
                    className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                  >
                    NextStep
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
