import React,{useContext } from 'react'
import {useParams} from 'react-router-dom'
//components
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'
//import ScrollToTop from '../components/ScrollToTop'
//context
import { RoomContext } from '../context/RoomContext'
//icons
import { FaCheck } from 'react-icons/fa'

const BlogDetails = () => {
  const {blogs} = useContext(RoomContext)
  const {id} = useParams()

  // get room
  const blog = blogs.find(blog => {
    return blog.id === Number(id)
  })  
   
  const{name, description, image} = blog;
  return (
  <section className='bg-primary'>
    {/* <ScrollToTop/> */}
    {/*banner*/}
    <div className='bg-room bg-cover bg-center bg-fixed h-[560px] relative 
    flex justify-center items-center'>
      {/*overlay*/}
      <div className='absolute w-full h-full bg-black/70 ' ></div>

      {/*title*/}
      <h1 className='text-6xl text-accent z-20 font-primary text-center'>
        {name}
      </h1>
    </div>
    <div className='container mx-auto text-accent '>
      <div className='flex flex-col lg:flex-row h-full py-24'>
        {/*left*/}
        <div className='w-full h-full lg:w-[60%] px-6 '>
            <img src={image} alt='' className='mb-8'/>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            {/*facilities*/}
            {/*grid*/}
            <div>
             <h3 className='h3'>Hotel Rules</h3>
             <p className='mb-6'>
              Loren ipsum dolor sit amet consectour adiplising elit.
              Nihil nulla itaque lavoriaosa
             </p>
             <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-in: 3:00 PM- 9:00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-out: 10:30 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                 No Pets
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                 No Smoking
              </li>
             </ul>
          </div>
          <div className='w-full h-[540px] lg:py-10'>
               <form className='flex flex-col gap-4 p-4'>
                <label htmlFor="" className='text-3xl'>Leave A Comment</label>
                <div className='flex gap-8'> 
                  <input type="text" placeholder="Full Name" className='py-4 px-2 w-1/2'/>
                  <input type="email" placeholder="Email Address" className='py-4 w-1/2'/>
                </div>
                <textarea type="text" placeholder="Write Comments" className='py-8'/>
                <div className='w-1/3'>
                  <button className='btn btn-secondary btn-lg py-6'>SUBMIT NOW</button>
                </div>
              </form>
           </div>
        </div>


         {/*right*/}
         <div className='w-full h-full lg:w-[40%] '>
            {/*reservation*/}
            <div>
              <input type="text" placeholder='Search Post' />
            </div>
            <div className='h-48 flex lg:flex-col lg:gap-8'>
              <h1>Popular Post</h1>
              {blogs.map((blog)=>(
                <div className=' lg:flex gap-4' key={blog.id}>
                  <img src={blog.image} className='lg:w-24 w-36 lg:h-24 h-36 hover:scale-110 transition-all duration-300'/>
                   <div className=' text-accent flex flex-col cursor-pointer'>

                   <h1 className='text-accent text-xl py-2 hover:underline'>{blog.name}</h1>
                  <span className='hover:text-white'>
                     Read More
                  </span>
                   </div>
                </div> 
               ))} 
            </div>
            
          
            
          {/* <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn/>
                </div>
                <div className='h-[60px]'>
                  <CheckOut/>
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown/>
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown/>
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                book now for 
              </button>
         </div> */}

        </div>
      </div>
    </div>
  </section>
  )
};

export default BlogDetails;
