import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ScreenSizeContext } from '../context/ScreenSizeContext'
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
  const { isMidMobile } = useContext(ScreenSizeContext);
  const {blogs} = useContext(RoomContext);

  return (
    <div>

      <div className='bg-primary'>
       <div className='bg-pages bg-cover bg-fixed bg-center h-[560px] relative flex justify-center items-center'>
             {/*overlay*/}
          <div className='absolute w-full h-full bg-black/70 ' ></div>
                 {/*title*/}
            <h1 className='text-6xl text-white z-20 font-primary text-center'>Blog</h1>
         </div>


         <div className='w-full lg:h-[1200px] h-[2000px] mx-auto container'>
            {/*reservation*/}

            <div className='w-full h-full  flex md:flex-row pt-24 flex-col justify-between'>
               <div className='md:w-2/3 h-full flex flex-col'>       
                   <div className='grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-1'>
                   {blogs.map((blog)=>(
                    <div className='flex flex-col w-full gap-1 px-6 py-4' key={blog.id}>
                      <Link to={`/blog/${blog.id}`}>
                       <img src={blog.image} className='lg:w-96 w-64  lg:h-96 h-64 hover:scale-110 transition-all duration-300 cursor-pointer'/>
                       <div className=' text-accent flex flex-col cursor-pointer'>
                       <h1 className='text-accent text-xl py-2 hover:underline'>{blog.name}</h1>
                       <div className='hover:text-white font-tertiary flex items-center'>
                         Đọc Thêm  <FaArrowRight/>
                       </div>
                    </div>
                    </Link>
                    </div>
               ))} 
               </div>
              {/* {pagination} */}
               <div className='flex flex-col justify-center items-center pt-8'>
              <div>
              {
               arr.map((ar)=>(
                <button key={ar.id} className='bg-accent p-4'>{ar.id}</button>
               ))
              }
             </div>
               </div>
               </div>
               <div className='md:w-1/3 h-full py-4'>
                  <div className='w-full h-screen flex flex-col text-white space-y-4'>
                    <h1 className='text-3xl text-accent'>Bài viết Phổ Biến</h1>
                     {blogs.map((blog)=>(
                      <>
                        <Link to={`/blog/${blog.id}`}>
                           <h1 className='underline underline-offset-4 cursor-pointer'>{blog.name}</h1>
                        </Link>
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
