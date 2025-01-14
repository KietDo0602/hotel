import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade, Autoplay, Pagination} from 'swiper'
import prof1 from '../assets/t-avt-1.png'
import prof2 from '../assets/t-avt-2.png'
import prof3 from '../assets/t-avt-3.png'
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
    title:"Phi Long",
    description:'Khue Le Bleu Villa có vị trí đẹp, gần các điểm vui chơi ở Đồi Rồng. Nhân viên thân thiện và phục vụ chu đáo. Phòng khách thoáng đãng, sáng sủa.',
    img:prof1
  },
  { 
    id:2,
    title:"Trần Hải",
    description:'Khue Le Bleu Villa tuy nhỏ nhưng rất đẹp và sạch sẽ. Nhân viên rất thân thiện và hỗ trợ tốt. Không gian sang trọng, thích hợp cho du khách muốn tìm kiếm sự yên tĩnh.',
    img:prof2
  },
  {
    id:3,
    title:"Linh Hoang",
    description:'Phòng ốc sạch sẽ mà giá lại hạt dẻ. Nhân viên dễ thương, nhiệt tình lắm. Mình ở 2 ngày mà thấy thoải mái như ở nhà luôn. Sẽ quay lại nếu có dịp!',
    img:prof3
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
