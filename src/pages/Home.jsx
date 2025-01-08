import React from 'react';
import BookForm from '../components/BookForm'
//components
import Rooms from '../components/Rooms'
import HeroSlider from '../components/HeroSlider';
import Restaurant from '../components/Restaurant';
import Breaker from '../components/Breaker';
import AboutUs from '../components/AboutUs';
import Facilities from '../components/Facilities';
import ReviewsPage from '../components/ReviewsPage';
import Amenities from '../components/Amenities';
import BlogPage from '../components/BlogPage';

const Home = () => {
  
  return(
    <div className='bg-primary scrollbar '>
     <HeroSlider/>
     <div className='container mx-auto relative'>
      <div className='bg-accent/20 mt-4 p-4 md:shadow-xl md:absolute md:left-0 md:right-0 md:p-0 md:z-30 md:-top-12'>
         <BookForm/>
      </div>
     </div>  
      <Rooms/>
      <AboutUs/>
      <Facilities/>
      <Breaker/>
      <Amenities/>
      <Breaker/>
      <ReviewsPage/>
      <Restaurant/>
      <Breaker/>
      <BlogPage/>
    </div>
     
  ) 
};

export default Home;
