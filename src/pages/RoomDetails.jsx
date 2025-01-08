import React,{useContext } from 'react'
import {useParams} from 'react-router-dom'
//components
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'
//import ScrollToTop from '../components/ScrollToTop'
//context
import { RoomContext } from '../context/RoomContext'
//icons
import { FaCheck } from 'react-icons/fa'

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const {id} = useParams()

  // get room
  const room = rooms.find(room => {
    return room.id === Number(id)
  })
   
  const{name, description, facilities, price, imageLg} = room;
  return (
  <section className='bg-primary'>
    {/* <ScrollToTop/> */}
    {/*banner*/}
    <div className='bg-room bg-cover bg-center bg-fixed h-[560px] relative 
    flex justify-center items-center'>
      {/*overlay*/}
      <div className='absolute w-full h-full bg-black/70 ' ></div>

      {/*title*/}
      <h1 className='text-6xl text-accent z-20 font-primary text-center'>
        {name}
      </h1>
    </div>
    <div className='container mx-auto text-accent '>
      <div className='flex flex-col lg:flex-row h-full py-24'>
        {/*left*/}
        <div className='w-full h-full lg:w-[60%] px-6 '>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img src={imageLg} alt='' className='mb-8'/>
            {/*facilities*/}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Tiện Nghi Phòng</h3>
              <p className='mb-12'>
                Đây là những tiện nghi và dịch vụ Khue Le Bleu hỗ trợ. Hãy liên lạc với lễ tân nếu cần bất kì dịch vụ hay thắc mắc nào.
              </p> 
            </div>
            {/*grid*/}
            <div className='grid grid-cols-3 gap-6 mb-12'>
              {facilities.map((item, index)=>{
                //destructure item
                const {name, icon} = item;
                return (
                <div key={index} className='flex items-center gap-x-3 flex-1'>
                  <div className='text-3xl text-accent'>{icon}</div>
                  <div className='text-base'>{name}</div>
                </div> 
              )
              })}
            </div>
        </div>
         {/*right*/}
         <div className='w-full h-full lg:w-[40%] '>
            {/*reservation*/}
          <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Đặt Phòng</h3>
                <div className='h-[60px]'>
                  <CheckIn/>
                </div>
                <div className='h-[60px]'>
                  <CheckOut/>
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown/>
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown/>
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                Kiểm Tra Giá Phòng
              </button>
         </div>
          {/*rules*/}
          <div>
             <h3 className='h3'>Luật</h3>
             <p className='mb-6'>
               Tại Khue Le Bleu, chúng tôi đề cao sự thoải mái và an toàn của mọi khách hàng. 
               Quý khách vui lòng tuân thủ các quy định của khách sạn như không hút thuốc trong 
               phòng, giữ gìn vệ sinh chung và tuân thủ giờ giấc quy định. Mọi thắc mắc hoặc yêu 
               cầu hỗ trợ, xin vui lòng liên hệ quầy lễ tân để được phục vụ kịp thời. Chúng tôi 
               luôn sẵn sàng giúp đỡ quý khách!
             </p>
             <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Giờ Nhận Phòng: 3:00 PM- 9:00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Giờ Trả Phòng: 12:00 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                 Không Thú Nuôi (Liên Hệ trước nếu cần thiết)
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                 Không Hút Thuốc Trong Nhà
              </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default RoomDetails;
