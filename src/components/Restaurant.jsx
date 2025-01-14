import React from "react";
import "tailwindcss/tailwind.css";
import Drinks from '../assets/img/menu/Drinks.jpg'
import Dessert from '../assets/img/menu/Dessert.jpg'
import Main from '../assets/img/menu/Main.jpg'
import starters from '../assets/img/menu/starters.jpg'

const dishes = [
  {
    id: 1,
    name: "Combo A",
    description: "Freshly grilled salmon served with a side of seasonal vegetables and lemon butter sauce.",
    price: "100,000 VND",
    image: Drinks,
  },
  {
    id: 2,
    name: "Combo B",
    description: "Juicy beef steak cooked to perfection, served with mashed potatoes and red wine reduction.",
    price: "120,000 VND",
    image: Dessert,
  },
  {
    id: 3,
    name: "Combo C",
    description: "A delightful mix of fresh vegetables and pasta in a creamy garlic sauce.",
    price: "120,000 VND",
    image: Main,
  },
  {
    id: 4,
    name: "Combo D",
    description: "A delightful mix of fresh vegetables and pasta in a creamy garlic sauce.",
    price: "120,000 VND",
    image: starters,
  },
];

const DishCard = ({ dish, index }) => (
  <div className="overflow-hidden flex flex-col" key={index}>
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
    <div className="pt-10 flex flex-col text-secondary flex-grow">
      <h3 className="text-xl font-primary text-accent mb-2">{dish.name}</h3>
      <p className="text-white mb-4 flex-grow">{dish.description}</p>
      {/* <p className="text-lg text-accent">{dish.price}</p> */}
    </div>
  </div>
);

const Menu = () => (
  <div className="container mx-auto px-4 py-8">
      <div className='text-white flex flex-col items-center py-4'>
        <span className='text-md text-accent'>Ăn Sáng</span>
        <h1 className='text-3xl p-2'>4 Combo</h1>
        <p className='py-2 text-center'>Hãy chọn một combo ăn sáng.</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dishes.map((dish, index) => (
        <DishCard dish={dish} index={index} />
      ))}
    </div>
  </div>
);

export default Menu;
