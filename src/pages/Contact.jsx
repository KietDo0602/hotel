import React,{useContext } from 'react'
import {useParams} from 'react-router-dom'
//components
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
//import ScrollToTop from '../components/ScrollToTop'
//context
import { RoomContext } from '../context/RoomContext'
import Breaker from '../components/Breaker'

//icons
import { FaCheck } from 'react-icons/fa'
import Map from '../components/Map'

const Contact = () => {
  
  return (
  <section className='bg-primary'>
    {/* <ScrollToTop/> */}
    {/*banner*/}
    <div className='bg-pages bg-fixed bg-cover bg-center h-[560px] relative 
    flex justify-center items-center'>
      {/*overlay*/}
      <div className='absolute w-full h-full bg-black/70 ' ></div>

      {/*title*/}
      <h1 className='text-6xl text-white z-20 font-primary text-center'>
         CONTACT US
      </h1>
    </div>
    <div className='container mx-auto lg:py-24 py-16 '>
      <div className='w-full lg:p-16 p-4 lg:h-screen  h-[1000px] flex lg:flex-row flex-col justify-between lg:gap-4 gap-8'>
        <div className='flex flex-col gap-4'>
           <h3 className='text-accent'>CONTACT US</h3>
           <p className='font-secondary text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Illum harum quibusdam fugit facilis voluptatem atque.
              Id quis dicta mollitia explicabo similique vel odio veniam voluptates.
               Rem totam consequatur animi ipsam!
           </p>
           <div className='py-8'>
              <div className='flex py-4  gap-5 px-4 border-b border-r-accent'>
                <div className='text-accent'>
                   <IoLocation size={20}/>
                </div>
                <div className='text-white'>
                   <h2 className='font-primary text-lg'>Our Locations</h2>
                   <p>Bur Road, New Town, Sans Fransisco</p>
                </div>
              </div>
              <div className='flex py-4  gap-5 px-4 border-b border-r-accent' >
                <div className='text-accent'>
                 <IoIosMail size={20}/>
                </div>
                <div className='text-white'>
                   <h2 className='font-primary text-lg' >Sent Emails</h2>
                   <p>example@gmail.com</p>
                </div>
             
              </div>
              <div className='flex py-4 gap-5 px-4 border-b border-r-accent'>
                <div className='text-accent'>
                  <FaPhoneAlt size={20}/>
                </div>
                <div className='text-white'>
                  <h2 className='font-primary text-lg'>Call Us Now</h2>
                  <p>+920 245 (2134) 890</p>
                </div>
              </div>
           </div>

        </div>
        <div className='w-full bg-secondary h-[540px] lg:py-10'>
          <form className='flex flex-col gap-4 p-4'>
            <label htmlFor="">GET IN TOUCH</label>
            <input type="text" placeholder="Your Name" className='py-4 px-2'/>
            <input type="email" placeholder="Your Email" className='py-4'/>
            <input type="password" placeholder="Your Password" className='py-4'/>
            <textarea type="text" placeholder="Your Message" className='py-8'/>
            <button className='btn btn-secondary btn-lg py-6'>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
    <Map/>
  </section>
  )
};

export default Contact;