import React,{useState, useEffect} from 'react'
import { IoIosArrowDropup} from 'react-icons/io'

const ArrowUp = () => {
 const[header, setHeader] = useState(false)
 
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })
  
  return (
    <>
    {header ? (
    <div className='fixed bottom-8 right-8 z-50 text-accent'>
     <IoIosArrowDropup size={30} onClick={()=>window.scrollTo(0,0)}/>
    </div>
    ):(
      <>
      
      </>  
    )
    }
    </>
  )
}

export default ArrowUp