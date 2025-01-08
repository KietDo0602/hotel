import React, { useContext } from 'react'
import Logo from '../assets/img/logo2Dark.svg'
import { CiWifiOn , } from "react-icons/ci";
import { MdFreeBreakfast, MdBedroomChild } from "react-icons/md";
import { 
  FaGamepad,
  FaBed,
  FaCoffee,
} from "react-icons/fa";
import { FaPersonBiking } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";
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
  gridTemplateColumns: 'repeat(3, 2.5fr)',
  gridTemplateRows: 'repeat(3, 0.5fr)',
  gap: '2rem',
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
        title:'Ăn Sáng',
        icon:<MdFreeBreakfast/>
    },
    {
        id:'b',
        title:'WiFi',
        icon:<CiWifiOn/>
    },
    {
        id:'c',
        title:'Dịch Vụ',
        icon:<MdBedroomChild/>
    },
    {
        id:'d',
        title:'Giải Trí',
        icon:<FaGamepad/>
    },
    {
        id:'e',
        title:'Giường Thoải Mái',
        icon:<FaBed/>
    },
    {
        id:'f',
        title:'Quán Cà Phê',
        icon:<FaCoffee/>
    },
    {
        id:'g',
        title:'Phòng Ăn',
        icon:<GiCookingPot/>
    },
    {
        id:'h',
        title:'Xe Đạp',
        icon:<FaPersonBiking/>
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
          <h1 className='text-accent text-3xl'>TẤT CẢ DỊCH VỤ</h1>
          <p className='lg:px-12 px-2 lg:w-full w-1/2 text-center py-4 text-white'>Đầy đủ dịch vụ và tiện nghi, Khue Le Bleu sẽ mang đến trải nghiệm và dịch vụ tốt nhất cho khách hàng.</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-2'>
           <div style={handleGridStyle()}>
             {amenitiesList.map((item)=>(
                <div key={item.id} data-aos="zoom-in-down" style={{ padding:isMobile ? '7rem' : '4rem', gridArea: `${item.id}`}} className='bg-secondary shadow-xl hover:scale-110 transition-all duration-300 flex flex-col items-center'>
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
