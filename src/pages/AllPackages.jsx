import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import { FaUserTie, FaClock, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

const AllPackages = () => {
  const tours = useLoaderData();
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState(null); // 'asc', 'desc', or null

  // Filter packages by search term
  const filteredPackages = tours.filter(pkg =>
    pkg.tour_name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort filtered packages by price depending on sortOrder
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-secondary mb-6">🌴 All Travel Packages</h2>

      {/* Search Input */}
      <div className="mb-6 text-center max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by tour name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* Sort Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setSortOrder('asc')}
          className={`btn ${sortOrder === 'asc' ? 'btn-primary' : 'btn-outline'}`}
        >
          Sort Price ↑
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`btn ${sortOrder === 'desc' ? 'btn-primary' : 'btn-outline'}`}
        >
          Sort Price ↓
        </button>
        <button
          onClick={() => setSortOrder(null)}
          className={`btn ${sortOrder === null ? 'btn-primary' : 'btn-outline'}`}
        >
          Clear Sort
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPackages.length ? (
          sortedPackages.map((tour) => (
            <div
              key={tour._id}
              className="bg-white/60 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={tour.image}
                  alt={tour.tour_name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{tour.tour_name}</h3>

                <div className="flex items-center gap-4">
                  <img
                    src={tour.guide_photo}
                    alt={tour.guide_name}
                    className="w-12 h-12 rounded-full border-2 border-secondary"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{tour.guide_name}</p>
                    <p className="text-xs text-gray-500">Tour Guide</p>
                  </div>
                </div>

                <ul className="text-sm text-gray-700 space-y-1 pt-2">
                  <li className="flex items-center gap-2">
                    <FaClock className="text-primary" /> Duration: {tour.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaDollarSign className="text-primary" /> Price: {tour.price} Taka
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primary" /> Departure: {new Date(tour.departure_date).toLocaleDateString()}
                  </li>
                </ul>

                <div className="pt-4">
                  <Link to={`/tours/${tour._id}`} className="btn btn-secondary w-full">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-red-500 font-medium">No tours match your search.</p>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
