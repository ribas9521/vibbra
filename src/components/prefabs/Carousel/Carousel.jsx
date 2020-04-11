import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './actions';
import Item from './Item';
import './style.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderItems = this.renderItems.bind(this);
  }
  componentDidMount() {
    const { load } = this.props;
    load();
  }
  renderItems() {
    const { featured } = this.props;
    return featured.map((f, i) => (
      <Item
        key={i}
        title={f.title}
        subTitle={f.sub_title}
        photos={f.photos}
        buttonText={f.button_text}
        index={i + 1}
      />
    ));
  }
  render() {
    return (
      <header>
        <div className="carousel" data-count="3" data-current="1">
          <div className="items">
            <button className="btn btn-control" data-direction="right">
              <i className="ion-ios-arrow-right"></i>
            </button>
            <button className="btn btn-control" data-direction="left">
              <i className="ion-ios-arrow-left"></i>
            </button>
            {this.renderItems()}
          </div>

          <ul className="markers">
            <li data-marker="1" data-style="white" className="active"></li>
            <li data-marker="2" data-style="white"></li>
            <li data-marker="3" data-style="white"></li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  featured: state.carousel.featured,
  loading: state.carousel.loading,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      load,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
