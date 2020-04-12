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
        <hr class="offset-lg" />
        <hr class="offset-lg" />
        <hr class="offset-lg hidden-xs" />
        <section class="product">
          <div class="container">
            <div class="row">
              <ProductGallery photos={details.photos} />
              <ProductTitle
                value={details.value}
                description={details.description}
              />
            </div>
            <hr class="offset-sm hidden-xs" />
            <div class="row">
              <ProductDetails />
              <Comments comments={comments} />
            </div>
          </div>
        </section>
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
