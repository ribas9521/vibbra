/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { images } from '../../../assets';
const { logo, cart, favorites, search } = images;
const SideBar = () => {
  return (
    <>
      <div className="mobile-nav">
        {/* <!-- Navbar Brand --> */}
        <div className="amado-navbar-brand">
          <a href="index.html">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* <!-- Navbar Toggler --> */}
        <div className="amado-navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <header className="header-area clearfix">
        {/* <!-- Close Icon --> */}
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        {/* <!-- Logo --> */}
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* <!-- Amado Nav --> */}
        <nav className="amado-nav">
          <ul>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="product-details.html">Product</a>
            </li>
            <li>
              <a href="cart.html">Cart</a>
            </li>
            <li>
              <a href="checkout.html">Checkout</a>
            </li>
          </ul>
        </nav>
        {/* <!-- Button Group --> */}
        <div className="amado-btn-group mt-30 mb-100">
          <a href="#" className="btn amado-btn mb-15">
            %Discount%
          </a>
          <a href="#" className="btn amado-btn active">
            New this week
          </a>
        </div>
        {/* <!-- Cart Menu --> */}
        <div className="cart-fav-search mb-100">
          <a href="cart.html" className="cart-nav">
            <img src={cart} alt="" /> Cart <span>(0)</span>
          </a>
          <a href="#" className="fav-nav">
            <img src={favorites} alt="" /> Favourite
          </a>
          <a href="#" className="search-nav">
            <img src={search} alt="" /> Search
          </a>
        </div>
        {/* <!-- Social Button --> */}
        <div className="social-info d-flex justify-content-between">
          <a href="#">
            <i className="fa fa-pinterest" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default SideBar;
