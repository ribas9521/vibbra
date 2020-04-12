import React from 'react';
import { toReais } from '../../../helpers';

const ProductTitle = ({ value, description }) => {
  return (
    <div className="col-sm-5 col-md-5 no-padding-xs">
      <div className="caption">
        <img
          src="../assets/img/brands/microsoft.png"
          alt="Microsoft"
          className="brand hidden-xs hidden-sm"
        />
        <h1>{description}</h1>

        <p> &middot; OS Windows™ 10</p>
        <p> &middot; 28 Inch PixelSense™ Display</p>
        <p> &middot; Intel Core i5/i7</p>
        <hr className="offset-md hidden-sm" />
        <hr className="offset-sm visible-sm" />
        <hr className="offset-xs visible-sm" />

        <p className="price">{toReais(value)}</p>
        <p className="price through">{toReais(value * 1.2)}</p>
        <hr className="offset-md" />

        <button className="btn btn-primary rounded">
          {' '}
          <i className="ion-bag"></i> Add to cart
        </button>
        <button className="btn btn-link">
          {' '}
          <i className="ion-ios-heart"></i> See later{' '}
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
