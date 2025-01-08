import React,{useState} from 'react';
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'
//icons
import {BsAlarm, BsCalendar} from 'react-icons/bs'

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false)
  return( 
    <div className="relative flex items-center h-full w-full">
      <div className="relative w-full h-full">
        {/* Icon */}
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <BsCalendar className="text-accent text-base" />
        </div>
        {/* DatePicker */}
        <DatePicker
          className="w-full h-full pl-3 pr-4"
          selected={endDate}
          placeholderText="Ngày Trả Phòng"
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  )
};

export default CheckOut;
