import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { FaArrowRight } from 'react-icons/fa6';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RoomContext } from '../context/RoomContext';
import { ScreenSizeContext } from '../context/ScreenSizeContext';
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 20,
    easing:true,
    
});





const Blog = () => {
  const {blogs} = useContext(RoomContext)
  const{isMidMobile, isMobile}=useContext(ScreenSizeContext)

   
   let r=0
   let space=0
  
   if(isMobile){
    r=1
   }else if(isMidMobile){
    r=2
    space=10
   }else{
    r=3
    space=50
   }
  
   

    const swiperParams = {
        spaceBetween: space,
        slidesPerView: r,
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

  return (
    <Swiper  {...swiperParams}  modules={[Autoplay, Pagination, Navigation]} >
       {blogs.map((blog)=>(
        <div key={blog.id} className='h-96 w-full' data-aos="zoom-out">
         <SwiperSlide>
            <div className='w-full h-96'>
               <img src={blog.image} className='w-full h-full bg-cover bg-center hover:scale-110 transition-all duration-300'/>
            </div>
            <div className='py-8 gap-8 text-accent flex cursor-pointer'>
              <Link to={`/blog/${blog.id}`}>
                <h1 className='text-accent text-xl py-4 hover:underline font-primary'>{blog.name}</h1>
                <span className='hover:text-white font-tertiary'>
                  Read More<FaArrowRight/>
                </span>
             </Link>
            </div>
        </SwiperSlide>
        </div> 
      ))} 
          <div className="swiper-pagination "></div>
    </Swiper>
  )
}

export default Blog