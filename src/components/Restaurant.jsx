import React from "react";
import "tailwindcss/tailwind.css";
import ComboA from '../assets/img/menu/banh-da-cua.jpg';
import ComboB from '../assets/img/menu/buncacay.jpg';
import ComboC from '../assets/img/menu/phobo.jpg';
import ComboD from '../assets/img/menu/comrangduabo.webp';

const dishes = [
  {
    id: 1,
    name: "Combo A",
    main: "Bánh Đa Cua Hải Phòng",
    side: "Bánh Mì Que",
    drink: "Nước Uống Tự Chọn",
    price: "120,000 VND",
    image: ComboA,
  },
  {
    id: 2,
    name: "Combo B",
    main: "Bún Cá Cay Hải Phòng",
    side: "Bánh Mì Que",
    drink: "Nước Uống Tự Chọn",
    price: "120,000 VND",
    image: ComboB,
  },
  {
    id: 3,
    name: "Combo C",
    main: "Phở Bò",
    side: "Bánh Mì Que",
    drink: "Nước Uống Tự Chọn",
    price: "120,000 VND",
    image: ComboC,
  },
  {
    id: 4,
    name: "Combo D",
    main: "Cơm Rang Dưa Bò",
    side: "Bánh Mì Que",
    drink: "Nước Uống Tự Chọn",
    price: "120,000 VND",
    image: ComboD,
  },
];

const DishCard = ({ dish, index }) => (
  <div className="overflow-hidden flex flex-col" key={index}>
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
    <div className="pt-10 flex flex-col text-secondary flex-grow">
      <h3 className="text-2xl font-primary text-accent mb-2">{dish.name}</h3>
      <p className="text-white mb-4 flex-grow">{dish.main}</p>
      <p className="text-white mb-4 flex-grow">{dish.side}</p>
      <p className="text-white mb-4 flex-grow">{dish.drink}</p>
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
