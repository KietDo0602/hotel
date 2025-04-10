import React, {createContext, useEffect, useState} from 'react';
//data
import { 
  blogData, 
  roomData, 
  formatDate, 
  extractNumber,
  generateBookingLink,
  roomPhotos,
} from '../data'

//create-context
export const RoomContext = createContext();

const RoomProvider = ({children}) => {
    const [blogs, setBlogs] = useState(blogData);
    const [rooms, setRooms]= useState(roomData);
    const [photos, setPhotos] = useState(roomPhotos);
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
    <RoomContext.Provider value={{checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, rooms, adults, setAdults, kids, setKids, loading, blogs, photos, handleClick}}>
      {children}
    </RoomContext.Provider>
  )       
};

export default RoomProvider;
