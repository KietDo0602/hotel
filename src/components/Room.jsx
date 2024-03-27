import React from 'react';
import {Link} from 'react-router-dom'
import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


const Room = ({room}) => {
  const {image, description, id , name , size, maxPerson, price} = room
  return(
    <div data-aos="fade-up" className='bg-black/30 shadow-2xl min-h-[500px]  group'>
      {/*image*/}
      <div className=' group-hover:scale-110 transition-all duration-300'>
         <img src={image} alt=''/>
      </div>
      {/*details*/}
      <div className='bg-secondary shadow-lg max-w-[300px] mx-auto h-[60px]
       -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] 
       font-semibold text-base'>
        <div className='flex justify-between w-[80%]'>
           {/*size*/}
          <div className='flex items-center gap-x-2'>
             <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]'/>
             </div>
             <div className='flex gap-x-1 text-white'>
               <div>Size</div>
               <div>{size}m2</div>
             </div>
          </div>
          {/*room-capacity*/}
          <div className='flex items-center gap-x-2'>
             <div className='text-accent'>
              <BsPeople className='text-[18px]'/>
             </div>
             <div className='flex gap-x-1 text-white '>
               <div>Max People</div>
               <div>{maxPerson}</div>
             </div>
          </div>
        </div>
      </div>

      {/*name*/}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3 text-accent'>{name}</h3>
        </Link>
        <p className='max-w-[300px] text-accent mx-auto mb-2 lg:mb-6'>{description.slice(0,56)}</p>
      </div>

      {/*btn*/}
      <Link className='btn btn-secondary btn-sm max-w-[240px] mx-auto' to={`/room/${id}`}>Book now from ${price}</Link>
    </div>
  ) 
};

export default Room;
