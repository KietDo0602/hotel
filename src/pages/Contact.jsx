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
         LIÊN HỆ
      </h1>
    </div>
    <div className='container mx-auto lg:py-24 py-16 '>
      <div className='w-full lg:p-16 p-4 lg:h-screen  h-[1000px] flex lg:flex-row flex-col justify-between lg:gap-4 gap-8'>
        <div className='flex flex-col gap-4'>
           <h3 className='text-2xl text-accent'>LIÊN HỆ</h3>
           <p className='font-secondary text-white'>
             Trang liên hệ với chúng tôi tại Khue Le Bleu luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của quý khách. 
             Để liên hệ, quý khách có thể gọi điện thoại, gửi email hoặc trực tiếp ghé thăm quầy lễ tân của villa. 
             Chúng tôi cam kết sẽ phản hồi nhanh chóng và tận tâm để đảm bảo quý khách có trải nghiệm tốt nhất. 
           </p>
           <div className='py-8'>
              <div className='flex py-4  gap-5 px-4 border-b border-r-accent'>
                <div className='text-accent'>
                   <IoLocation size={20}/>
                </div>
                <div className='text-white'>
                   <h2 className='font-primary text-lg'>Địa Chỉ</h2>
                   <p>KL6.15 Đường Kim Long 6, Đồi Rồng, Đồ Sơn, Hải Phòng, Việt Nam</p>
                </div>
              </div>
              <div className='flex py-4  gap-5 px-4 border-b border-r-accent' >
                <div className='text-accent'>
                 <IoIosMail size={20}/>
                </div>
                <div className='text-white'>
                   <h2 className='font-primary text-lg' >Email</h2>
                   <p>khuelebleu@gmail.com</p>
                </div>
             
              </div>
              <div className='flex py-4 gap-5 px-4 border-b border-r-accent'>
                <div className='text-accent'>
                  <FaPhoneAlt size={20}/>
                </div>
                <div className='text-white'>
                  <h2 className='font-primary text-lg'>Gọi Chúng Tôi</h2>
                  <p>(+84) 0965162005</p>
                </div>
              </div>
           </div>

        </div>
        <div className='w-full bg-secondary h-[540px] lg:py-10'>
          <form className='flex flex-col gap-4 p-4'>
            <label className='text-2xl text-accent' htmlFor="">Liên Lạc</label>
            <input type="text" placeholder="Tên Của Bạn" className='py-4 px-4'/>
            <input type="email" placeholder="Email" className='py-4 px-4'/>
            <input type="text" placeholder="Tiêu Đề" className='py-4 px-4'/>
            <textarea type="text" placeholder="Nội Dung" className='py-4 px-4'/>
            <button className='btn btn-secondary btn-lg py-6'>Gửi Tin Nhắn</button>
          </form>
        </div>
      </div>
    </div>
    <Map/>
  </section>
  )
};

export default Contact;
