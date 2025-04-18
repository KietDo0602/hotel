// rooms images
import Room1Img from './assets/img/rooms/201.jpg';
import Room1ImgLg from './assets/img/rooms/201.jpg';
import Room2Img from './assets/img/rooms/202.jpg';
import Room2ImgLg from './assets/img/rooms/202.jpg';
import Room3Img from './assets/img/rooms/301.jpg';
import Room3ImgLg from './assets/img/rooms/301.jpg';
import Room4Img from './assets/img/rooms/302.jpg';
import Room4ImgLg from './assets/img/rooms/302.jpg';
import Room5Img from './assets/img/rooms/401.jpg';
import Room5ImgLg from './assets/img/rooms/401.jpg';
import Room6Img from './assets/img/rooms/402.jpg';
import Room6ImgLg from './assets/img/rooms/402.jpg';
import Room7Img from './assets/img/rooms/501.jpg';
import Room7ImgLg from './assets/img/rooms/501.jpg';
import { FaBowlRice } from "react-icons/fa6";

import Blog1 from './assets/doi-rong.jpg';
import Blog2 from './assets/cv-anh-sang.jpg';
import Blog3 from './assets/rung-ngap-man.jpg';
import Blog4 from './assets/cv-than-thoai.jpg';



// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
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

export function generateBookingLink(checkinDate, checkoutDate, adults, children) {
  // Example usage
  // const checkinDate = '2025-03-20';
  // const checkoutDate = '2025-03-25';
  // const adults = 2;
  // const children = 1;
  const baseURL = `https://www.booking.com/hotel/vn/`;
  const params = new URLSearchParams({
    checkin: checkinDate,
    checkout: checkoutDate,
    group_adults: adults,
    group_children: children
  });

  const res = `${baseURL}khue-le-bleu-villa.vi.html?${params.toString()}`;

  return res;
}

export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function extractNumber(inputString) {
  const match = inputString.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

export const roomPhotos = [
  {
    id: 1,
    image: Room1Img,
  },
  {
    id: 2,
    image: Room2Img,
  },
  {
    id: 3,
    image: Room3Img,
  },
  {
    id: 4,
    image: Room4Img,
  },
  {
    id: 5,
    image: Room5Img,
  },
  {
    id: 6,
    image: Room6Img,
  },
];


export const roomData = [
  {
    id: 1,
    name: 'Phòng 201',
    short: 'Phòng view thành phố sắc màu với 1 giường cỡ king và 1 giường đơn',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    short: 'Phòng view thành phố sắc màu với giường cỡ king rộng rãi, thoáng mát',
    description:
      'Phòng với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    short: 'Phòng view thành phố sắc màu với 1 giường cỡ king và 1 giường đơn',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường, mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Phòng 302',
    short: 'Phòng view thành phố sắc màu với giường cỡ king rộng rãi, thoáng mát',
    description:
      'Phòng rộng rãi với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    short: 'Phòng view thành phố sắc màu với 1 giường cỡ king và 1 giường đơn',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    short: 'Phòng view thành phố sắc màu với giường cỡ king rộng rãi, thoáng mát',
    description:
      'Phòng thoáng mát với một giường cỡ king, sẽ mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, ánh sáng tràn vào phòng tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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
    short: 'Phòng view thành phố sắc màu với 1 giường cỡ king và 1 giường đơn',
    description:
      'Phòng rộng rãi với một giường cỡ king và một giường cỡ thường mang đến sự thoải mái và ấm cúng. Ban công riêng nhìn ra toàn cảnh Đồi Rông, tạo nên bức tranh lấp lánh và thơ mộng. Nội thất hiện đại với gam màu cổ điển mà trẻ trung, tạo cảm giác thư giãn và thanh lịch. Tiện nghi bao gồm Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh mini và phòng tắm sang trọng. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ của bạn.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Ăn Sáng', icon: <FaBowlRice /> },
      { name: 'Cà Phê', icon: <FaCoffee /> },
      { name: 'Tivi', icon: <FaTv /> },
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


