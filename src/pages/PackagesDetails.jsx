import React from 'react';
import { useLoaderData } from 'react-router'; // make sure you're using `react-router-dom`

const PackagesDetails = () => {
  const tour = useLoaderData();



  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Tour Image */}
      <img
        src={tour.image}
        alt={tour.tour_name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      {/* Tour Name */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{tour.tour_name}</h2>

      {/* Guide Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={tour.guide_photo}
          alt={tour.guide_name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800">{tour.guide_name}</p>
          <p className="text-gray-600 text-sm">📞 {tour.guide_contact}</p>
        </div>
      </div>

      {/* Tour Details */}
      <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-6">
        <p><span className="font-semibold">Duration:</span> {tour.duration}</p>
        <p><span className="font-semibold">Price:</span> ${tour.price}</p>
        <p><span className="font-semibold">Booking Count:</span> {tour.booking_count}</p>
        <p>
          <span className="font-semibold">Departure:</span> {tour.departure_location} on {tour.departure_date}
        </p>
        <p><span className="font-semibold">Destination:</span> {tour.destination}</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Full Description</h3>
        <p className="text-gray-600 leading-relaxed">{tour.description}</p>
      </div>

      {/* Book Now Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  );
};

export default PackagesDetails;
