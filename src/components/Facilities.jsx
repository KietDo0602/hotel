import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import MenuRes from './MenuRes'
import {ScreenSizeContext} from '../context/ScreenSizeContext'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 80,
    easing:true,
    
});

const Back=()=>{
  const {menu} = useContext(RoomContext)
  return(
    <div className=''>
       {/* {grid} */}
      <div className='grid lg:grid-cols-4 '>
       <div className='col-span-2'>

       </div>
       <div className='col-span-2 p-0'>
         <div className='flex flex-wrap w-full h-full'>
          {menu.slice(0,6).map((room)=>{
            console.log(room)
            return <MenuRes room={room} key={room.id}/>
          })}
         </div>
       </div>

     </div>
    </div>
  )
}

const Facilities = () => {
    const {isMidMobile} = useContext(ScreenSizeContext)

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '1rem',
        gridTemplateAreas: '"a b" "c d" "e f" "g h"',
      };
    

      const gridSmallDeviceStyle = {
        display:'grid',
        gridTemplateRows:'repeat(1, 1fr)',
        gap:'1rem',
        gridTemplateAreas:'"a" "b" "c" "d" "e" "f" "g" "h"',
      };

      const gridItemStyle = {
        padding: '1.5rem', 
      };
    
      return (
        <>
      {/*FLEX*/}
      
        <div className='w-full h-full flex flex-col  justify-center lg:p-24 p-0 '>
          <div className=' hidden lg:block'>
           <div className='flex flex-col items-start' data-aos="fade-down" >
              <h1 className='text-white py-16 px-3 text-3xl font-primary'>TIỆN NGHI & DỊCH VỤ</h1>
           </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' >
              <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/outside.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
              
            </div>
            <div className='lg:w-1/2' data-aos="zoom-in" >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                <h1 className='text-left text-3xl text-accent font-secondary p-8'>Quán Cà Phê</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center'>
                    Quán cà phê nhỏ KhueLeBleu Café nằm ngay dưới khách sạn Khue Le Bleu tại Hải Phòng là một nơi lý tưởng để 
                    thưởng thức thức uống đầy hương vị. Gần bờ biển, quán cà phê mang đến không gian thoáng đãng, với chỗ ngồi 
                    ngoài trời rộng rãi, sẽ mang đến những trải nghiệm uống cà phê tuyệt vời.
                   </p>
              </div>  
            </div>
          </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4   hover:scale-110 transition-all duration-300' > 
                 <h1 className='text-left text-3xl text-accent font-secondary p-8'>Ăn Sáng</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center'>
                    Tại Khue Le Bleu, bữa sáng trở thành một trải nghiệm gọn gàng với nhiều lựa chọn hấp dẫn mà khách hàng phải 
                    chọn trước. Từ các món ăn địa phương như bún cá cay hải phòng, phở, bánh mì cho đến các bữa ăn quốc tế như mì ý, 
                    khách hàng sẽ được trải nghiệm một bữa sáng tuyệt vời được phục vụ tận tình, đảm bảo mọi khẩu vị đều được thỏa mãn.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2' >
               <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/buncacay.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

               </div>

            </div>
          </div>
          <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2 w-full' >
               <div className='lg:h-screen h-48 w-full bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/kitchen3.jpg')", backgroundAttachment:'fixed', background:'cover'}}>

              </div>
           
            </div>
            <div className='lg:w-1/2' data-aos="zoom-in"  >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-3xl text-accent font-secondary p-8'>Bếp & Phòng Ăn</h1>
                  <p className='max-w-lg font-secondary text-white text-center'>
                    Khue Le Bleu còn mang đến tiện ích độc đáo với nhà bếp trên tầng năm, nơi khách hàng có thể đặt trước để sử dụng. 
                    Đây là không gian lý tưởng để tự tay chuẩn bị những bữa ăn ngon lành với đầy đủ dụng cụ và thiết bị hiện đại,
                    mang lại cảm giác như ở nhà. Ngoài ra, tại sân sau của khách sạn, khách hàng có thể tận hưởng những buổi tiệc n
                    ướng với bếp BBQ, hoàn hảo cho những dịp tụ tập gia đình và bạn bè trong không gian thoáng đãng và thư giãn.
                 </p>
               </div> 
             </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-3xl text-accent font-secondary p-8'>Trò Chơi & Karaoke</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center'>
                    Khue Le Bleu mang đến nhiều lựa chọn giải trí hấp dẫn với kho game PS4 đa dạng, các trò chơi board game như cờ vua, poker, cờ tướng,
                    và dịch vụ karaoke hiện đại. Khách hàng có thể thỏa sức vui chơi cùng bạn bè và gia đình trong không gian thoải mái, thư giãn. 
                    Từ các tựa game PS4 đình đám, những cuộc thi board game kịch tính, đến những giờ phút hát karaoke sôi động, Khue Le Bleu
                    đảm bảo mang lại những trải nghiệm vui vẻ và đáng nhớ.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2'>
              <div className='w-full lg:h-screen h-48 bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/boardgame.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
                
            </div>
          </div>
          </div>



           {/* Nav */}
           <div className='block lg:hidden'> 
            <div className='flex flex-col items-center' data-aos="fade-right" >
               <h1 className='text-white py-16 mt-24 px-3 text-3xl font-primary'>TIỆN NGHI & DỊCH VỤ</h1>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
               <div className='lg:w-1/2' data-aos="zoom-in" >
              <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                <h1 className='text-left text-lg text-accent font-secondary p-8'>Quán Cà Phê</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center'>
                    Quán cà phê nhỏ KhueLeBleu Café nằm ngay dưới khách sạn Khue Le Bleu tại Hải Phòng là một nơi lý tưởng để 
                    thưởng thức thức uống đầy hương vị. Gần bờ biển, quán cà phê mang đến không gian thoáng đãng, với chỗ ngồi 
                    ngoài trời rộng rãi, sẽ mang đến những trải nghiệm uống cà phê tuyệt vời.
                   </p>
              </div>  
               </div>
               <div className='lg:w-1/2' >
                 <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/outside.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}></div>
               </div>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4   hover:scale-110 transition-all duration-300' > 
                 <h1 className='text-left text-lg text-accent font-secondary p-8'>Ăn Sáng</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center'>
                    Tại Khue Le Bleu, bữa sáng trở thành một trải nghiệm gọn gàng với nhiều lựa chọn hấp dẫn mà khách hàng phải 
                    chọn trước. Từ các món ăn địa phương như bún cá cay hải phòng, phở, bánh mì cho đến các bữa ăn quốc tế như mì ý, 
                    khách hàng sẽ được trải nghiệm một bữa sáng tuyệt vời được phục vụ tận tình, đảm bảo mọi khẩu vị đều được thỏa mãn.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2' >
               <div className='lg:h-screen h-48 w-full bg-fixed bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/buncacay.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>

            </div>
             </div>
             <div className='flex lg:flex-row flex-col  justify-between'>
             <div className='lg:w-1/2' data-aos="zoom-in"  >
                <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                  <h1 className='text-left text-lg text-accent font-secondary p-8'>Bếp & Phòng Ăn</h1>
                  <p className='max-w-lg font-secondary text-white text-center'>
                    Khue Le Bleu còn mang đến tiện ích độc đáo với nhà bếp trên tầng năm, nơi khách hàng có thể đặt trước để sử dụng. 
                    Đây là không gian lý tưởng để tự tay chuẩn bị những bữa ăn ngon lành với đầy đủ dụng cụ và thiết bị hiện đại,
                    mang lại cảm giác như ở nhà. Ngoài ra, tại sân sau của khách sạn, khách hàng có thể tận hưởng những buổi tiệc n
                    ướng với bếp BBQ, hoàn hảo cho những dịp tụ tập gia đình và bạn bè trong không gian thoáng đãng và thư giãn.
                 </p>
               </div>
             </div>
             <div className='lg:w-1/2 w-full' >
               <div className='lg:h-screen h-48 w-full bg-center bg-cover' style={{backgroundImage:"url('/src/assets/img/kitchen3.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>
             </div>
            </div>
             </div>
             <div className='flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-1/2' data-aos="zoom-in">
               <div className='flex col-span-1 flex-col justify-center items-center text-accent font-primary lg:text-lg p-4' > 
                 <h1 className='text-left text-lg text-accent font-secondary p-8'>Trò Chơi & Karaoke</h1>
                  <p className='max-w-lg p-8 font-secondary text-white text-center text-lg'>
                    Khue Le Bleu mang đến nhiều lựa chọn giải trí hấp dẫn với kho game PS4 đa dạng, các trò chơi board game như cờ vua, poker, cờ tướng,
                    và dịch vụ karaoke hiện đại. Khách hàng có thể thỏa sức vui chơi cùng bạn bè và gia đình trong không gian thoải mái, thư giãn. 
                    Từ các tựa game PS4 đình đám, những cuộc thi board game kịch tính, đến những giờ phút hát karaoke sôi động, Khue Le Bleu
                    đảm bảo mang lại những trải nghiệm vui vẻ và đáng nhớ.
                 </p>
                </div> 
            </div>
            <div className='lg:w-1/2'>
              <div className='w-full lg:h-screen h-48 bg-center bg-cover' style={{backgroundImage:"url('src/assets/img/boardgame.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}} >

              </div>
            </div>
             </div>
            </div>
        </div>
        </>
      );
}

export default Facilities
