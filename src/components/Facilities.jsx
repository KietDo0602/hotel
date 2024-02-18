import React from 'react'
// import Restraunt from './Restraunt'
// import Spaz from '../assets/spaz.jpg'
// import pool from '../assets/swimmingpool.jpg'
// import gym from '../assets/gym.jpg'
// import rest from '../assets/img/restrauant.jpg'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import MenuRes from './MenuRes'
import {ScreenSizeContext} from '../context/ScreenSizeContext'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 80,
    easing:true,
    
});

const Back=()=>{
  const {menu} = useContext(RoomContext)
  return(
    <div className=''>
       {/* {grid} */}
      <div className='grid lg:grid-cols-4 '>
       <div className='col-span-2'>

       </div>
       <div className='col-span-2 p-0'>
         <div className='flex flex-wrap w-full h-full'>
          {menu.slice(0,6).map((room)=>{
            console.log(room)
            return <MenuRes room={room} key={room.id}/>
          })}
         </div>
       </div>

     </div>
    </div>
  )
}

const Facilities = () => {
    const {isMidMobile} = useContext(ScreenSizeContext)

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '1rem',
        gridTemplateAreas: '"a b" "c d" "e f" "g h"',
      };
    

    const gridSmallDeviceStyle = {
      display:'grid',
     // gridTemplateColumns:'repeat(4, 1fr)',
      gridTemplateRows:'repeat(1, 1fr)',
      gap:'1rem',
      gridTemplateAreas:'"a" "b" "c" "d" "e" "f" "g" "h"',
    };
      const gridItemStyle = {
        // background: '#ccc',
        padding: '1.5rem', 
        //original 1rem
      };
    
      return (
        <>
      {/*FLEX*/}
      
        <div className='w-full h-full flex flex-col  justify-center lg:p-24 p-0 '>
          <div className=' hidden lg:block'>
           <div className='flex flex-col items-start' data-aos="fade-down" >
              <h1 className='text-white py-16 px-3 text-3xl font-primary'>OUR FACILITIES</h1>
           </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' >
              <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('../conferenceRoom.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
               {/* <img src={rest} className='w-full h-auto  hover:scale-110 transition-all duration-300' /> */}
            </div>
            <div className='lg:w-1/2' data-aos="zoom-in" >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                <h1 className='text-left text-lg text-white font-secondary p-8'>Conference Center</h1>
                  <p className='max-w-lg p-8 font-secondary text-accent text-center'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
              </div>  
            </div>
          </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4   hover:scale-110 transition-all duration-300' > 
                 <h1 className='text-left text-lg text-white  font-secondary p-8'>Restraurant</h1>
                  <p className='max-w-lg p-8 font-secondary text-accent text-center'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2' >
               <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('../restrauant.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
              {/* <img src={pool} className='w-full h-auto  hover:scale-110 transition-all duration-300' /> */}
            </div>
          </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2 w-full' >
               <div className='lg:h-screen h-48 w-full bg-center bg-cover' style={{backgroundImage:"url('../spaz.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>

              </div>
              {/* <img src={Spaz} className='w-full h-auto hover:scale-110 transition-all duration-300 ' /> */}
            </div>
            <div className='lg:w-1/2' data-aos="zoom-in"  >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-lg text-white font-secondary p-8'>SPA & Wellness</h1>
                  <p className='max-w-lg font-secondary text-accent text-center'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
               </div> 
             </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-lg text-white  font-secondary p-8'>Gym & Fitness</h1>
                  <p className='max-w-lg p-8 font-secondary  text-accent text-center'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2'>
              <div className='w-full lg:h-screen h-48 bg-center bg-cover' style={{backgroundImage:"url('../gym1.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
               {/*<img src={gym} className='w-full h-auto hover:scale-110 transition-all duration-300 p-12' />*/} 
            </div>
          </div>
          </div>



           {/* Nav */}
           <div className='block lg:hidden'> 
            <div className='flex flex-col items-center' data-aos="fade-right" >
               <h1 className='text-white py-16 mt-24 px-3 text-3xl font-primary'>OUR FACILITIES</h1>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
               <div className='lg:w-1/2' data-aos="zoom-in" >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                <h1 className='text-left text-lg text-white font-secondary p-8'>Conference Center</h1>
                  <p className='max-w-lg p-8 font-secondary text-accent text-center'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
              </div>  
               </div>
               <div className='lg:w-1/2' >
                 <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('../assets/img/conferenceRoom.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}></div>
               </div>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4   hover:scale-110 transition-all duration-300' > 
                 <h1 className='text-left text-lg text-white  font-secondary p-8'>Restraurant</h1>
                  <p className='max-w-lg p-8 font-secondary text-accent text-center'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2' >
               <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('../assets/img/restrauant.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
              {/* <img src={pool} className='w-full h-auto  hover:scale-110 transition-all duration-300' /> */}
            </div>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
             <div className='lg:w-1/2' data-aos="zoom-in"  >
                <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-lg text-white font-secondary p-8'>SPA & Wellness</h1>
                  <p className='max-w-lg font-secondary text-accent text-center'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
               </div>
             </div>
             <div className='lg:w-1/2 w-full' >
               <div className='lg:h-screen h-48 w-full bg-center bg-cover' style={{backgroundImage:"url('../assets/img/spaz.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>
             </div>
              {/* <img src={Spaz} className='w-full h-auto hover:scale-110 transition-all duration-300 ' /> */}
            </div>
             </div>
             <div className='flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-lg text-white  font-secondary p-8'>Gym & Fitness</h1>
                  <p className='max-w-lg p-8 font-secondary  text-accent text-center text-lg'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2'>
              <div className='w-full lg:h-screen h-48 bg-center bg-cover' style={{backgroundImage:"url('../assets/img/gym1.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
               {/*<img src={gym} className='w-full h-auto hover:scale-110 transition-all duration-300 p-12' />*/} 
            </div>
             </div>
            </div>
        </div>
        </>
      );
}

export default Facilities