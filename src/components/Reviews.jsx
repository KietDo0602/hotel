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

const slides =[
  { 
    id:1,
    title:"A Regal Experience Beyond Expectations!",
    description:'The amenities at Royal Hotels are truly top-notch. The spa offered a rejuvenating escape, and the fine dining restaurant served exquisite cuisine that surpassed my expectations. The attention to detail, impeccable service, and overall opulence of this 5-star establishment truly set it apart. If you are seeking an unforgettable and regal experience, look no further than Royal Hotels!',
    img:prof1
  },
  { 
    id:2,
    title:"A Regal Experience Beyond Expectations!",
    description:'Royal Hotels strikes the perfect balance between luxury and comfort, making it an ideal choice for those seeking a truly indulgent getaway. I cannot wait to return to this haven of sophistication and relaxation.',
    img:prof2
  },
  {
    id:3,
    title:"Unparalleled Service and Unforgettable Memories",
    description:'Whether you are looking for a romantic getaway or a luxurious escape, Royal Hotels delivers on every front. The seamless blend of opulence and warmth makes it a standout choice for those who appreciate the finer things in life. I wholeheartedly recommend Royal Hotels for an unparalleled experience that exceeds expectations.',
    img:prof3
  }
]


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
            const {id,img, title, description}= slide;
              return (
               <SwiperSlide  className='h-full w-full' key={id}>
                 <div className=' text-white text-center'>
                   <p className='font-secondary italic text-white lg:text-2xl text-xl'><FaQuoteLeft color='brown' />{description}</p>
                   <div className='flex flex-col items-center py-2'>
                     <img src={img} className='w-24 h-24'/>
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