import React from 'react';
import Banner from '../components/Banner';
import FeaturedPackages from '../components/FeaturedPackages';
import TopDestinations from '../components/TopDestinations';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsCarousel from '../components/ReviewsCarousel';
import SalesPromotion from '../components/SalesPromotion';


const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <FeaturedPackages  ></FeaturedPackages>
            <TopDestinations></TopDestinations>
            <WhyChooseUs></WhyChooseUs>
            <ReviewsCarousel></ReviewsCarousel>
            <SalesPromotion></SalesPromotion>
           
           
        </div>
    );
};

export default Home;