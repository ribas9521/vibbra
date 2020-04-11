import React from 'react';
const Item = ({ title, subTitle, photos, buttonText, index }) => {
  return (
    <div
      className={`item ${index === 1 ? 'center' : null}`}
      data-marker={index}
    >
      <img
        src={photos.lg}
        alt="Background"
        className="background hidden-xs hidden-sm"
      />
      <img src={photos.sm} alt="Background" className="background visible-sm" />
      <img src={photos.xs} alt="Background" className="background visible-xs" />

      <div className="content">
        <div className="outside-content">
          <div className="inside-content">
            <div className="container align-left">
              <h1 className="h3 colorful blue hidden-xs">{subTitle}</h1>

              <hr className="offset-sm" />
              <h2 className="h1 lg upp colorful blue">{title}</h2>
              <hr className="offset-md" />
              <hr className="offset-md" />
              <a
                href="./store/"
                rel="nofollow"
                className="btn btn-primary btn-lg black item-link"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
