import React,{useContext} from 'react';
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {
  const { rooms, adults, kids } = useContext(RoomContext);
  const handleClick2 = (e) => {
    console.log(e);
    console.log(adults);
    console.log('====================');
  }
  return(
   <div className='h-[130px]  w-full md:h-[70px]'>
     <div className='flex flex-col w-full h-full md:flex-row'>
       <div className='flex-1 border-r'>
         <CheckIn/>
       </div>
       <div className='flex-1 border-r'>
         <CheckOut/>
       </div>
       <div className='flex-1 border-r'>
        <AdultsDropdown/>
       </div>
       <div className='flex-1 border-r'>
         <KidsDropdown/>
       </div>
       {/*btn*/}
       <button
         onClick={(e)=>handleClick2(e)}
         className='btn btn-primary'
       >
         KIỂM TRA
       </button>
     </div>
    </div>
    )
};

export default BookForm;
