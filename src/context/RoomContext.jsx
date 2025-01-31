import React, {createContext, useEffect, useState} from 'react';
//data
import { 
  menuData, 
  blogData, 
  roomData, 
  formatDate, 
  extractNumber,
  generateBookingLink,
} from '../data'

//create-context
export const RoomContext = createContext();

const RoomProvider = ({children}) => {
    const [blogs, setBlogs] = useState(blogData);
    const [rooms, setRooms]= useState(roomData);
    const [menu, setMenu] = useState(menuData);
    const [adults, setAdults] = useState('2 Người Lớn');
    const [kids, setKids] = useState('0 Trẻ Em');
    const [total, setTotal]= useState(0);
    const [loading, setLoading] = useState(false);
    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);

    useEffect(()=>{
      setTotal(Number(adults[0]) + Number(kids[0]))
    })

    const handleClick = (e) => {
      if (checkinDate === null || checkoutDate === null) {
        window.open('https://www.booking.com/hotel/vn/khue-le-bleu-villa.vi.html', '_blank');
        return;
      }
      const checkinRes = formatDate(checkinDate);
      const checkoutRes = formatDate(checkoutDate);
      const adultsRes = extractNumber(adults);
      const kidsRes = extractNumber(kids);

      const res = generateBookingLink(checkinRes, checkoutRes, adultsRes, kidsRes);
      window.open(res, '_blank');
    }
   
  return (
    <RoomContext.Provider value={{checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, rooms, menu, adults, setAdults, kids, setKids, loading, blogs, handleClick}}>
      {children}
    </RoomContext.Provider>
  )       
};

export default RoomProvider;
