import React from 'react'
import Logo from '../assets/loader.svg'

const Loader = () => {
  return (
    <div className='bg-primary w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex'>
         <img src={Logo} className='w-20 h-20 spin' />
         <span className='font-secondary text-white text-md mt-4 px-2 animate-fade-in'>ROYAL<br/>HOTELS</span>
        </div>
      </div>
  )
}

export default Loader