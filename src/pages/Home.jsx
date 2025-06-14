import React from 'react';
import Banner from '../components/Banner';
import FeaturedPackages from '../components/FeaturedPackages';
import TopDestinations from '../components/TopDestinations';

const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <FeaturedPackages  ></FeaturedPackages>
            <TopDestinations></TopDestinations>
           
        </div>
    );
};

export default Home;