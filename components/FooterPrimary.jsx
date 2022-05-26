import React from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import ContainerPrimary from './Container';
// logo

const FooterPrimary = () => {
  return (
    <footer>
      {/* Newsletter  */}

      {/* <ContainerPrimary>
        <div
          className='p-5 bg-cover bg-black bg-opacity-25 text-white mb-5'
          style={{
            backgroundImage: `url(/assets/images/banners/banner-4.jpg)`,
          }}
        >
          <div className='row justify-content-lg-between align-items-center gy-4 py-4'>
            <div className='col-12 col-md-6 col-lg-5'>
              <div>
                <h3 className='mb-0'>
                  Subscribe to our newsletter and receive exclusive offers every
                  week
                </h3>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-5'>
              <div>
                <form noValidate>
                  <div className='d-flex'>
                    <div className='vstack me-3'>
                      <input
                        type='text'
                        name='subscribe'
                        id='subscribe'
                        placeholder='Enter your email'
                        className='form-control shadow-sm rounded-pill py-3 px-4'
                      />
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='btn btn-primary rounded-pill text-uppercase py-3 px-4'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContainerPrimary> */}
      {/* /Newsletter  */}

      {/* Footer Two */}
      <div className='bg-white py-4'>
        <ContainerPrimary>
          <div>
            <div className='row gy-4'>
              <div className='col-12 col-lg-5'>
                <ul className='nav flex-column'>
                  <li className='mb-4'>
                    <Link href='/'>
                      <a className='logo bg-black rounded p-1'>
                        <img
                          className='d-block h-100 w-100'
                          src='/assets/images/logo.webp'
                          alt='...'
                        />
                      </a>
                    </Link>
                  </li>
                  <li className='mb-3'>
                    <p className='text-black-50'>
                      House My Brand designs clothing for the young, the old &
                      everyone in between – but most importantly, for the
                      fashionable
                    </p>
                  </li>
                  <li>
                    <ul className='nav opacity-75 gap-3'>
                      <li>
                        <a
                          href='http://facebook.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='mdi mdi-24px mdi-facebook-box' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='http://facebook.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='mdi mdi-24px mdi-twitter' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='http://facebook.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='mdi mdi-24px mdi-instagram' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='http://facebook.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='mdi mdi-24px mdi-linkedin-box' />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='col'>
                <ul className='nav flex-column gap-3'>
                  <li>
                    <h6>Shopping online</h6>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Order Status</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Shipping and Delivery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Returns</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Payment Options</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col'>
                <ul className='nav flex-column gap-3'>
                  <li>
                    <h6>Information</h6>
                  </li>
                  <li>
                    <NavLink href='/terms/AboutPage'>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink href='/terms/PrivacyPolicy'>
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <Link href='/terms/ShippingPolicy'>Shipping Policy</Link>
                  </li>
                </ul>
              </div>
              <div className='col'>
                <ul className='nav flex-column gap-3'>
                  <li>
                    <h6>Contact</h6>
                  </li>
                  <li>
                    <a href='mailto:store@uikit.com'>store@uikit.com</a>
                  </li>
                  <li>
                    <a href='tel:+1131138138'>Hotline: +1 131 138 138</a>
                  </li>
                  <li>
                    <a
                      rel='noreferrer'
                      href="https://maps.google.com?daddr=Ali's Boutique Jhelum"
                      target='_blank'
                    >
                      Directions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerPrimary>
      </div>
      {/* /Footer*/}
      <div className='bg-white border-top py-3'>
        <div className='text-center text-black-50'>
          <span>© 2022, Alis Boutique Jhelum.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrimary;
