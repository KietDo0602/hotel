import React from 'react'
import { LoaderLogo } from '../assets'

const Loader = () => {
  return (
    <div className='bg-primary w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex'>
         <img src={LoaderLogo} className='w-20 h-20 spin' />
         <span className='font-secondary text-white text-md mt-4 px-2 animate-fade-in'>KHUE <br/>LE BLEU</span>
        </div>
      </div>
  )
}

export default Loader
