import React, {createContext, useEffect, useState} from 'react';
//data
import{menuData,blogData, roomData} from '../data'

//create-context
export const RoomContext = createContext();


const RoomProvider = ({children}) => {
    const [blogs, setBlogs] = useState(blogData);
    const [rooms, setRooms]=useState(roomData);
    const [menu, setMenu] = useState(menuData);
    const [adults, setAdults] =useState('2 Người Lớn');
    const [kids, setKids] =useState('0 Trẻ Em');
    const [total, setTotal]=useState(0);
    const [loading, setLoading] = useState(false);
    const [checkinDate, setCheckinDate] = useState('2025-01-01');
   

    useEffect(()=>{
      setTotal(Number(adults[0]) + Number(kids[0]))
    })

    const handleClick = (e) => {
      console.log(e);
      e.preventDefault()
      setLoading(true)
      //filter rooms based on total(person)
      const newRooms= roomData.filter((room)=> {
        return total <= room.maxPerson
      })
      setTimeout(()=>{
        setRooms(newRooms)
        setLoading(false)
      }, 3000)
    }
   
  return (
    <RoomContext.Provider value={{rooms, menu, adults, setAdults, kids, setKids, loading, blogs}}>
      {children}
    </RoomContext.Provider>
  )       
};

export default RoomProvider;
