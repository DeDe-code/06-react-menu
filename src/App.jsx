import { useState } from "react";
import menu from "./data.js";
import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import Categories from "./Categories.jsx";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <Title text={"Our Menu"} />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};
export default App;
