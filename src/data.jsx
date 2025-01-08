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
  FaTv,
  FaChess,
} from 'react-icons/fa';
import { MdBalcony } from "react-icons/md";
import { BsSafe2 } from "react-icons/bs";
import { 
  TbAirConditioning,
  TbFridge,
} from "react-icons/tb";

export const roomData = [
  {
    id: 1,
    name: 'Phòng 201',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 40,
    maxPerson: 3,
    price: 80,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Phòng 202',
    description:
      'Phòng với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 30,
    maxPerson: 2,
    price: 70,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Phòng 301',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường, mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 80,
    maxPerson: 3,
    price: 80,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Phòng 302',
    description:
      'Phòng rộng rãi với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 30,
    maxPerson: 2,
    price: 70,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Phòng 401',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 40,
    maxPerson: 3,
    price: 80,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Phòng 402',
    description:
      'Phòng thoáng mát với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 30,
    maxPerson: 2,
    price: 70,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Phòng 501',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
      { name: 'Ăn Sáng', icon: <FaHotdog /> },
      { name: 'Đồ Uống', icon: <FaCocktail /> },
      { name: 'Ban Công', icon: <MdBalcony /> },
      { name: 'Vệ Sinh Riêng', icon: <FaBath /> },
      { name: 'Điều Hòa', icon: <TbAirConditioning /> },
      { name: 'Đỗ Xe', icon: <FaParking /> },
      { name: 'Tủ Lạnh', icon: <TbFridge /> },
      { name: 'Trò Chơi', icon: <FaChess /> },
      { name: 'Két Sắt', icon: <BsSafe2 /> },
    ],
    size: 40,
    maxPerson: 3,
    price: 80,
    image: Room7Img,
    imageLg: Room7ImgLg,
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
    name: 'Villa Khue Le Bleu tại Đồi Rồng',
    description: 'Khue Le Bleu là một khách sạn nhỏ với thiết kế rực rỡ sắc màu, nổi bật giữa khu phố sôi động tại Đồ Sơn, Hải Phòng. Với 5 tầng và chỉ 7 phòng, khách sạn mang đến không gian nghỉ dưỡng ấm cúng, riêng tư nhưng vẫn đầy đủ tiện nghi hiện đại. Khách sạn sở hữu nhiều tiện ích hấp dẫn, bao gồm một gian bếp phục vụ những món ăn thơm ngon, một quán cà phê với không gian thư giãn và sống động, cùng một phòng khách chung được trang bị các trò chơi giải trí như board games – lý tưởng cho những buổi họp mặt gia đình hoặc bạn bè. Tọa lạc gần các sân golf và nhiều khu vui chơi giải trí, Khue Le Bleu là điểm dừng chân lý tưởng cho những du khách muốn trải nghiệm các hoạt động vui nhộn ngoài trời hoặc khám phá vẻ đẹp thiên nhiên Đồ Sơn. Ngoài vị trí đắc địa, khách sạn còn nổi bật với sự đầu tư vào công nghệ và tiện nghi hiện đại. Với đội ngũ lễ tân phục vụ 24/7, Khue Le Bleu cam kết mang đến dịch vụ tận tình, chu đáo cho mọi nhu cầu của khách hàng. Đây là nơi lý tưởng cho những ai tìm kiếm một kỳ nghỉ đáng nhớ với sự thoải mái, tiện lợi và nhiều sắc màu thú vị.',
    image: Blog1,
    
  },
  {
    id: 2,
    name: 'Công viên ánh sáng Đồi Rồng',
    description:
      'Dragon Ocean Lighting Park - công viên ánh sáng đầu tiên tại Hải Phòng thuộc Khu du lịch Quốc tế Đồi Rồng nay đã sẵn sàng với một diện mạo mới cùng những câu chuyện mới đầy thú vị. Được đầu tư với quy mô hơn 3 ha cùng 150 đại cảnh, tiểu cảnh, hàng trăm đèn lồng, vẫn là những biểu tượng giao lưu văn hóa, những câu chuyện về giá trị lịch sử, văn hóa, truyền thống của dân tộc Việt Nam luôn được chủ đầu tư tôn vinh và giữ gìn nhưng công viên Ánh sáng Đồi Rồng phiên bản mới lại được xây dựng một cách mới mẻ và sáng tạo hơn. Nơi đây được ví như một cuốn truyện cổ tích, nơi mà mỗi khu vực du khách bước chân tới đều như lạc vào các vùng đất khác nhau của một xứ sở thần kỳ. Những cảnh quan ánh sáng biến hóa liên tục, từ những khu vực nhẹ nhàng, lãng mạn đến những không gian mạnh mẽ, rực rỡ, tất cả đều khiến cảm xúc dâng trào. Mỗi khu vực đều mang lại trải nghiệm độc đáo, một thông điệp và không gian riêng biệt, tạo nên những chương truyện nối tiếp nhau, đưa du khách vào hành trình đầy bất ngờ và khó quên.',
    image: Blog2,
   
  },
  {
    id: 3,
    name: 'Rừng Ngập Mặn tại Đồ Sơn',
    description:
      'Nhận thấy những tiềm năng phát triển của rừng ngập mặn Bàng La cũng như mong muốn phục hồi và bảo tồn tài nguyên rừng, Khu du lịch Quốc tế Đồi Rồng phối hợp cùng quận Đồ Sơn triển khai kế hoạch phát triển dịch vụ du lịch sinh thái tại nơi đây. Rừng ngập mặn Bàng La được ưu ái với khí hậu ôn hòa, mát mẻ của vùng bán đảo Đồ Sơn đan xen mang từng nhịp thở của biển cả, mang theo vẻ đẹp dịu dàng lan tỏa khắp không gian, hội tụ cảnh đẹp của thiên nhiên đất trời cùng đời sống văn hóa phong phú, đa dạng. Dự kiến khi được đưa vào khai thác phục vụ du lịch, lần đầu tiên tại Đồ Sơn, du khách sẽ được trải nghiệm các hoạt động hấp dẫn như mò cua, bắt ốc, chèo thuyền Kayak, trải nghiệm xuyên rừng trên chiếc cầu gần 3km và chụp ảnh với mô hình các loại muông thú. Du khách sẽ có đầy đủ cảm giác như đang được đi du lịch tại vùng sông nước miền Tây Nam Bộ. Vẻ đẹp thơ mộng, đậm màu thiên nhiên và bản sắc văn hóa của Bàng La hứa hẹn khiến nhiều người say đắm.',
    image: Blog3,
   
  },
  {
    id: 4,
    name: 'Công Viên Thần Thoại',
    description:
      'Góp phần gìn giữ nét đẹp truyền thống địa phương, Khu du lịch Quốc tế Đồi Rồng ngay từ khi ra mắt đã nổi tiếng với Công viên Thần Thoại Legend Park mang đầy giá trị biểu tượng. Công viên được thiết kế theo chủ đề Sơn Tinh-Thuỷ Tinh, câu chuyện thần thoại thời xa xưa vốn đã in sâu đậm vào tâm trí con người Việt Nam. Tổ hợp Công viên Thần thoại Legend Park được xem là công viên đầu tiên tại Việt Nam lấy chủ đề văn hóa dân gian làm chủ đề xuyên suốt, 20 trò chơi cảm giác mạnh trong tổ hợp công viên đều được xây dựng và lấy cảm hứng thông qua cuộc chiến kiêu hùng giữa Sơn Tinh - Thủy Tinh, qua đó gợi nhớ về những truyền thống văn hóa lâu đời của dân tộc, giúp thế hệ sau này mãi nhớ về cội nguồn đồng thời cũng trân trọng hơn những thành quả trong hiện tại.',
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
