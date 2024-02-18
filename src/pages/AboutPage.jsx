import React,{useContext} from 'react'
import hotel from '../assets/hotel.jpg'
import rest from '../assets/img/restrauant.jpg'
import Spaz from '../assets/spaz.jpg'
import pool from '../assets/swimmingpool.jpg'
import gym from '../assets/gym.jpg'
import hotel2 from '../assets/hotel2.jpg'
import ceo from '../assets/t-avt-1.png'
import { IoStarSharp } from "react-icons/io5";
import HeroSlider from '../components/HeroSlider'
import AboutUs from '../components/AboutUs'
import Breaker from '../components/Breaker'
import Amenities from '../components/Amenities'
import ReviewsPage from '../components/ReviewsPage'
import Facilities from '../components/Facilities'
import { ScreenSizeContext } from '../context/ScreenSizeContext';
import AOS from "aos";
import "aos/dist/aos.css";
import { teamList } from '../data'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade, Autoplay, Pagination} from 'swiper'
import { FaQuoteLeft } from 'react-icons/fa6'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css'
import 'swiper/css/effect-fade'

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
  easing:true,
  
});

const slides =[
  { 
    id:1,
    title:"A Regal Experience Beyond Expectations!",
    description:'The amenities at Royal Hotels are truly top-notch. The spa offered a rejuvenating escape, and the fine dining restaurant served exquisite cuisine that surpassed my expectations.',
    
  },
  { 
    id:2,
    title:"A Regal Experience Beyond Expectations!",
    description:'Royal Hotels strikes the perfect balance between luxury and comfort, making it an ideal choice for those seeking a truly indulgent getaway. I cannot wait to return to this haven of sophistication and relaxation.',
    
  },
  {
    id:3,
    title:"Unparalleled Service and Unforgettable Memories",
    description:'Whether you are looking for a romantic getaway or a luxurious escape, Royal Hotels delivers on every front. The seamless blend of opulence and warmth makes it a standout choice for those who appreciate the finer things in life.',
    
  }
]






const AboutPage = () => {
  const {isMobile, isMidMobile} = useContext(ScreenSizeContext)

  let r = 2
  if(isMobile){
    r = 1
  } else if (isMidMobile){
    r=2
  } else{
    r=3
  }
  
  const swiperParams = {
    spaceBetween: 50,
    slidesPerView:r,
    autoplay: {
      delay: 3000, // set the autoplay delay in milliseconds
      disableOnInteraction: false, // allow manual interaction to stop autoplay
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
  };
  const grid2ContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(3, 0.5fr)',
      gap: '1rem',
      gridTemplateAreas: '"a b" "c d" "e f" "g h"',
    };
  

  const gridSmallDeviceStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    // gridTemplateRows:'repeat(4, 1fr)',
    gap:'1rem',
    gridTemplateAreas:'"a""b" "c" "d" "e" "f" "g" "h"',
  };
    const gridItem2Style = {
      // background: '#ccc',
      padding: '.5rem', 
      //original 1rem
    };




  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(1, 0.5fr)',
    gap: '1.5rem',
    gridTemplateAreas: '"a b c d"',
  };
  const gridItemStyle = {
    // background: '#ccc',
    padding: '0rem', 
    //original 1rem
  };




  return (
    <div className='bg-primary'>
       <div className='bg-pages bg-cover bg-fixed bg-center h-[560px] relative flex justify-center items-center'>
             {/*overlay*/}
          <div className='absolute w-full h-full bg-black/70 ' ></div>
                 {/*title*/}
            <h1 className='text-6xl text-white z-20 font-primary text-center'>About Us</h1>
         </div>
       {/* about us */}
      <div>
        <div className='w-full lg:h-screen mt-28 flex flex-col lg:flex-row justify-between mx-auto container '>
         <div className='text-white lg:w-3/4 w-full flex flex-col sm:justify-start justify-start xl:px-12 px-6  lg:text-start text-center'>
            {/* <h1 className='text-xl text-white z-20 font-primary text-start'>About Us</h1> */}
            <h1 className='xl:text-6xl text-2xl font-primary py-2'>Luxury<br/> Hotel in The Heart of <br/>San Francisco.</h1>
            <p className='xl:text-lg text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, cum eveniet ullam commodi voluptas magni voluptatem laboriosam saepe, ea modi, aperiam nihil! Ex ducimus distinctio ut dicta, reiciendis ab aliquid.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. 
             </p>
             <div className='flex flex-col justify-center w-full items-center'>
              <div className='flex gap-24 px-4 py-8'>
                <img src={ceo} className='p-2 w-28 h-28'/>
                <div className='flex flex-col justify-center'>
                   <h1 className='text-2xl'>Mark Austin</h1>
                   <p>CEO, ROYAL HOTELS</p>
                </div>
              </div>
             </div>
            
         <div className='lg:flex lg:w-1/2 w-full justify-start py-6 px-10 '>
            <button className='btn btn-lg btn-primary mx-auto'>MAKE A BOOKING</button>
         </div>
         </div>
         <div className='flex flex-col items-center border-l border-red-800'>
             <img src={hotel2} className='lg:w-full lg:h-full h-72  relative px-4 py-6 hover:scale-110 transition-all duration-300 hidden lg:block'/>
            {/* <img src={hotel2} className='w-full h-full -py-48'/> */}
          </div>
        </div>
      </div>


       {/* {Amenities} */}

        <div className='w-full h-full flex lg:py-16 py-16 px-4'>
          <div className='w-1/4 h-[600px]'  style={{backgroundImage:"url('../assets/img/spaz.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>


          </div>
          <div className='w-1/2 h-[800px] flex flex-col gap-4 p-4'>
            <div className='w-full h-1/2' style={{backgroundImage:"url('../assets/img/hotel2.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>

            </div>
            <div className='w-full h-1/2' style={{backgroundImage:"url('../assets/img/hotel.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>

            </div>

          </div>
          <div className='w-1/4 h-[600px]'  style={{backgroundImage:"url('../assets/img/spaz.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>


          </div>





        </div>

         
        {/*YEARS OF EXPERIENCE*/}
        
        <div className='w-full h-48 text-white flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center text-accent font-primary font-semibold text-3xl py-8'>
            Our Service
          </div>
          <div className='flex gap-8'>
           <div>
              <h1 className='text-3xl text-red-800 font-primary'>17+</h1>
              <span className='text-lg font-secondary'>Years of Hospitality</span>
           </div> 
           <div>
            <h1 className='text-3xl text-red-800 font-primary'>80+</h1>
            <span className='text-lg font-secondary'>Luxurious Rooms</span>
           </div>
           <div>
             <h1 className='text-3xl text-red-800 font-primary'>57+</h1>
             <span className='text-lg font-secondary'>Dedicated Staff Members</span>
           </div>
           <div>
             <h1 className='text-3xl text-red-800'>21+</h1>
             <span className='text-lg font-secondary'>Awards and Accolades</span>
           </div>
          </div> 
        </div>


        {/*TEAMS*/}

        <div className='w-full lg:h-[600px] h-[900px] container mx-auto '>
            <div className='w-full flex flex-col items-start px-28 justify-center bg-primary py-12'>
              {/* <img src={Logo} className='w-28 h-28 opacity-80 '/> */}
              <h1 className='text-accent text-2xl'></h1>
              <p className='w-1/2 text-start py-4 text-white text-xl'></p>
             </div>
            <div className='flex flex-col items-center'>
               <div className='w-full flex flex-col items-center px-28 justify-center  py-12'>
                 {/* <img src={Logo} className='w-28 h-28 opacity-80 '/> */}
                   <h1 className='text-accent text-3xl font-bold font-primary'>OUR TEAMS</h1>
                  <p className='w-1/2 text-center py-4 text-white text-xl'>Staff members at Royal Hotels</p>
                </div>
                <div className='px-4'> 
                <div style={isMidMobile ? grid2ContainerStyle : gridContainerStyle} className='mt-2 w-full flex flex-col justify-end xl:px-4'>
                  {
                    teamList.slice(0,6).map((item)=>(
                    <div key={item.id} data-aos="zoom-in-down" style={{ ...gridItemStyle, gridArea: `${item.id}`}} className='shadow-xl hover:scale-110 transition-all duration-300 flex flex-col items-center'>
                       <img src={item.icon} className='w-full h-auto overflow-hidden '/>
                       <span className='lg:text-xl text-accent text-center'>{item.name}</span>
                       <p className='text-accent p-2'>{item.title}</p>
                    </div>
                     ))
                   }
                </div>
              </div> 
              </div>  
        </div>

        {/* Reviews */}

      <div className='container mx-auto'>
      <div className='pt-28'>
        <div className='py-4'>
          <h2 className='text-accent'>Customer Reviews</h2>
          <h1 className='text-white text-4xl'>Royal Client's feedback <br/> about services</h1>
        </div>
      <Swiper {...swiperParams}  modules={[EffectFade, Autoplay, Pagination]}>
         {slides.map((slide) => {
                //destructure slide
            const {id,img, title, description}= slide;
              return (
               <SwiperSlide  className='h-full w-full bg-red-800' key={id}>
                 <div className=' text-white text-center p-4'>
                   <p className='font-secondary italic text-black lg:text-2xl text-xl'><FaQuoteLeft className='text-accent' />{description}</p>
                   <div className='flex flex-col items-center py-2'>
                    
                   </div>
                
                 </div>
               </SwiperSlide>
                 )
               })}
        </Swiper>
        </div>
      </div>     
       
      <Breaker/>
    </div>
  )
}

export default AboutPage