import React from 'react';
import { toReais } from '../../../helpers';

const ProductTitle = ({ value, description }) => {
  return (
    <div class="col-sm-5 col-md-5 no-padding-xs">
      <div class="caption">
        <img
          src="../assets/img/brands/microsoft.png"
          alt="Microsoft"
          class="brand hidden-xs hidden-sm"
        />
        <h1>{description}</h1>

        <p> &middot; OS Windows™ 10</p>
        <p> &middot; 28 Inch PixelSense™ Display</p>
        <p> &middot; Intel Core i5/i7</p>
        <hr class="offset-md hidden-sm" />
        <hr class="offset-sm visible-sm" />
        <hr class="offset-xs visible-sm" />

        <p class="price">{toReais(value)}</p>
        <p class="price through">{toReais(value * 1.2)}</p>
        <hr class="offset-md" />

        <button class="btn btn-primary rounded">
          {' '}
          <i class="ion-bag"></i> Add to cart
        </button>
        <button class="btn btn-link">
          {' '}
          <i class="ion-ios-heart"></i> See later{' '}
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
