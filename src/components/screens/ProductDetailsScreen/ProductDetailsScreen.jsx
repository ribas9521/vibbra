import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadDetails, loadComments } from './actions';

import {
  ProductGallery,
  ProductTitle,
  ProductDetails,
  Comments,
} from '../../prefabs';

class ProducDetaiscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { loadDetails, loadComments } = this.props;
    loadDetails();
    loadComments();
  }
  render() {
    const { details, comments } = this.props;
    return (
      <div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        <hr className="offset-lg hidden-xs" />
        <section className="product">
          <div className="container">
            <div className="row">
              <ProductGallery photos={details.photos} />
              <ProductTitle
                value={details.value}
                description={details.description}
              />
            </div>
            <hr className="offset-sm hidden-xs" />
            <div className="row">
              <ProductDetails />
              <Comments comments={comments} />
            </div>
          </div>
        </section>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        <hr className="offset-lg hidden-xs" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  details: state.productDetails.details,
  loading: state.productDetails.loading,
  comments: state.productDetails.comments,
  commentsLoading: state.productDetails.commentsLoading,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadDetails,
      loadComments,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProducDetaiscreen);
