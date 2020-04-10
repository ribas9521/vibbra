import React, { Component } from 'react';
import { Carousel, MiniCart, Modern, ShowCase, Footer } from '../../prefabs/';

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

        <Modern />

        <hr className="offset-lg" />
        <hr className="offset-md" />

        <ShowCase />

        <hr className="offset-lg" />
        <hr className="offset-sm" />

        <Footer />
      </>
    );
  }
}

export default MainScreen;
