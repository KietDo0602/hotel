import React from 'react'
import Reviews from './Reviews'



const ReviewsPage = () => {
  return (
    <>
    <div className='text-white flex flex-col items-center py-4'>
      <span className='text-md text-accent'>Review</span>
      <h1 className='text-3xl p-2'>Khách Hàng Nói Gì</h1>
      <p className='py-2 text-center'>Tọa lạc tại Đồ Sơn, Hải Phòng sẽ mang đến trải nghiệm yên bình mà bạn cần cho một kỳ nghỉ đầy cảm hứng.</p>
    </div>
    <section className=' bg-review h-[500px] flex items-center justify-center text-center flex-col bg-cover bg-no-repeat bg-fixed text-4vw'>
      <Reviews/>
   </section>
   </>
  )
}

export default ReviewsPage
