import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade, Autoplay, Pagination} from 'swiper'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  { 
    id:1,
    title:"Yến",
    description: "Đồ ăn ở đây rất ngon, phòng thì sạch sẽ, tháng mát, phục vụ thì tận tâm, gọi đến là xuất hiện liền chứ không chậm trễ, bên này được cái hay là hướng dẫn tận tình còn chỉ thêm 1 số địa điểm nổi để đến trải nghiệm nữa chứ",
  },
  { 
    id:2,
    title:"Lyra",
    description: "My family recently had a vacation at Khue Le Bleu Villa and overall, it was a memorable experience. The villa has a modern design, a green and peaceful environment, making it perfect for a relaxing getaway. The rooms are spacious, clean, and well-equipped with comfortable beds and efficient air conditioning, me and my family had a good night's sleep in our room.",
  },
  {
    id:3,
    title:"Thanh",
    description: "Phòng sạch sẽ, đầy đủ tiện nghi cần thiết cho một buổi nghỉ dưỡng. Villa ngay đường lớn rất dễ tìm, nhân viên cũng thân thiện nhiệt tình nữa, rất đáng lưu lại để lần sau đặt tiếp nếu có dịp đến đây",
  },
  {
    id:4,
    title:"Anh",
    description: "Em vừa có một kỳ nghỉ siêu ưng ý tại Khue Le Bleu Villa và muốn chia sẻ ngay cảm nhận của mình! Ngay từ lúc bước vào, em đã thấy không gian ấm cúng, dễ chịu như ở nhà. Phòng thì sạch sẽ, xinh xắn, tiện nghi đầy đủ, giường êm cực kỳ luôn! Nhân viên ở đây siêu dễ thương, lúc nào cũng niềm nở và sẵn sàng giúp đỡ. Wi-Fi mạnh, bãi đỗ xe rộng rãi, mọi thứ đều tiện lợi và thoải mái. Nhất định em sẽ quay lại vì thực sự thích nơi này quá trời! 🥰",
  }
];


const swiperParams = {
  spaceBetween: 50,
  slidesPerView:1,
  autoplay: {
    delay: 3000, // set the autoplay delay in milliseconds
    disableOnInteraction: false, // allow manual interaction to stop autoplay
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const Reviews = () => {
  return (
     <div className='container mx-auto'>
      <Swiper {...swiperParams}  modules={[EffectFade, Autoplay, Pagination]}>
         {slides.map((slide) => {
               //destructure slide
              const {id, title, description} = slide;

              return (
               <SwiperSlide  className='h-full w-full' key={id}>
                 <div className=' text-white text-center'>

                  <div className='quote-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
                    <FaQuoteLeft color='gold'/>
                    <p className='font-secondary italic text-white lg:text-2xl text-xl'>
                      {description}
                    </p>
                    <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
                      <FaQuoteRight color='gold'/>
                    </div>
                  </div>

                   <div className='flex flex-col items-center py-2'>
                     <p>{title}</p>
                   </div>
                
                 </div>
               </SwiperSlide>
                 )
               })}
        </Swiper>
      </div>     
    )
 }

export default Reviews
