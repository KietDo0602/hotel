import React, { useContext } from 'react'
import Logo from '../assets/img/logo2Dark.svg'
import { CiWifiOn , } from "react-icons/ci";
import { MdFreeBreakfast } from "react-icons/md";
import { MdBedroomChild } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { FaLuggageCart } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScreenSizeContext } from '../context/ScreenSizeContext';

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
    easing:true,
});

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 0.5fr)',
    gridTemplateRows: 'repeat(3, 0.5fr)',
    gap: '1.5rem',
    gridTemplateAreas: '"a b c d" "e f g h"',
  };

  const gridMediumDeviceContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '1.5rem',
    gridTemplateAreas: '"a b" "c d" "e f" "g h"',
  };

  const gridSmallDeviceContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    gap: '1.5rem',
    gridTemplateAreas: '"a" "b" "c" "d" "e" "f" "g" "h"',
  };
  

 const amenitiesList = [
    {
        id:'a',
        title:'BreakFast',
        icon:<MdFreeBreakfast/>
    },
    {
        id:'b',
        title:'Wi-Fi Internet',
        icon:<CiWifiOn/>
    },
    {
        id:'c',
        title:'Room Services',
        icon:<MdBedroomChild/>
    },
    {
        id:'d',
        title:'Swimming Pool',
        icon:<FaPersonSwimming/>
    },
    {
        id:'e',
        title:'Fitness Center',
        icon:<CgGym/>
    },
    {
        id:'f',
        title:'Luggage Store',
        icon:<FaLuggageCart/>
    },
    {
        id:'g',
        title:'Smart Key',
        icon:<IoKeySharp/>
    },
    {
        id:'h',
        title:'Flight Booking',
        icon:<MdFlight/>
    }

]

const Amenities = () => {
  const {isMobile,isMidMobile} = useContext(ScreenSizeContext)


 const handleGridStyle = () =>{
  if(isMobile){
     return  gridSmallDeviceContainerStyle
  }else if (isMidMobile){
   return gridMediumDeviceContainerStyle
  }else {
    return gridContainerStyle
  }
 }

  return (
    <div className='w-full h-auto flex flex-col xl:flex-row '>
        <div className='w-full flex flex-col items-center justify-center'>
          {/* <img src={Logo} className='w-28 h-28 opacity-80 '/> */}
          <h1 className='text-accent text-md'>HOTEL'S AMENITIES</h1>
          <p className='lg:px-12 px-2 lg:w-full w-1/2 text-center py-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eos qui fugit voluptas, sit temporibus accusamus recusandae perferendis provident porro.</p>
        </div>
        <div className='flex flex-col items-center justify-center p-4'>
           <div style={handleGridStyle()}>
             {amenitiesList.map((item)=>(
                <div key={item.id} data-aos="zoom-in-down" style={{ padding:isMobile ? '7rem' : '4rem', gridArea: `${item.id}`}} className='bg-red-800 shadow-xl hover:scale-110 transition-all duration-300 flex flex-col items-center'>
                   <span className='lg:text-4xl text-6xl text-accent'>{item.icon}</span>
                   <p className='text-accent lg:p-2'>{item.title}</p>
                </div>
                ))
             }
        </div>
       </div>
       
        
   </div>
  )
}

export default Amenities