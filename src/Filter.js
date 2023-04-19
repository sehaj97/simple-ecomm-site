import React from "react";

function Filter(props) {
  const { selectedCategory, onSelectCategory } = props;

  return (
    <div className="filter">
      <button
        className={
          selectedCategory === "all"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
        onClick={() => onSelectCategory("all")}
      >
        All
      </button>
      <button
        className={
          selectedCategory === "electronics"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
        onClick={() => onSelectCategory("electronics")}
      >
        Electronics
      </button>
      <button
        className={
          selectedCategory === "clothing"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
        onClick={() => onSelectCategory("clothing")}
      >
        Clothing
      </button>
      <button
        className={
          selectedCategory === "home"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
        onClick={() => onSelectCategory("home")}
      >
        Home
      </button>
    </div>
  );
}

export default Filter;
