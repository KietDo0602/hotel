import React from 'react'
import Spaz from '../assets/spa.jpg'

//parallax
import { Parallax } from 'react-scroll-parallax';


const Spa = () => {
  return (
    <div className='w-full h-96 bg-black '>
    <div className='w-90 h-90 grid grid-cols-2'>
     
     <div className='flex justify-center items-center'>
 
        <img src={Spaz} className='w-full h-full' />
   
     </div>
   
     </div>
    </div>
  )
}

export default Spa