import React,{ useState } from 'react';
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'
//icons
import {BsAlarm, BsCalendar} from 'react-icons/bs'

const CheckIn = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="relative flex items-center h-full w-full">
      <div className="relative w-full h-full">
        {/* Icon */}
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <BsCalendar className="text-accent text-base" />
        </div>
        {/* DatePicker */}
        <DatePicker
          className="w-full h-full pl-3 pr-4"
          selected={startDate}
          placeholderText="Ngày Nhận Phòng"
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default CheckIn;
