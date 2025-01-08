import React, {useContext} from 'react';
import {RoomContext} from '../context/RoomContext'

//headless ui mnu
import {Menu} from '@headlessui/react'

//icons
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  {name: '0 Trẻ Em'},
  {name: '1 Trẻ Em'},
  {name: '2 Trẻ Em'},
  {name: '3 Trẻ Em'},
  {name: '4 Trẻ Em'},
  {name: '5 Trẻ Em'},
]

const KidsDropdown = () => {
  const{kids, setKids} = useContext(RoomContext)
  return(
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/*btn*/}
       <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
         {kids === '0 Trẻ Em' ? 'Không Trẻ Em' : kids}
         <BsChevronDown className='text-base text-accent-hover'/>
       </Menu.Button>
       {/*items*/}
       <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
          {
            lis.map((li,index)=>(
              <Menu.Item 
               onClick={()=>setKids(li.name)}
               as='li'
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

export default KidsDropdown;
