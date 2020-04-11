import React, { Component } from 'react';
import Modern from './Modern/Modern';
import ShowCase from './ShowCase/ShowCase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './actions';
import { geolocated } from 'react-geolocated';

class ProductsLayout extends Component {
  componentDidMount() {
    const { load } = this.props;
    load(this.props.coords);
  }
  /**If user activate location
   * the products will be refreshed to match his location
   */
  componentDidUpdate(prevProps) {
    const { load } = this.props;
    if (this.props.coords !== prevProps.coords) {
      load(this.props.coords);
    }
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
ProductsLayout = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(ProductsLayout);

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
