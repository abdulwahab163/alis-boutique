import React, { useState } from 'react';
import { Dropdown, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { NavLink } from './NavLink';
import SearchComponent from './SearchComponent';
import MenuBtn from './MenuBtn';
// logo
import { ReactComponent as Logo } from '../assets/logo.svg';
import AuthModal from '../pages/auth/AuthModal';
import SignIn from '../pages/auth/SignIn';
import ForgotPassword from '../pages/auth/ForgotPassword';
import SignUp from '../pages/auth/SignUp';
import Image from 'next/image';

const NavbarPrimary = () => {
  const [show, setShow] = useState(false);
  const [SignInModal, setSignInModal] = useState(false);
  const [SignUpModal, setSignUpModal] = useState(false);
  const [ForgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [login, setLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignInClose = () => setSignInModal(false);
  const handleSignInShow = () => {
    setSignInModal(true);
    setSignUpModal(false);
  };

  const handleSignUpClose = () => setSignUpModal(false);
  const handleSignUpShow = () => {
    setSignInModal(false);
    setSignUpModal(true);
  };

  const handleForgotPasswordClose = () => setForgotPasswordModal(false);
  const handleForgotPasswordShow = () => {
    setSignUpModal(false);
    setSignInModal(false);
    setForgotPasswordModal(true);
  };

  const menuList = [
    {
      name: 'men',
      subCategories: [
        { item: 't-shirts' },
        { item: 'jeans' },
        { item: 'jackets' },
        { item: 'shirts' },
      ],
      categories: [
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_winter.jpg?v=14784798289660087871',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_bottoms.jpg?v=11418930558842479379',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_men_menswear.jpg?v=3181110610753508563',
        },
        {
          type: 'shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_girls_girls-bottom.jpg?v=4312476191526990878',
        },
      ],
    },
    {
      name: 'women',
      subCategories: [
        { item: 't-shirts' },
        { item: 'jackets' },
        { item: 'jeans' },
        { item: 'shirts' },
        { item: 'dresses' },
      ],
      categories: [
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_winter.jpg?v=14784798289660087871',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_bottoms.jpg?v=11418930558842479379',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_men_menswear.jpg?v=3181110610753508563',
        },
        {
          type: 'shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_girls_girls-bottom.jpg?v=4312476191526990878',
        },
        {
          type: 'dresses',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_accessories_women-accessories.jpg?v=1640174522',
        },
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_accessories.jpg?v=17770260101014731217',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_accessories.jpg?v=13853371350018398903',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_men.jpg?v=9161934998420516517',
        },
      ],
    },
    {
      name: 'boys',
      subCategories: [
        { item: 'jeans' },
        { item: 't-shirts' },
        { item: 'shirts' },
      ],
      categories: [
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_men_menswear.jpg?v=3181110610753508563',
        },
        {
          type: 'shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_girls_girls-bottom.jpg?v=4312476191526990878',
        },
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_accessories.jpg?v=17770260101014731217',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_accessories.jpg?v=13853371350018398903',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_men.jpg?v=9161934998420516517',
        },
      ],
    },
    {
      name: 'girls',
      subCategories: [{ item: 't-shirts' }, { item: 'jeans' }],
      categories: [
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_bottoms.jpg?v=11418930558842479379',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_men_menswear.jpg?v=3181110610753508563',
        },
        {
          type: 'shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_girls_girls-bottom.jpg?v=4312476191526990878',
        },
        {
          type: 'dresses',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_accessories_women-accessories.jpg?v=1640174522',
        },
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_accessories.jpg?v=17770260101014731217',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_accessories.jpg?v=13853371350018398903',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_sale_men.jpg?v=9161934998420516517',
        },
      ],
    },
    {
      name: 'sale',
      subCategories: [
        { item: 't-shirts' },
        { item: 'jeans' },
        { item: 'jackets' },
        { item: 'shirts' },
      ],
      categories: [
        {
          type: 't-shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_winter.jpg?v=14784798289660087871',
        },
        {
          type: 'jackets',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_women_bottoms.jpg?v=11418930558842479379',
        },
        {
          type: 'jeans',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_men_menswear.jpg?v=3181110610753508563',
        },
        {
          type: 'shirts',
          typeImage:
            'https://cdn.shopify.com/s/files/1/2635/3244/files/main_menu_girls_girls-bottom.jpg?v=4312476191526990878',
        },
      ],
    },
  ];

  return (
    <>
      {/* Auth Modal */}
      <AuthModal show={SignInModal} onHide={handleSignInClose}>
        <SignIn
          onClickSignUp={handleSignUpShow}
          onClickForgotPassword={handleForgotPasswordShow}
        />
      </AuthModal>
      <AuthModal show={SignUpModal} onHide={handleSignUpClose}>
        <SignUp onClickSignIn={handleSignInShow} />
      </AuthModal>
      <AuthModal show={ForgotPasswordModal} onHide={handleForgotPasswordClose}>
        <ForgotPassword />
      </AuthModal>
      {/* /Auth Modal */}

      <nav className='sticky-top top-0'>
        {/* Desktop row 1 */}
        <div className='bg-black pt-1 px-3 px-lg-4'>
          <div className='d-flex flex-wrap align-items-center'>
            <div>
              <ul className='nav align-items-center'>
                <li className='nav-item d-md-none'>
                  <button
                    type='button'
                    className='btn link-white p-0 cursor-pointer'
                    // onClick={handleShow}
                  >
                    <i className='mdi mdi-24px mdi-text' />
                  </button>
                </li>
              </ul>
            </div>
            <div className='logo-container me-auto me-md-0'>
              <ul className='nav align-items-center'>
                <li className='nav-item'>
                  <a
                    href='https://api.whatsapp.com/send/?phone=923104018841&text=https%3A%2F%2Fwww.limelight.pk%2F&app_absent=0'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link-white px-2 cursor-pointer'
                  >
                    <i className='mdi mdi-24px mdi-whatsapp' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='tel:+92311-1222681'
                    className='link-white px-2 cursor-pointer'
                  >
                    <i className='mdi mdi-24px mdi-phone' />
                  </a>
                </li>
                <li className='nav-item ms-5 ms-sm-0'>
                  <Link href='/'>
                    <a className='d-block logo bg-black rounded p-1 position-relative'>
                      <Image
                        src={`/assets/images/logo.webp`}
                        alt='..'
                        layout='fill'
                        // objectFit='cover'
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* SearchComponent */}
            <div className='d-none d-md-flex align-items-center mx-auto'>
              <ul className='nav align-items-center'>
                <li className='nav-item'>
                  <SearchComponent />
                </li>
              </ul>
            </div>

            {/* cart */}
            <div className='d-flex align-items-center'>
              <ul className='nav align-items-center ms-lg-5 ps-lg-5'>
                <li className='nav-item d-none d-md-block'>
                  <div className='px-3'>
                    <select
                      id='currencies'
                      className='form-select form-select-sm bg-black text-white arrow-white'
                      name='currencies'
                    >
                      <option value='PKR' selected='selected'>
                        PKR
                      </option>

                      <option value='GBP'>GBP</option>

                      <option value='USD'>USD</option>
                    </select>
                  </div>
                </li>
                <li className='nav-item'>
                  <NavLink
                    href='/cart/CartPage'
                    className='link-white px-3 cursor-pointer position-relative'
                  >
                    <i className='mdi mdi-24px mdi-cart-outline' />
                    <span className='badge rounded-circle bg-danger text-white position-absolute end-0 m-1'>
                      <small>1</small>
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Search row 3 */}
        <div className='bg-gray w-100 d-md-none py-1 px-3'>
          <ul className='nav justify-content-center align-items-center'>
            {/* <li className='nav-item py-1 py-md-0'>
              <a
                href='https://api.whatsapp.com/send/?phone=923104018841&text=https%3A%2F%2Fwww.limelight.pk%2F&app_absent=0'
                target='_blank'
                rel='noopener noreferrer'
                className='px-1 cursor-pointer'
              >
                <i className='mdi fs-4 mdi-whatsapp' />
              </a>
            </li>
            <li className='nav-item py-1 py-md-0'>
              <a href='tel:+92311-1222681' className='px-1 cursor-pointer'>
                <i className='mdi fs-4 mdi-phone' />
              </a>
            </li> */}
            <li className='nav-item py-1 py-md-0'>
              <li className='nav-item py-1 py-md-0'>
                {login ? (
                  <Dropdown className='dropdown-remove-arrow dropdown-sign'>
                    <Dropdown.Toggle variant='...'>
                      <button className='btn p-0 btn-icon border border-2 rounded-circle'>
                        <span className='btn-icon-1 rounded-circle position-relative'>
                          <Image
                            src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=580&q=80'
                            alt='..'
                            layout='fill'
                            className='rounded-circle'
                          />
                        </span>
                      </button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='shadow-1 rounded-md'>
                      <Dropdown.Item as={NavLink} href='/profile/ProfilePage'>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} href='/settings'>
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => setLogin(!login)}>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <a onClick={handleSignInShow} className='px-1 cursor-pointer'>
                    <i className='mdi mdi-account-outline fs-4'></i>
                  </a>
                )}
              </li>
            </li>
            <li className='nav-item py-1 py-md-0'>
              <SearchComponent />
            </li>
            <li className='nav-item py-1 py-md-0'>
              <div className='px-1'>
                <select
                  id='currencies'
                  className='form-select form-select-sm bg-transparent border-0'
                  name='currencies'
                >
                  <option value='PKR' selected='selected'>
                    PKR
                  </option>

                  <option value='GBP'>GBP</option>

                  <option value='USD'>USD</option>
                </select>
              </div>
            </li>
            <li className='nav-item py-1 py-md-0'>
              <Link href='/cart/CheckoutPage'>
                <a className='d-flex align-items-center'>
                  <span className='text-uppercase small'>Checkout</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* /Mobile Search */}
        {/* Desktop row 2 */}
        <div className='bg-light py-1 px-3 px-lg-4 position-relative'>
          <div className='d-flex align-items-center'>
            <div className='me-auto'>
              <ul className='nav'>
                <li className='nav-item d-none d-md-flex'>
                  {login ? (
                    <Dropdown className='dropdown-remove-arrow dropdown-sign'>
                      <Dropdown.Toggle variant='...'>
                        <button className='btn p-0 btn-icon border border-2 rounded-circle'>
                          <span className='btn-icon-1 rounded-circle position-relative'>
                            <Image
                              src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=580&q=80'
                              alt='..'
                              layout='fill'
                              className='rounded-circle'
                            />
                          </span>
                        </button>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='shadow-1 rounded-md'>
                        <Dropdown.Item as={NavLink} href='/profile/ProfilePage'>
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => setLogin(!login)}>
                          Log Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <button
                      type='button'
                      className='btn p-0'
                      onClick={handleSignInShow}
                    >
                      <i className='mdi mdi-account-outline fs-3'></i>
                    </button>
                  )}
                </li>
              </ul>
            </div>
            {/* Desktop list */}
            <div className='me-auto'>
              <ul className='nav justify-content-center align-items-center'>
                {menuList.map((item) => (
                  <li key={'menu'} className='nav-item'>
                    <MenuBtn
                      name={item.name}
                      categories={item.categories}
                      subCategories={item.subCategories}
                    />
                  </li>
                ))}
              </ul>
            </div>
            {/* === */}
            <div className='d-none d-md-flex'>
              <ul className='nav'>
                <li className='nav-item'>
                  <Link href='/cart/CheckoutPage'>
                    <a className='d-flex align-items-center'>
                      {' '}
                      <span className='text-uppercase me-1'>Checkout</span>
                      <i className='mdi mdi-exit-to-app fs-5'></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Desktop */}

        {/* SidebarMobile */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className='bg-black border-bottom px-4'>
            <Offcanvas.Title className='w-100 d-flex align-items-center justify-content-between'>
              <div className='logo-container'>
                <Link href='/' className='d-flex align-items-end link-white'>
                  <Logo />
                  <span className='ms-3 h4 mb-0'>E-Shop</span>
                </Link>
              </div>
              <button
                onClick={handleClose}
                type='button'
                className='btn btn-close btn-close-white'
              ></button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='bg-gray'>
            <ul className='nav flex-column'>
              {menuList.map((item) => (
                <li key={'menu'} className='nav-item'>
                  <div className='d-flex align-items-center'>
                    <i className='mdi mdi-18px mdi-amazon-alexa' />
                    <MenuBtn name={item.name} />
                  </div>
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        {/* /SidebarMobile */}
      </nav>
    </>
  );
};

export default NavbarPrimary;