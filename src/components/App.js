import React, { useState } from "react";
import Menu from "./menu";
import "../styles/App.css";

const App = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Buttermilk Pancakes",
      category: "Breakfast",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Diner Double",
      category: "Lunch",
      price: 13.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Godzilla Milkshake",
      category: "Shakes",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Country Delight",
      category: "Breakfast",
      price: 20.99,
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Egg Attack",
      category: "Lunch",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Oreo Dream",
      category: "Shakes",
      price: 18.99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main id="main">
      <Menu
        menuItems={menuItems}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </main>
  );
};

export default App;