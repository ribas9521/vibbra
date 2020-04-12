import React from 'react';

const Item = ({ photo, index }) => {
  return (
    <div
      className={`item ${index === 1 ? 'center' : null}`}
      data-marker={index + 1}
    >
      <img src={photo} alt="Microsoft Surface Studio" className="background" />
    </div>
  );
};
const renderItems = ({ photos }) =>
  photos.map((p, i) => <Item index={i} key={i} photo={p.src} />);

const renderMarkers = ({ photos }) =>
  photos.map((p, i) => <li key={i} data-marker={i + 1}></li>);

const ProductGallery = ({ photos }) => {
  return (
    <div className="col-sm-7 col-md-7 white no-padding">
      <div
        className="carousel-product"
        data-count={photos.length}
        data-current="1"
      >
        <div className="items">
          <button className="btn btn-control" data-direction="right">
            {' '}
            <i className="ion-ios-arrow-right"></i>
          </button>
          <button className="btn btn-control" data-direction="left">
            {' '}
            <i className="ion-ios-arrow-left"></i>
          </button>
          {renderItems({ photos })}
        </div>

        <ul className="markers">{renderMarkers({ photos })}</ul>
      </div>
    </div>
  );
};

export default ProductGallery;
