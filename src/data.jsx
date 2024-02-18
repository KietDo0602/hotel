// rooms images
import Room1Img from './assets/img/rooms/1.png';
import Room1ImgLg from './assets/img/rooms/1-lg.png';
import Room2Img from './assets/img/rooms/2.png';
import Room2ImgLg from './assets/img/rooms/2-lg.png';
import Room3Img from './assets/img/rooms/3.png';
import Room3ImgLg from './assets/img/rooms/3-lg.png';
import Room4Img from './assets/img/rooms/4.png';
import Room4ImgLg from './assets/img/rooms/4-lg.png';
import Room5Img from './assets/img/rooms/5.png';
import Room5ImgLg from './assets/img/rooms/5-lg.png';
import Room6Img from './assets/img/rooms/6.png';
import Room6ImgLg from './assets/img/rooms/6-lg.png';
import Room7Img from './assets/img/rooms/7.png';
import Room7ImgLg from './assets/img/rooms/7-lg.png';
import Room8Img from './assets/img/rooms/8.png';
import Room8ImgLg from './assets/img/rooms/8-lg.png';
import Dessert from './assets/img/menu/Dessert.jpg'
import Drinks from './assets/img/menu/Drinks.jpg'
import Main from './assets/img/menu/Main.jpg'
import starters from './assets/img/menu/starters.jpg'
import Blog1 from './assets/blog1.jpg'
import Blog2 from './assets/blog2.jpg'
import Blog3 from './assets/blog3.jpg'
import Blog4 from './assets/blog4.jpg'

import prof1 from './assets/prof1.jpg'
import prof2 from './assets/prof2.jpg'
import prof3 from './assets/prof3.jpg'
import prof4 from './assets/prof4.jpg'


// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Signature Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Luxury Suite Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];


export const menuData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    image: Dessert,
    
  },
  {
    id: 2,
    name: 'Signature Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    image: Drinks,
   
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  
    image: Main,
   
  },
  {
    id: 4,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
   
    image: Dessert,
  },
];




export const blogData = [
  {
    id: 1,
    name: 'Most Luxurious hotel in San Francisco',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    image: Blog1,
    
  },
  {
    id: 2,
    name: 'Luxury Hotel for travelling Spot',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    image: Blog2,
   
  },
  {
    id: 3,
    name: 'Best Vacation Hotel Get-away ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  
    image: Blog3,
   
  },
  {
    id: 4,
    name: 'Best Conferencing hotel to host guests',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
   
    image: Blog4,
  },
];



export const teamList = [
  {
      id:'a',
      title:'General Manager',
      name:'James res',
      icon:prof1
  },
  {
      id:'b',
      title:'Assistant Manager',
      name:'Tre Nuio',
      icon:prof2
  },
  {
      id:'c',
      title:'Operations Manager',
      name:'Rio Masterk',
      icon:prof3
  },
  {
      id:'d',
      title:'Staff',
      name:'Shawn Beglin',
      icon:prof4
  },
  // {
  //     id:'e',
  //     title:'',
  //     icon:<CgGym/>
  // },
  // {
  //     id:'f',
  //     title:'',
  //     icon:<FaLuggageCart/>
  // },
  // {
  //     id:'g',
  //     title:'',
  //     icon:<IoKeySharp/>
  // },
  // {
  //     id:'h',
  //     title:'',
  //     icon:<MdFlight/>
  // }

]
