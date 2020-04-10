/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { images } from '../../../assets';
// const { logo, cart, favorites, search } = images;
const SideBar = () => {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="./">
              {' '}
              Vibbra Store{' '}
            </a>
            <a
              className="navbar-brand pull-right hidden-sm hidden-md hidden-lg"
              href="#open-cart"
            >
              {' '}
              <i className="ion-bag"></i> 7{' '}
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./store/">Store</a>
              </li>
              <li>
                <a href="./blog/">Blog</a>
              </li>
              <li>
                <a href="./contacts/">Contacts</a>
              </li>
              <li className="dropdown">
                <a
                  href="./store/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More <i className="ion-android-arrow-dropdown"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="./store/product.html">Product</a>
                  </li>
                  <li>
                    <a href="./about/">About Us</a>
                  </li>
                  <li>
                    <a href="./checkout/">Checkout</a>
                  </li>
                  <li>
                    <a href="./faq/">FAQ</a>
                  </li>
                  <li>
                    <a href="./gallery/">Gallery</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Variations</li>
                  <li>
                    <a href="./blog/item-photo.html">Article Photo</a>
                  </li>
                  <li>
                    <a href="./blog/item-video.html">Article Video</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!--/.nav-collapse --> */}

          <div className="search hidden-xs" data-style="hidden">
            <div className="input">
              <button type="button">
                <i className="ion-ios-search"></i>
              </button>

              <input
                type="text"
                name="search"
                value=""
                placeholder="Type here..."
              />
            </div>
          </div>
        </div>
        {/* <!--/.container-fluid --> */}
      </nav>
    </>
  );
};

export default SideBar;
