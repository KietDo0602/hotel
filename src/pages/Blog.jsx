import React from 'react'
import gym from '../assets/gym.jpg'
import hotel2 from '../assets/hotel2.jpg'
import ceo from '../assets/t-avt-1.png'
import rest from '../assets/img/restrauant.jpg'
import Spaz from '../assets/spaz.jpg'
import { useContext } from 'react'
import { ScreenSizeContext } from '../context/ScreenSizeContext'
import Breaker from '../components/Breaker'
import { RoomContext } from '../context/RoomContext'

const arr = [
  {
   id:1
  },
  {
   id:2
  },
  {
   id:3
  },
  {
   id:4
  }
]
const Blog = () => {
    const {isMidMobile} = useContext(ScreenSizeContext)
    const {blogs} = useContext(RoomContext)
  return (
    <div>

      <div className='bg-primary'>
       <div className='bg-pages bg-cover bg-fixed bg-center h-[560px] relative flex justify-center items-center'>
             {/*overlay*/}
          <div className='absolute w-full h-full bg-black/70 ' ></div>
                 {/*title*/}
            <h1 className='text-6xl text-white z-20 font-primary text-center'>Blog</h1>
         </div>


         <div className='w-full lg:h-[1200px] h-[800px] mx-auto container'>
            {/*reservation*/}

            <div className='w-full h-full flex md:flex-row pt-24 flex-col justify-between'>
               <div className='md:w-2/3 h-full flex flex-col'>       
                   <div className='grid grid-cols-2 grid-rows-2 gap-1'>
                   {blogs.map((blog)=>(
                    <div className='flex flex-col w-full  gap-1 px-6' key={blog.id}>
                       <img src={blog.image} className='lg:w-96 w-64  lg:h-96 w-64 hover:scale-110 transition-all duration-300'/>
                       <div className=' text-accent flex flex-col cursor-pointer'>
                       <h1 className='text-accent text-xl py-2 hover:underline'>{blog.name}</h1>
                       <span className='hover:text-white'>
                        Read More
                       </span>
                    </div>
                    </div>
               ))} 
               
           

               </div>
               <div className='flex flex-col justify-center items-center'>
              <div>
              {
               arr.map((ar)=>(
                  <button key={ar.id} className='bg-accent p-4'>{ar.id}</button>
                 ))
                }
             </div>
             </div>
               </div>
               <div className='md:w-1/3 h-full'>
                  <div className='bg-black w-1/2 p-6'>
                    <h2>Recent Posts</h2>
                    <input type="text" placeholder='Search Posts' className='p-1' />
                  </div>     
                  <div className='w-full h-screen flex flex-col text-accent space-y-4 py-8'>
                    <h1 className='text-2xl'>Popular Posts</h1>
                     {blogs.map((blog)=>(
                      <>
                        <h1 className='underline underline-offset-4'>{blog.name}</h1>
                      </>
                     ))}
                  </div>
               </div>
            </div>
         </div>

       
     </div>
    </div>
  )
}

export default Blog