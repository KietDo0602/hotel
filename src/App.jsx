import React,{useEffect, useState}from 'react';
//components
import Header from  './components/Header'
import Footer from  './components/Footer'
//pages
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'

//react router
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact';
import RoomsPage from './pages/RoomsPage';
import AboutPage from './pages/AboutPage';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Loader from './components/Loader';

import ArrowUp from './components/ArrowUp';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Home/>
   },
   {
    path:'/about',
    element:<AboutPage/>
   },
   {
    path:'/rooms',
    element:<RoomsPage/>
   },
   {
    path:'/room/:id',
    element:<RoomDetails />
   },
   {
    path:'/contact',
    element:<Contact/>
   },
   {
    path:'/blog',
    element:<Blog/>
   },
   {
    path:'/blog/:id',
    element:<BlogDetails/>
   }
  ]);

const App = () => {
  const [isLoading, setIsLoading]=useState(true)

   useEffect(()=>{
     setTimeout(()=>{
        setIsLoading(false)
     }, 2000)
     return()=> setIsLoading (true)
   },[])
  return (
    <div >
    {isLoading ? <Loader/>
    : 
    <>
     <Header/>
      <RouterProvider router={router}/>  
      <ArrowUp/>
     <Footer/>
    </>
    }
   </div>
  ) 
  
};

export default App;
