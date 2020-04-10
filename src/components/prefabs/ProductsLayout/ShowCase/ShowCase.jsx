import React from 'react';
const ShowCase = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="h2 upp align-center"> Tablets</h2>
        <hr className="offset-lg" />

        <div className="row">
          <div className="col-sm-6 col-md-4 product">
            <div className="body">
              <a
                href="#favorites"
                className="favorites"
                data-favorite="inactive"
              >
                <i className="ion-ios-heart-outline"></i>
              </a>
              <a href="./">
                <img
                  src="assets/img/products/mi-pad-2.jpg"
                  alt="Xiamomi Mi Pad 2"
                />
              </a>

              <div className="content align-center">
                <p className="price">$899.99</p>
                <h2 className="h3">Mi Pad 2</h2>
                <hr className="offset-sm" />

                <button className="btn btn-link">
                  {' '}
                  <i className="ion-android-open"></i> Details
                </button>
                <button className="btn btn-primary btn-sm rounded">
                  {' '}
                  <i className="ion-bag"></i> Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 product">
            <div className="body">
              <a
                href="#favorites"
                className="favorites"
                data-favorite="inactive"
              >
                <i className="ion-ios-heart-outline"></i>
              </a>
              <a href="./">
                <img
                  src="assets/img/products/ipad-air.jpg"
                  alt="Apple iPad Air"
                />
              </a>

              <div className="content align-center">
                <p className="price">$1099.99</p>
                <h2 className="h3">Apple iPad Air</h2>
                <hr className="offset-sm" />

                <button className="btn btn-link">
                  {' '}
                  <i className="ion-android-open"></i> Details
                </button>
                <button className="btn btn-primary btn-sm rounded">
                  {' '}
                  <i className="ion-bag"></i> Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 product">
            <div className="body">
              <a
                href="#favorites"
                className="favorites"
                data-favorite="inactive"
              >
                <i className="ion-ios-heart-outline"></i>
              </a>
              <a href="./">
                <img
                  src="assets/img/products/asus-transformer.jpg"
                  alt="Asus Transformer"
                />
              </a>

              <div className="content align-center">
                <p className="price">$987.99</p>
                <h2 className="h3">Asus Transformer</h2>
                <hr className="offset-sm" />

                <button className="btn btn-link">
                  {' '}
                  <i className="ion-android-open"></i> Details
                </button>
                <button className="btn btn-primary btn-sm rounded">
                  {' '}
                  <i className="ion-bag"></i> Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 product visible-sm">
            <div className="body">
              <a
                href="#favorites"
                className="favorites"
                data-favorite="inactive"
              >
                <i className="ion-ios-heart-outline"></i>
              </a>
              <a href="./">
                <img src="assets/img/products/ipad-mini.jpg" alt="iPad Mini" />
              </a>

              <div className="content align-center">
                <p className="price">$399.99</p>
                <h2 className="h3">iPad Mini</h2>
                <hr className="offset-sm" />

                <button className="btn btn-link">
                  {' '}
                  <i className="ion-android-open"></i> Details
                </button>
                <button className="btn btn-primary btn-sm rounded">
                  {' '}
                  <i className="ion-bag"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="align-right align-center-xs">
          <hr className="offset-sm" />
          <a href="./store/">
            {' '}
            <h5 className="upp">View all tablets </h5>{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
