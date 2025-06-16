import React from 'react';
import { FaGlobe, FaUsers, FaPlaneDeparture } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-base-100 to-base-200 min-h-screen py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">🌍 About Pack&Go</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover unforgettable travel experiences curated by experts. We're here to help you explore the world with ease and comfort.
        </p>
      </div>

      {/* Mission / Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
          <h2 className="text-2xl font-semibold text-primary mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700">
            To make travel seamless, enjoyable, and inspiring by providing curated tour packages, excellent service, and authentic local experiences.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-secondary">
          <h2 className="text-2xl font-semibold text-secondary mb-3">👁️ Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted platform for global travelers by offering personalized travel solutions, ensuring safety, and creating memories that last a lifetime.
          </p>
        </div>
      </div>

      {/* Stats / Icons */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white shadow p-6 rounded-xl">
          <FaGlobe className="text-4xl text-primary mx-auto mb-2" />
          <h3 className="text-xl font-bold">50+ Destinations</h3>
          <p className="text-sm text-gray-500">Worldwide curated travel experiences</p>
        </div>
        <div className="bg-white shadow p-6 rounded-xl">
          <FaUsers className="text-4xl text-secondary mx-auto mb-2" />
          <h3 className="text-xl font-bold">10K+ Happy Travelers</h3>
          <p className="text-sm text-gray-500">Trusted by global explorers</p>
        </div>
        <div className="bg-white shadow p-6 rounded-xl">
          <FaPlaneDeparture className="text-4xl text-accent mx-auto mb-2" />
          <h3 className="text-xl font-bold">24/7 Support</h3>
          <p className="text-sm text-gray-500">Always by your side</p>
        </div>
      </div>

      {/* Team Section (optional) */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">👨‍👩‍👧‍👦 Meet Our Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Our passionate travel experts work hard to ensure your journey is stress-free and magical.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {/* You can dynamically render from a team array if needed */}
          <div className="w-48 text-center">
            <img src="https://i.pravatar.cc/150?img=32" alt="Team Member" className="rounded-full mb-2" />
            <h4 className="font-semibold">Salma</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
          <div className="w-48 text-center">
            <img src="https://i.pravatar.cc/150?img=47" alt="Team Member" className="rounded-full mb-2" />
            <h4 className="font-semibold">Liam Singh</h4>
            <p className="text-sm text-gray-500">Travel Director</p>
          </div>
          <div className="w-48 text-center">
            <img src="https://i.pravatar.cc/150?img=15" alt="Team Member" className="rounded-full mb-2" />
            <h4 className="font-semibold">Mahfuzur Rahman</h4>
            <p className="text-sm text-gray-500">Tour Manager</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white p-10 rounded-lg text-center shadow-md">
        <h2 className="text-3xl font-bold mb-2">Ready to explore the world?</h2>
        <p className="mb-6 text-lg">Let us plan your next unforgettable journey.</p>
       
      </div>
    </div>
  );
};

export default AboutUs;
