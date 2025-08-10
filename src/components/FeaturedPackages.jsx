import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Feature from './Feature';

const FeaturedPackages = () => {
  const features = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Features Packages</h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map(tour => (
          <Feature key={tour._id} tour={tour} />
        ))}
      </div>

      {/* Show All Button */}
      <div className="flex justify-center mt-10">
        <Link to="/allpackages">
          <button className="btn btn-secondary hover:btn-secondary transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackages;
