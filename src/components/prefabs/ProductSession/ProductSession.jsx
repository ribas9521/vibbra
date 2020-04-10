import React, { Component } from 'react';
import { ProductShow, Loader } from '../../ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProducts } from './actions';

class ProductSession extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.productist = this.productist.bind(this);
  }

  componentDidMount() {
    const { loadProducts } = this.props;
    this.setState({ isLoading: true });
    loadProducts();
  }
  /**
   * After loading info from API i set a timeout of 1,5s
   * The script wich organizes this the screen needs some time
   * to to it's job, and the user does not need to see it
   */
  componentDidUpdate(prevProps) {
    if (this.props.productsLoading !== prevProps.productsLoading) {
      setTimeout(() => this.setState({ isLoading: false }), 1500);
    }
  }

  productist() {
    const { products } = this.props;
    const { isLoading } = this.state;
    return products.map((p, i) => (
      <ProductShow
        key={`p${i}`}
        image={p.photos && p.photos.length && p.photos[0].src}
        description={p.description}
        value={p.value}
        isLoading={isLoading}
      />
    ));
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        {this.productist()}
        {isLoading && <Loader />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productsLoading: state.products.productsLoading,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductSession);
