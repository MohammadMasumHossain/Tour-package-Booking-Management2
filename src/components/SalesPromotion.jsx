import React from 'react';

const SalesPromotion = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-6 mb-6 py-16 px-6 rounded-lg max-w-4xl mx-auto text-center shadow-lg">
      <h2 className="text-4xl font-extrabold mb-4">🔥 Limited Time Offer!</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Get up to <span className="font-bold">30% OFF</span> on all travel packages. Book now and start your dream vacation with extra savings!
      </p>
      <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition">
        Book Now
      </button>
    </section>
  );
};

export default SalesPromotion;
