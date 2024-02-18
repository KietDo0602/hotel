import React, { useContext } from 'react'
import Logo from '../assets/img/logo2Dark.svg'
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaTwitter, FaPinterest,  FaYoutube, FaFacebook } from "react-icons/fa";
import { RoomContext } from '../context/RoomContext';
import Bew from '../assets/hotel.jpg'
import Breaker from './Breaker';


const Contact = () => {
  const {rooms} =useContext(RoomContext)
  return (
    <div className='w-full h-[400px] bg-red-800 relative lg:flex flex-col py-24'>
        {/* <div className='w-96 h-[500px] bg-black -top-24 right-20 absolute '>
         <div className='flex flex-col justify-center items-center py-4'>
           <img className='w-[200px]  py-4' src={Logo}/>
           <h1 className="text-accent text-3xl font-primary py-2">Contact Info</h1>
           <div className=' space-y-10 py-6 text-accent'>
              <p className='px-4 flex'><IoIosMail/><span className='px-4 text-white'>info@farmersmarketplace.com</span></p>
              <p className='px-4 flex'><FaPhoneAlt/><span className='px-4 text-white'>+(1) 704-555-5</span> </p>
              <p className='px-4 flex'><IoLocation/><span className='px-4 text-white'>123 Main Street, Charlotte, NC 2820</span></p>
           </div>
           <div className='flex flex-row gap-4 text-xl py-4 text-accent '>
            <FaFacebook className='hover:text-white'/>
            <FaInstagram  className='hover:text-white'/>
            <FaTwitter  className='hover:text-white'/>
            <FaPinterest  className='hover:text-white'/>
            <FaYoutube   className='hover:text-white'/>
           {/* <a href='/'>
          <img src={Logo} className='w-[120px]' alt=''/>
           </a>  */}
         {/* </div>
          

          </div> */}
        {/* </div>  */}
        <div className='flex  w-full gap-2  px-16 text-white justify-center'>
          <div className='flex flex-col  items-start w-1/3'>
           <h1 className='font-primary py-2'>NEWSLETTER</h1>
           <p className='py-3 text-lg'>Subscribe to our Newsletter.</p>
           <form className='flex flex-col gap-4'>
             <input placeholder='Enter Email' className='px-8 py-3 '/>
             <button className='btn btn-lg btn-secondary py-4'>Subscribe Now</button>
           </form>
          </div>
          <div className='lg:w-1/3 w-full'>
          <h1 className='font-primary py-2'>USEFUL LINKS</h1>
          <div className='flex flex-col font-primary'>
            <a href='' className='hover:text-accent transition'>
              Home
             </a>
             <a href='' className='hover:text-accent transition'>
              Rooms
             </a>
             <a href='' className='hover:text-accent transition'>
              Restaurant
             </a>
             <a href='' className='hover:text-accent transition'>
              Spa
             </a>
             <a href='' className='hover:text-accent transition'>
              Contact
             </a>
          </div>
          </div>
          <div className='lg:w-1/3 w-full -px-2'>
            <h1 className='font-primary py-2'>GALLERY</h1>
           <div className='grid grid-rows-3 grid-cols-3 -gap-x-10 gap-2 pr-16'>
              {rooms.slice(0,6).map((room)=>(
                <img key={room} src={room.image} className='w-20 h-20' alt=''/>
              ))}
           </div>
          </div>  
        </div>
        
    </div>

  )
}

export default Contact