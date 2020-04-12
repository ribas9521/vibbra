import React from 'react';
const ProductDetails = () => {
  return (
    <div className="col-sm-7 white sm-padding">
      <hr className="offset-sm visible-xs" />

      <h2 className="h1">Microsoft Surface Studio</h2>
      <br />

      <p>
        Visualize ideas as you paint, edit, and design. Let the 10-bit color
        depth and strikingly large 28” display pull you in from across the room.
        Or, lose yourself in the creative details of your work. Surface Studio
        is designed with a Zero Gravity Hinge that moves the display
        weightlessly from an upright angle, down into Studio Mode with one hand.
      </p>
      <br />

      <h2>Product specifications</h2>
      <br />

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Operating system</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>Windows 10™</p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Display</label>{' '}
        </div>
        <div className="col-sm-8">
          <p>
            Screen: 28" PixelSense Display
            <br />
            Resolution: 4500 x 3000 (192 DPI)
            <br />
            Color settings: sRGB, DCI-P3, and Vivid color profiles, individually
            color calibrated
            <br />
            Touch: 10-point multi-touch
          </p>
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Processor</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>Quad-core 6th Gen Intel Core i5 or i7</p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Processor technology</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>Intel Turbo Boost Technology</p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Graphics</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>
            NVIDIA GeForce GTX 965M 2GB GPU GDDR5 memory or NVIDIA GeForce GTX
            980M 4GB GPU GDDR5 memory
          </p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Memory</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>8GB, 16GB, or 32GB RAM</p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Hard drive</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>
            Rapid hybrid drive options: 64GB SSD with 1TB HDD, 128GB SSD with
            1TB HDD, 128GB SSD with 2TB HDD
          </p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Wireless</label>{' '}
        </div>
        <div className="col-sm-8">
          <p>
            Wi-Fi: 802.11ac Wi-Fi wireless networking, IEEE 802.11 a/b/g/n
            compatible
            <br />
            Bluetooth: Bluetooth 4.0 wireless technology
            <br />
            Xbox Wireless built-in
          </p>
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Power supply</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>45 W AC power adapter</p>{' '}
        </div>
      </div>

      <div className="row specification">
        <div className="col-sm-4">
          {' '}
          <label>Battery</label>{' '}
        </div>
        <div className="col-sm-8">
          {' '}
          <p>3-cell, 36 Wh Li-ion</p>{' '}
        </div>
      </div>

      <hr className="offset-lg" />
    </div>
  );
};

export default ProductDetails;
