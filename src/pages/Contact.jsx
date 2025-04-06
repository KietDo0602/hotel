import React, { useState } from 'react'
//components
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
//import ScrollToTop from '../components/ScrollToTop'
//context

//icons
import Map from '../components/Map'

const Contact = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Validate form fields
    const newErrors = {};
    if (!name) newErrors.name = 'Thiếu Tên!';
    if (!title) newErrors.title = 'Thiếu Tiêu Đề';
    if (!desc) newErrors.description = 'Thiếu Nội Dung';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If validation passes, redirect to Gmail
      const mailto = `mailto:khuelebleu@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Dear Khue Le Bleu,\n\n')}${encodeURIComponent(desc)}\n\nSincerely,\n${encodeURIComponent(name)}`
      window.location.href = mailto;
    }
  };


  const onNameChange = (event) => {
    setName(event.target.value);
  }
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onDescChange = (event) => {
    setDesc(event.target.value);
  }
  
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

              <a target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/haSZMPsEycJAtwNJA">
                <div className='flex py-4  gap-5 px-4 border-b border-r-accent'>
                  <div className='text-accent'>
                     <IoLocation size={20}/>
                  </div>
                  <div className='text-white'>
                     <h2 className='font-primary text-lg'>Địa Chỉ (Google Maps)</h2>
                     <p>KL6.15 Đường Kim Long 6, Đồi Rồng, Đồ Sơn, Hải Phòng, Việt Nam</p>
                  </div>
                </div>
              </a>

              <a target='_blank' rel='noopener noreferrer' href="mailto:khuelebleu@gmail.com">
                <div className='flex py-4  gap-5 px-4 border-b border-r-accent' >
                  <div className='text-accent'>
                   <IoIosMail size={20}/>
                  </div>
                  <div className='text-white'>
                     <h2 className='font-primary text-lg' >Email</h2>
                     <p>khuelebleu@gmail.com</p>
                  </div>
                </div>
              </a>

              <a target='_blank' rel='noopener noreferrer' href="tel:0965162005">
                <div className='flex py-4 gap-5 px-4 border-b border-r-accent'>
                  <div className='text-accent'>
                    <FaPhoneAlt size={20}/>
                  </div>
                  <div className='text-white'>
                    <h2 className='font-primary text-lg'>Gọi Chúng Tôi</h2>
                    <p>(+84) 0965162005</p>
                  </div>
                  </div>
              </a>
           </div>

        </div>
        <div className='w-full bg-secondary h-[640px] lg:py-10'>
          <div className='flex flex-col gap-4 p-4'>
            <label className='text-2xl text-accent' htmlFor="">Liên Lạc</label>
            <input type="text" value={name} onChange={onNameChange} placeholder="Tên Của Bạn" className='py-4 px-4'/>
            <input type="text" value={title} onChange={onTitleChange} placeholder="Tiêu Đề" className='py-4 px-4'/>
            <div className='h-[60px] text-accent'>
              <CheckIn/>
            </div>
            <div className='h-[60px] text-accent'>
              <CheckOut/>
            </div>
            <textarea type="text" value={desc} onChange={onDescChange} placeholder="Nội Dung" className='py-4 px-4'/>
            <button className='btn btn-secondary btn-lg py-6' onClick={handleSubmit}>Gửi Tin Nhắn</button>
            {errors && <p className="text-red">{errors.name ? errors.name : ''} {errors.title ? errors.title : ''} {errors.description ? errors.description : ''} </p>}
          </div>
        </div>
      </div>
    </div>
    <Map/>
  </section>
  )
};

export default Contact;
