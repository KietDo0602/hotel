import React from 'react'
import Reviews from './Reviews'



const ReviewsPage = () => {
  return (
    <>
    <div className='text-white flex flex-col items-center py-4'>
      <span className='text-md text-accent'>TESTIMONIALS</span>
      <h1 className='text-3xl p-2'>What Our Clients Are Saying</h1>
      <p className='py-2 text-center'>Located in San Francisco, Royal Hotels Provide Peaceful Experience  You need For an Inspiring Stay.</p>
    </div>
    <section className=' bg-review h-[500px] flex items-center justify-center text-center flex-col bg-cover bg-no-repeat bg-fixed text-4vw'>
      <Reviews/>
   </section>
   </>
  )
}

export default ReviewsPage