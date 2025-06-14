import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bannerImg from "../assets/tour.jpg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center mt-6  py-24 px-6 text-white text-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="  bg-opacity-50 p-10 rounded-lg inline-block max-w-4xl mx-auto shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Discover Our Amazing Packages
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Dive into a world of delightful surprises and handpicked treasures.
          Whether you crave adventure, relaxation, or inspiration—our curated
          packages deliver magic to your doorstep.
        </p>
        <Link to="/all-packages">
          <button className="bg-blue-600 text-white mt-8 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
