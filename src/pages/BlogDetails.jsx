import React,{useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
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
  <section className='bg-primary '>
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
    <div className='container mx-auto text-accent lg:h-auto h-[2800px] '>
      <div className='flex flex-col lg:flex-row h-full py-24'>
        {/*left*/}
        <div className='w-full h-full lg:w-[60%] px-6 '>
            <img src={image} alt='' className='mb-8'/>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
        </div>


         {/*right*/}
         <div className='w-full h-full lg:w-[40%] '>
            {/*reservation*/}
            <div>
              <input type="text" className='px-4 py-2 outline-none' placeholder='Tìm Kiếm' />
            </div>
            <div className='h-48 flex flex-col lg:gap-8'>
              <h1 className='pt-20 text-2xl'>Bài viết Phổ Biến</h1>
              {blogs.map((blog)=>(
                <div className=' lg:flex gap-4' key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                  <img src={blog.image} className='lg:w-24 w-36 lg:h-24 h-36 hover:scale-110 transition-all duration-300 '/>
                   <div className=' text-accent flex flex-col cursor-pointer'>

                   <h1 className='text-accent text-xl py-2 hover:underline'>{blog.name}</h1>
                  <span className='hover:text-white'>
                     Đọc Thêm
                  </span>
                   </div>
                   </Link>
                </div> 
               ))} 
            </div>

        </div>
      </div>
    </div>
  </section>
  )
};

export default BlogDetails;
