import React from 'react'


const AboutUs = () => {
  return (
    <div className='w-full lg:h-screen flex lg:flex-row flex-col justify-between lg:mt-36 mt-8 lg:px-24 px-8 '>
      <div className='w-3/4 h-full bg-center' style={{backgroundImage:"url('../11.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>
       </div>
      <div className='text-white lg:w-1/2 w-full flex flex-col lg:justify-center justify-start lg:px-8 px-2 lg:mb-0 mb-16'>
        <h2 className='text-lg py-2 font-secondary'>About Us</h2>
        <h1 className='text-6xl font-primary py-2'>Luxury<br/> Hotel in The Heart of <br/>San Francisco.</h1>
        <p className='text-lg '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.
        </p>
        <div className='flex justify-start w-1/2 py-6'>
           <button className='btn btn-lg btn-primary mx-auto'>DISCOVER MORE</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs