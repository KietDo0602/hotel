import {useEffect, useState} from "react"
import { createContext,useContext } from "react"

export const ScreenSizeContext = createContext()

export const ScreenSizeProvider = ({children})=>{
    const[isMobile, setIsMobile] = useState(true)
    const[isMidMobile, setIsMidMobile] = useState(true)

    useEffect(()=>{
        //Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)');
    
        //Set the initial value of the 'isMobile' state variable
        setIsMobile(mediaQuery.matches)
    
        //Define a callback function to handle changes to the media query
        const handleMediaQueryChange =(event)=>{
          setIsMobile(event.matches)
        }
    
        //Add the callback function as a listener for change to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange)
        
        //Remove the listener when the component is unmounted
        return()=>{
          mediaQuery.removeEventListener('change',handleMediaQueryChange)
        }
      }, [window.matchMedia])
    
    
      useEffect(()=>{
        //Add a listener for changes to the screen size
        const mediaQueryMid = window.matchMedia('(max-width: 1000px)');
    
        //Set the initial value of the 'isMobile' state variable
        setIsMidMobile(mediaQueryMid.matches)
    
        //Define a callback function to handle changes to the media query
        const handleMediaQueryChange =(event)=>{
          setIsMidMobile(event.matches)
        }
    
        //Add the callback function as a listener for change to the media query
        mediaQueryMid.addEventListener('change', handleMediaQueryChange)
        
        //Remove the listener when the component is unmounted
        return()=>{
          mediaQueryMid.removeEventListener('change', handleMediaQueryChange)
        }
      }, [window.matchMedia])

      
    return(
        <ScreenSizeContext.Provider value={{isMidMobile , isMobile}}>
            {children}
        </ScreenSizeContext.Provider>
    )
}
