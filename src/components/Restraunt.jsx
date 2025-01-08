import React, { useContext } from 'react'
import Room from './Room'
import { RoomContext } from '../context/RoomContext'
import MenuRes from './MenuRes'
import { Parallax } from 'react-scroll-parallax'
import Breaker from './Breaker'


const Back=()=>{
  const {menu} = useContext(RoomContext)
  return(
    <div className=''>
       {/* {grid} */}
      <div className='grid lg:grid-cols-4 '>
       <div className='col-span-2'>

       </div>
       <div className='col-span-2 p-8'>
         <div className='grid grid-cols-2 grid-rows-2 gap-4 max-w-lg max-h-sm'>
          {menu.slice(0,6).map((room)=>{
            return <MenuRes room={room} key={room.id}/>
          })}
         </div>
       </div>

     </div>
    </div>
  )
}


const Restraunt = () => {
  
  return (
    <div className='w-full h-screen relative py-8 flex justify-between'>  
        <div className=' flex right-10 z-20'>
          <Back/>
        </div>
        <div className='w-full h-full py-8 bg-restraunt bg-cover'>  
      
         </div>
     
     
    </div>
 
  )
}

export default Restraunt
