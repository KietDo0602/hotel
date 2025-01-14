import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax} from 'react-scroll-parallax';
//Parallax
import { useParallax  } from 'react-scroll-parallax'
//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'
//import swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
//import required modules
import {EffectFade, Autoplay} from 'swiper'

//images
import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'


import { useContext } from 'react';
import { ScreenSizeContext } from '../context/ScreenSizeContext';


import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 3000,
  loop:true,
  once: false,
  offset: 1000,
  easing:true,
});

const slides = [
  {
    title:'Chào Mừng đến với Khue Le Bleu',
    bg:Img1,
    btnText:'Đặt Phòng',
    link: '/rooms'
  },
  {
    title:'Khám Phá Đồi Rồng',
    bg:Img2,
    btnText:'Khám Phá',
    link: '/about'
  },
  {
    title:'Điểm Đến Lý Tưởng',
    bg:Img3,
    btnText:'Đặt Phòng',
    link: '/rooms'
  }
];

const HeroSlider = () => {
  const parallax = useParallax({ speed: -100,  });
  const [imageHeight, setImageHeight] = useState('')
  const {isMobile, isMidMobile} = useContext(ScreenSizeContext)
  const [activeIndex, setActiveIndex] = useState(0);

  let r = 0
  if (isMidMobile){
    r=0
  }
   else{
    r = -60
  }

  let h = 0;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
 

  return(
   <Swiper  modules={[EffectFade, Autoplay]} effect={'fade'} loop={true}
   autoplay={{
    delay: 3000,
    disableOnInteraction:false,
   }}
   onSlideChange={handleSlideChange}
   className={`heroSlider h-[400px] md:h-[600px] lg:h-[860px]`}>
    {slides.map((slide, index) => {
      //destructure slide
      const{title, bg, btnText, link}= slide;
      return(
        <SwiperSlide ref={parallax.ref} className='h-full flex justify-center items-center' key={index}>
         <div className='z-20 text-white text-center'>
          <div className='uppercase font-tertiary tracking-[6px] lg:mb-5 mb-3'>Đến Và Tận Hưởng</div>
          <h1 className='text-[24px] font-primary uppercase tracking-[2px]
          max-w-[920px] lg:text-[68px] leading-tight lg:mb-6 mb-3'>
            {title}
          </h1>
          <button className='btn lg:btn-lg btn-sm btn-primary mx-auto cursor-pointer' >
            <Link to={link}>
              {btnText}
            </Link>
          </button>
         </div>

            


         <div  className='absolute top-0  w-full h-full '> 
             <img
             className={` object-cover bg-fixed  h-full w-full  ${index === activeIndex ? 'scale-110 transition-all duration-1000 ease-in-out' : 'scale-100 transition-all duration-1000 ease-in-out'}`} 
              src={bg}
              alt=''
           /> 

        
           {/*overlay*/}
          <div className='absolute w-full  h-full bg-black/70'>

           </div>
         </div> 

         {/*overlay*/}
         <div className='absolute w-full h-full bg-black/70'></div>
        </SwiperSlide>
      )
    })}
   </Swiper>
  )
};

export default HeroSlider;
