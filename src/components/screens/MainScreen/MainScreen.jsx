import React, { Component } from 'react';
import { SearchBar, ProductSession } from '../../prefabs/';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <SearchBar />
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix">
            <ProductSession />
          </div>
        </div>
      </>
    );
  }
}

export default MainScreen;
