import React, {useState, useEffect} from 'react';
//login
import LogoWhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'
import Logo from '../assets/img/logo2Dark.svg'
import { BsMenuAppFill } from 'react-icons/bs';
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import {GrMenu } from 'react-icons/gr';
import { SlArrowDown } from "react-icons/sl";


const Header = () => {
  const[header, setHeader] = useState(false)
  const[openMenu, setOpenMenu] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return(
    <header
     className={
      `${
        header ? 'bg-red-800 py-2 lg:py-4 shadow-xl' : 'bg-transparent py-6'} fixed z-50 w-full transition-all duration-500`}>
       <div className='container mx-auto flex  justify-between items-center gap-y-1 flex-row lg:gap-y-0 '>
         {/*logo*/}
         <a href='/'>
            {header ? (
              <img className=' w-[80px] md:w-[100px] lg:w-[120px]' src={Logo}/>
            ) : (
              <img className='w-[80px] md:w-[100px] lg:w-[120px]' src={Logo}/>
            
            )}
         </a>

         {/* nav */}
         <nav className={`${header ? 'text-white' : 'text-white'} lg:flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8 hidden lg:block`}>
           <a href='/' className='hover:text-accent transition'>
            Home
           </a>
           <a href='/about' className='hover:text-accent transition'>
            About Us  
           </a>
           <div className='flex gap-x-1 group relative'>
            <a href='/rooms' className='hover:text-accent transition'>
              Rooms   
            </a>
            <a className='py-1 cursor-pointer'>
               <SlArrowDown size={10} className='group-hover:text-accent' />
            </a>  
            <div className=" absolute bg-red-800 w-48 h-auto rounded-b-sm border-b-2 border-accent  p-4 shadow-xl top-10 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='flex flex-col gap-2'>
                   <a href='/rooms' className='hover:text-accent transition'>
                   Rooms   
                  </a>
                  <a href='/room/1' className='hover:text-accent transition'>
                    Rooms Details   
                  </a>
                </div>
               </div>
           </div>

           <div className='flex gap-x-1 group relative'>
             <a href='/blog' className='hover:text-accent transition'>
               Blog
             </a>
             <a className='py-1 cursor-pointer'>
               <SlArrowDown size={10} className='group-hover:text-accent' />
             </a>  
             <div className=" absolute bg-red-800 w-48 h-auto rounded-b-sm border-b-2 border-accent  p-4 shadow-xl top-10 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='flex flex-col gap-2'>
                   <a href='/blog' className='hover:text-accent transition'>
                   Blog   
                  </a>
                  <a href='/blog/1' className='hover:text-accent transition'>
                    Blog Details   
                  </a>
                </div>
             </div>
           </div>
           <a href='/contact' className='hover:text-accent transition'>
            Contact
           </a>
         </nav>

        {/* {nav menu} */}
        <div className=' block lg:hidden text-white'>
         < CgMenuGridO  color='white' size={20} onClick={()=>setOpenMenu(!openMenu)}/>
         {openMenu &&
          <nav className={` bg-red-800  absolute right-0 top-0 h-screen lg:w-1/4 w-1/3 text-white flex flex-col font-tertiary tracking-[3px] text-[15px] items-start uppercase px-4 py-8 space-y-6`}>
            <div className='flex flex-col justify-start py-4'>
           < IoCloseOutline size={20} onClick={()=>setOpenMenu(!openMenu)} className='hover:rotate-90 transition-all duration-300'/>
            </div>
            <a href='/' className='hover:text-accent transition'>
             Home
            </a>
            <a href='/about' className='hover:text-accent transition'>
             About Us
            </a>
              
            <div className=' group relative'>
               <div className='flex gap-x-1'>
                <a href='/rooms' className='hover:text-accent transition'>
                  Rooms   
                </a>
                 <a className='py-1 cursor-pointer'>
                   <SlArrowDown size={10} className='hover:text-accent  hover:rotate-90 transition-all duration-300' />
                 </a>  
               </div> 
              <div className=" bg-red-800 h-auto rounded-b-sm border-b-2 border-accent  p-4 shadow-xl top-0 right-20 hidden group-hover:block transition-opacity duration-300">
                  <div className='flex flex-col gap-2'>
                     <a href='/rooms' className='hover:text-accent transition'>
                      Rooms   
                     </a>
                    <a href='/room/1' className='hover:text-accent transition'>
                      Rooms Details   
                    </a>
                  </div>
               </div>
           </div>
           

          <div className='group relative'> 
            <div className='flex gap-x-1'> 
              <a href='/blog' className='hover:text-accent transition'>
                Blog
              </a>
              <a className='py-1 cursor-pointer'>
                <SlArrowDown size={10} className='group-hover:text-accent hover:rotate-90 transition-all duration-300' />
              </a>
             </div>
              <div className=" bg-red-800 w-48 h-auto rounded-b-sm border-b-2 border-accent  p-4 shadow-xl top-0 right-20 hidden group-hover:block transition-opacity duration-300">
                 <div className='flex flex-col gap-2'>
                    <a href='/blog' className='hover:text-accent transition w-full'>
                    Blog   
                   </a>
                   <a href='/blog/1' className='hover:text-accent transition w-full'>
                     Blog Details   
                  </a>
                 </div>
              </div>
            </div>


            <a href='/contact' className='hover:text-accent transition'>
             Contact
            </a>
          </nav>
        }
        
        </div>
       </div>
    </header>
    )
};

export default Header;
