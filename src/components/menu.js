import React, { useState } from "react";

const Menu = ({
  menuItems,
  activeCategory,
  setActiveCategory,
}) => {
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter(
          (item) => item.category === activeCategory
        );

  const getTestId = (category) => {
    if (category === "Breakfast") {
      return "menu-item-breakfast";
    }

    if (category === "Lunch") {
      return "menu-item-lunch";
    }

    return "menu-item-shakes";
  };

  return (
    <section className="menu-container">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>

      <div className="btn-container">
        <button
          id="filter-btn-1"
          className={activeCategory === "Breakfast" ? "active" : ""}
          onClick={() => setActiveCategory("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          className={activeCategory === "Lunch" ? "active" : ""}
          onClick={() => setActiveCategory("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          className={activeCategory === "Shakes" ? "active" : ""}
          onClick={() => setActiveCategory("Shakes")}
        >
          Shakes
        </button>
      </div>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="menu-item"
            data-test-id={getTestId(item.category)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="photo"
            />

            <div className="item-info">
              <header className="item-header">
                <h4>{item.name}</h4>
                <h4 className="price">${item.price}</h4>
              </header>

              <div className="item-category">
                {item.category}
              </div>

              <p className="item-text">
                A delicious and freshly prepared {item.name.toLowerCase()}.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;