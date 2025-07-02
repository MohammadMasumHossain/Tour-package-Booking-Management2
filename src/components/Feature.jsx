import React from 'react';
import { Link } from 'react-router';

const Feature = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={tour.image}
        alt={tour.tour_name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tour.tour_name}</h3>

        <div className="flex items-center gap-2 mb-2">
          <img
            src={tour.guide_photo}
            alt={tour.guide_name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700">{tour.guide_name}</span>
        </div>

        <p className="text-gray-600">
          <strong>Duration:</strong> {tour.duration}
        </p>
        <p className="text-gray-600">
          <strong>Departure:</strong> {tour.departure_date}
        </p>
        <p className="text-gray-800 font-bold mt-2">${tour.price}</p>

       <Link to ={`/tours/${tour._id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          View Details
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Feature;
