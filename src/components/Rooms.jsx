import React, {useContext, useState, useEffect} from 'react';
//context
import {RoomContext} from '../context/RoomContext'
//components
import Room from '../components/Room'

//loader
import {SpinnerDotted} from 'spinners-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { GrNext } from "react-icons/gr";
import { ScreenSizeContext } from '../context/ScreenSizeContext';






const Rooms = () => {

  const {rooms, loading} = useContext(RoomContext)
  const {isMidMobile, isMobile} =useContext(ScreenSizeContext)
  let r = 0
  let space=0

  

  if(isMobile){
    r = 1
  } else if (isMidMobile){
    r=2
    space=20
  } else{
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
    <section className='py-24'>
       {/*overlay & spinner*/}
       {loading && (
          <div className='h-screen fixed bottom-0 top-0 bg-black w-full z-50 flex justify-center items-center '>
            <SpinnerDotted color='white'/>
          </div>
        )
       }
      <div className='container mx-auto  lg:px-0 p-4'>
        <div className='text-center text-white'>
          <div className='font-tertiary uppercase text-accent text-[15px] tracking-[6px]'> Khue Le Bleu</div>
          <h2 className='font-primary text-[45px] mb-4'>Các Phòng</h2>
        </div>
        {/*swiper*/}
        <Swiper 
          {...swiperParams} 
          modules={[Autoplay, Pagination, Navigation]} 
          style={{
            "--swiper-pagination-color": "#126aa0",
            "--swiper-pagination-bullet-inactive-color": "grey",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
           {rooms.map((room)=>(
            <SwiperSlide key={room.id}>
                <Room room={room} key={room.id}/>
            </SwiperSlide>
             
          ))} 
              <div className="swiper-pagination "></div>

        </Swiper>
  
      </div>
    </section>
  )
};

export default Rooms;
