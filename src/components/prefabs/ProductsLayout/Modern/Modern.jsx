import React, { Component } from 'react';
import './style.css';
class Modern extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.img1 = React.createRef();
    this.img2 = React.createRef();
    this.img3 = React.createRef();
    this.img4 = React.createRef();
  }
  /**
   * had to do this trick beacause the static js function handle could'nt
   * handle this images
   */
  componentDidUpdate() {
    const { products } = this.props;
    if (products.length > 0) {
      this.img1.current.style.background = `url(${products[0].photos[0].src}) center center / cover no-repeat scroll`;
      this.img2.current.style.background = `url(${products[1].photos[0].src}) center center / cover no-repeat scroll`;
      this.img3.current.style.background = `url(${products[2].photos[0].src}) center center / cover no-repeat scroll`;
      this.img4.current.style.background = `url(${products[3].photos[0].src}) center center / cover no-repeat scroll`;
    }
  }
  getResumedDescription(description) {
    return description.split(' ').slice(0, 3).join(' ');
  }
  render() {
    const { products } = this.props;
    return (
      <div className="bars">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 no-padding padding-xs">
              <div ref={this.img1} className="bar medium">
                <h3 className="title">
                  {products.length &&
                    this.getResumedDescription(products[0].description)}
                </h3>

                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <a
                      href="./store/"
                      rel="nofollow"
                      className="btn btn-default black"
                    >
                      {' '}
                      Compre Agora{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="bar small" ref={this.img2}>
                <h3 className="title">
                  {products.length &&
                    this.getResumedDescription(products[1].description)}
                </h3>

                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <a
                      href="./store/"
                      rel="nofollow"
                      className="btn btn-primary black"
                    >
                      Compre Agora
                    </a>
                  </div>
                </div>
              </div>

              <hr className="offset-xs" />
              <hr className="offset-xs" />

              <div className="bar small" ref={this.img3}>
                <h3 className="title">
                  {products.length &&
                    this.getResumedDescription(products[2].description)}
                </h3>

                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <a
                      href="./store/"
                      rel="nofollow"
                      className="btn btn-primary black"
                    >
                      Compre Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 no-padding hidden-xs hidden-sm">
              <div className="bar medium" ref={this.img4}>
                <h3 className="title">
                  {products.length &&
                    this.getResumedDescription(products[3].description)}
                </h3>

                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <a
                      href="./store/"
                      rel="nofollow"
                      className="btn btn-primary black"
                    >
                      Compre Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modern;
