import React, {useContext} from 'react';
import {RoomContext} from '../context/RoomContext'

//headless ui mnu
import {Menu} from '@headlessui/react'

//icons
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  {name: '1 Người Lớn'},
  {name: '2 Người Lớn'},
  {name: '3 Người Lớn'},
  {name: '4 Người Lớn'},
  {name: '5 Người Lớn'},
  {name: '6 Người Lớn'},
  {name: '7 Người Lớn'},
  {name: '8 Người Lớn'},
  {name: '9 Người Lớn'},
  {name: '10 Người Lớn'},
]

const AdultsDropdown = () => {
  const {adults,setAdults} = useContext(RoomContext)
  return(
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/*btn*/}
       <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
         {adults}
         <BsChevronDown className='text-base text-accent-hover'/>
       </Menu.Button>
       {/*items*/}
       <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
          {
            lis.map((li,index)=>(
              <Menu.Item as='li'
              onClick={()=>setAdults(li.name)}
               key={index}
               className='border-b last-of-type:border-b-0 h-12
               hover:bg-accent hover:text-white w-full flex justify-center
               items-center cursor-pointer'>{li.name}</Menu.Item>
            ))
          } 
       </Menu.Items>
    </Menu>
  )
};


export default AdultsDropdown
