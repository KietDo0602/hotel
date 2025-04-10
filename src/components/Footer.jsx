import React,{useContext} from 'react';
import { Logo } from '../assets';
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { RoomContext } from '../context/RoomContext';
import { Link } from 'react-router-dom';



const Footer = () => {
  const { photos } = useContext(RoomContext);

  return(
    <>
    <div className='w-full lg:h-28 h-80 bg-primary'>

    </div>
     <div className='w-full md:h-[400px] h-[780px] bg-secondary relative flex lg:flex-row flex-col py-24'>
        <div className='flex md:flex-row flex-col items-start w-full  gap-4  lg:px-24 px-6  text-white justify-center'>
        <div className='flex flex-col lg:py-0 py-12 items-start xl:w-1/3 '>
           <h1 className='font-primary py-2 text-accent'>TIN TỨC</h1>
           <p className='py-3 lg:text-lg text-md'>Đăng ký để xem về Khue Le Bleu.</p>
           <form className='flex flex-col   gap-4'>
             <input placeholder='Email' className='px-5 py-3 text-black'/>
             <button className='btn btn-lg btn-secondary py-4'>Đăng Ký</button>
           </form>
        </div>
         <div className='xl:w-1/3'>
          <h1 className='font-primary py-2 text-accent'>LINK HỮU DỤNG</h1>
          <div className='flex md:flex-col gap-4 font-primary'>
            <a href='/' className='hover:text-accent transition'>
              Trang Chủ
             </a>
             <a href='/about' className='hover:text-accent transition'>
              Về Chúng Tôi
             </a>
             <a href='/rooms' className='hover:text-accent transition'>
              Các Phòng
             </a>
             <a href='/blog' className='hover:text-accent transition'>
              Blog
             </a>
             <a href='/contact' className='hover:text-accent transition'>
              Liên Hệ
             </a>
          </div>
         </div>
         <div className='xl:w-1/3 pr-4'>
            <h1 className='font-primary py-2 text-accent'>THƯ VIỆN ẢNH</h1>
           <div className='grid grid-rows-3 grid-cols-3 lg:-gap-x-10 lg:gap-2 gap-1 lg:pr-16'>
              {photos.slice(0,6).map((room)=>(
                <img key={room} src={room.image} className='lg:w-20 w-28 lg:h-20 h-24' alt=''/>
              ))}
           </div>
         </div>
         
        </div>
        <div className='lg:w-1/3 w-full'>
        <div className='sm:w-96 w-[300px] sxl:h-[540px]  bg-black sxl:-top-80 -top-80 right-0 absolute '>
         <div className='flex flex-col justify-center items-center lg:py-4 lg:gap-0 gap-8'>
           <img className='lg:w-[200px] w-[170px] lg:py-4' src={Logo}/>
          
           <div className='lg:space-y-10  py-6 text-accent items-center'>
            <h1 className="text-accent lg:text-3xl text-xl font-primary lg:py-2 text-center  ">Liên Hệ</h1>
              <p className='lg:px-4 px-2 flex lg:flex-row flex-col'>
                <IoIosMail/>
                <a target='_blank' rel='noopener noreferrer' href="mailto:khuelebleu@gmail.com">
                  <span className='px-4 text-white'>khuelebleu@gmail.com</span>
                </a>
              </p>
              <p className='lg:px-4 px-2 flex lg:flex-row flex-col'>
                <FaPhoneAlt/>
                <a target='_blank' rel='noopener noreferrer' href="tel:0965162005">
                  <span className='px-4 text-white'>0965162005</span>
                </a>
              </p>
              <p className='lg:px-4 px-2 flex lg:flex-row flex-col'>
                <IoLocation/>
                <a target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/wJReB4gmY1Zxooi27?g_st=com.google.maps.preview.copy">
                  <span className='px-4 text-white'>KL6.15 Đường Kim Long 6, Đồi Rồng</span>
                </a>
              </p>
           </div>
           <div className='flex flex-row gap-4 text-xl py-4 pb-4 text-accent '>
             <a target='_blank' rel='noopener noreferrer' href="https://facebook.com/khuelebleuvilla">
               <FaFacebook className='hover:text-white'/>
             </a>
             <a target='_blank' rel='noopener noreferrer' href="https://www.booking.com/hotel/vn/khue-le-bleu-villa.vi.html">
               <TbBrandBooking className="hover:text-white text-accent bg-111a38" size={23}/>
             </a>
           </div>
          

          </div>
        </div>
        </div>
    </div>
    <div className='bg-primary'>
      <div className='container mx-auto text-white flex justify-center py-3'>  
         <span className='flex flex-col justify-center'>
             &copy; 2025. Toàn bộ bản quyền thuộc Khue Le Bleu.
         </span>
      </div>
    </div>
    </>
  )
};

export default Footer;
