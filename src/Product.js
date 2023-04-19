import React from "react";

function Product(props) {
  const { product } = props;

  return (
    <div className="product">
      <img className="product__image" src={product.image} alt={product.name} />
      <div className="product__info">
        <h2 className="product__name">{product.name}</h2>
        <p className="product__price">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
