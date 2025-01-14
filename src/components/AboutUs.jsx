import React from 'react'


const AboutUs = () => {
  return (
    <div className='w-full lg:h-screen flex lg:flex-row flex-col justify-between lg:mt-36 mt-8 lg:px-24 px-8 '>
      <div className='w-3/4 h-full bg-center' style={{backgroundImage:"url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>
       </div>
      <div className='text-white lg:w-1/2 w-full flex flex-col lg:justify-center justify-start lg:px-8 px-2 lg:mb-0 mb-16'>
        <h2 className='text-lg py-2 font-secondary text-accent'>Về Chúng Tôi</h2>
        <h1 className='text-6xl font-primary py-2'>Villa Sang Trọng <br/> tại <br/> Đồ Sơn, <br/> Hải Phòng.</h1>
        <p className='text-lg '>
          Khue Le Bleu không chỉ là nơi lưu trú, mà còn là một trải nghiệm đẳng cấp với dịch vụ xuất sắc. Khách sạn được thiết kế với phong cách hiện đại, kết hợp với những yếu tố thiên nhiên, tạo nên một không gian thư giãn hoàn hảo. Mỗi phòng nghỉ tại đây đều được trang bị tiện nghi cao cấp, từ giường ngủ êm ái đến ban công nhìn ra biển, mang lại cảm giác thoải mái và dễ chịu cho khách hàng.
        </p>
        <div className='flex justify-start w-1/2 py-6'>
           <button className='btn btn-lg btn-primary mx-auto'>Tìm Hiểu</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
