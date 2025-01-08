import React, {useContext} from 'react';
//context
import {RoomContext} from '../context/RoomContext'
//components
import Room from '../components/Room'

//loader
import {SpinnerDotted} from 'spinners-react'






const RoomsPage = () => {
  const {rooms, loading} = useContext(RoomContext)
  console.log(rooms)
  return (
    <section className='bg-primary'>
        <div className='bg-pages bg-cover bg-fixed bg-center h-[560px] relative flex justify-center items-center'>
             {/*overlay*/}
          <div className='absolute w-full h-full bg-black/70 ' ></div>
                 {/*title*/}
            <h1 className='text-6xl text-white z-20 font-primary text-center'>Các Phòng</h1>
         </div>
       {/*overlay & spinner*/}
       {loading && (
          <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center '>
            <SpinnerDotted color='white'/>
          </div>
        )
       }
      <div className='container mx-auto lg:px-0 p-4 '>
        <div className='text-center '>
          <div className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent'>KHUE LE BLEU</div>
          <h2 className='font-primary text-[45px] mb-4 text-white'>Phòng</h2>
        </div>
        {/*grid*/}
        <div className='grid grid-cols-1 max-w-xl mx-auto gap-[30px] 
        lg:grid-cols-3 md:grid-cols-2 lg:max-w-none lg:mx-0'>
          {rooms.map((room)=>{
            console.log(room)
            return <Room room={room} key={room.id}/>
          })}
        </div>
      </div>
    </section>
  )
};

export default RoomsPage
