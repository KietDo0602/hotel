import React from 'react'
import Blog from './Blog'

const BlogPage = () => {
  return (
    <div  className='w-full h-[800px] flex lg:flex-row flex-col'>
        <div className='lg:w-1/4 h-1/2 w-full text-white flex flex-col justify-end  items-center p-4 text-center'>
          <h1 className='text-accent text-2xl font-primary'>Blog</h1>
          <p className='font-secondary'>Đọc, tìm hiểu thêm về Khue Le Bleu và Đồ Rồng Đồ Sơn. 
          </p>
          <div className='py-8 px-6 hidden lg:block'>
            <button className='btn btn-md btn-secondary p-4'><a href="/blog">Đọc Thêm</a></button>
          </div>
        </div>
        <div className='lg:w-3/4 w-full p-4'>
         <Blog/>
        </div>   
    </div>
  )
}

export default BlogPage
