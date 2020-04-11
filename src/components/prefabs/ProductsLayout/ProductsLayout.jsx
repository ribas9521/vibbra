import React, { Component } from 'react';
import Modern from './Modern/Modern';
import ShowCase from './ShowCase/ShowCase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './actions';

class ProductsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { load } = this.props;
    load();
  }
  render() {
    const { products } = this.props;
    return (
      <>
        <Modern products={products.slice(0, 4)} />
        <hr className="offset-lg" />
        <hr className="offset-md" />
        <ShowCase products={products.slice(4, products.length)} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      load,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductsLayout);
