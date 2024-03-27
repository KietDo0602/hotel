import React,{useContext} from 'react';
import Logo from '../assets/img/logo2Dark.svg'
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaTwitter, FaPinterest,  FaYoutube, FaFacebook } from "react-icons/fa";
import { RoomContext } from '../context/RoomContext';
import Bew from '../assets/hotel.jpg'



const Footer = () => {
  const {rooms} =useContext(RoomContext)
  return(
    <>
    <div className='w-full lg:h-28 h-80 bg-primary'>

    </div>
     <div className='w-full md:h-[400px] h-[780px] bg-secondary relative flex lg:flex-row flex-col py-24'>
        <div className='flex md:flex-row flex-col items-start w-full  gap-4  lg:px-24 px-6  text-white justify-center'>
        <div className='flex flex-col lg:py-0 py-12 items-start lg:w-1/3 '>
           <h1 className='font-primary py-2'>NEWSLETTER</h1>
           <p className='py-3 lg:text-lg text-md'>Subscribe to our Newsletter.</p>
           <form className='flex flex-col   gap-4'>
             <input placeholder='Enter Email' className='px-8  py-3 '/>
             <button className='btn btn-lg btn-secondary py-4'>Subscribe Now</button>
           </form>
          </div>
         <div className='lg:w-1/3'>
          <h1 className='font-primary py-2'>USEFUL LINKS</h1>
          <div className='flex md:flex-col gap-4 font-primary'>
            <a href='/' className='hover:text-accent transition'>
              Home
             </a>
             <a href='/about' className='hover:text-accent transition'>
              About Us
             </a>
             <a href='/rooms' className='hover:text-accent transition'>
              Rooms
             </a>
             <a href='/blog' className='hover:text-accent transition'>
              Blog
             </a>
             <a href='/contact' className='hover:text-accent transition'>
              Contact
             </a>
          </div>
         </div>
         <div className='lg:w-1/3 pr-4'>
            <h1 className='font-primary py-2'>GALLERY</h1>
           <div className='grid grid-rows-3 grid-cols-3 lg:-gap-x-10 lg:gap-2 gap-1 lg:pr-16'>
              {rooms.slice(0,6).map((room)=>(
                <img key={room} src={room.image} className='lg:w-20 w-28 lg:h-20 h-24' alt=''/>
              ))}
           </div>
         </div>
         
        </div>
        <div className='lg:w-1/4 w-full'>
        <div className='sm:w-96 w-[300px] lg:h-[540px]  bg-black lg:-top-80 -top-80 right-0 absolute '>
         <div className='flex flex-col justify-center items-center lg:py-4 lg:gap-0 gap-8'>
           <img className='lg:w-[200px] w-[170px] lg:py-4' src={Logo}/>
          
           <div className='lg:space-y-10  py-6 text-accent items-center'>
            <h1 className="text-accent lg:text-3xl text-xl font-primary lg:py-2 text-center  ">Contact Info</h1>
              <p className='lg:px-4 px-2  flex lg:flex-row flex-col justify-center'><IoIosMail/><span className='px-4 text-white'>info@farmersmarketplace.com</span></p>
              <p className='lg:px-4 px-2 flex lg:flex-row flex-col'><FaPhoneAlt/><span className='px-4 text-white'>+(1) 704-555-5</span> </p>
              <p className='lg:px-4 px-2 flex lg:flex-row flex-col'><IoLocation/><span className='px-4 text-white'>123 Main Street, Charlotte, NC 2820</span></p>
           </div>
           <div className='flex flex-row gap-4 text-xl py-4 pb-4 text-accent '>
            <FaFacebook className='hover:text-white'/>
            <FaInstagram  className='hover:text-white'/>
            <FaTwitter  className='hover:text-white'/>
            <FaPinterest  className='hover:text-white'/>
            <FaYoutube   className='hover:text-white'/>
         </div>
          

          </div>
        </div>
        </div>
    </div>
    <div className='bg-primary'>
      <div className='container mx-auto text-white flex justify-center py-3'>  
         <span className='flex flex-col justify-center'>
             &copy; 2023, Royal Hotels. All rights reserved.
         </span>
      </div>
    </div>
    </>
  )
};

export default Footer;
