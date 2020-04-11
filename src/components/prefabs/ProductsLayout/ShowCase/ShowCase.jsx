import React from 'react';
import Item from './Item';
const ShowCase = ({ products }) => {
  const renderItems = (products) =>
    products.map((p, i) => (
      <Item
        description={p.description}
        value={p.value}
        photo={p.photos[0].src}
      />
    ));

  return (
    <section className="products">
      <div className="container">
        <h2 className="h2 upp align-center"> Tablets</h2>
        <hr className="offset-lg" />

        <div className="row">{renderItems(products)}</div>
        <div className="align-right align-center-xs">
          <hr className="offset-sm" />
          <a href="./store/">
            {' '}
            <h5 className="upp">View all tablets </h5>{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
