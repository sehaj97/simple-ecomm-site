import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import ProductList from "./ProductList";
import Filter from "./Filter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([
    [
      {
        id: 1,
        name: "Product 1",
        price: 9.99,
        image: "https://via.placeholder.com/300x200?text=Product+1",
        category: "category1",
      },
      {
        id: 2,
        name: "Product 2",
        price: 19.99,
        image: "https://via.placeholder.com/300x200?text=Product+2",
        category: "category2",
      },
      {
        id: 3,
        name: "Product 3",
        price: 14.99,
        image: "https://via.placeholder.com/300x200?text=Product+3",
        category: "category1",
      },
      {
        id: 4,
        name: "Product 4",
        price: 24.99,
        image: "https://via.placeholder.com/300x200?text=Product+4",
        category: "category2",
      },
      {
        id: 5,
        name: "Product 5",
        price: 12.99,
        image: "https://via.placeholder.com/300x200?text=Product+5",
        category: "category1",
      },
      {
        id: 6,
        name: "Product 6",
        price: 29.99,
        image: "https://via.placeholder.com/300x200?text=Product+6",
        category: "category2",
      },
    ],
  ]);

  useEffect(() => {
    fetch("./data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="App">
      <Header />
      <Filter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
