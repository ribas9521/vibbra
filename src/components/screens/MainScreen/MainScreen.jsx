import React, { Component } from 'react';
import { Carousel, MiniCart, ProductsLayout } from '../../prefabs/';
// import { LoginScreen } from '..';
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MiniCart />
        <Carousel />
        <hr className="offset-lg" />
        <hr className="offset-lg" />

        <ProductsLayout />

        <hr className="offset-lg" />
        <hr className="offset-sm" />

        {/* <LoginScreen /> */}
      </>
    );
  }
}

export default MainScreen;
