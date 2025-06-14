import React from 'react';
import Banner from '../components/Banner';
import FeaturedPackages from '../components/FeaturedPackages';
import TopDestinations from '../components/TopDestinations';
import WhyChooseUs from '../components/WhyChooseUs';


const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <FeaturedPackages  ></FeaturedPackages>
            <TopDestinations></TopDestinations>
            <WhyChooseUs></WhyChooseUs>
           
           
        </div>
    );
};

export default Home;