import React from 'react';
import Banner from '../components/Banner';
import FeaturedPackages from '../components/FeaturedPackages';
import TopDestinations from '../components/TopDestinations';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsCarousel from '../components/ReviewsCarousel';


const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <FeaturedPackages  ></FeaturedPackages>
            <TopDestinations></TopDestinations>
            <WhyChooseUs></WhyChooseUs>
            <ReviewsCarousel></ReviewsCarousel>
           
           
        </div>
    );
};

export default Home;