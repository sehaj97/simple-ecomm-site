import React from "react";
import Product from "./Product";

function ProductList(props) {
  const { products } = props;

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
