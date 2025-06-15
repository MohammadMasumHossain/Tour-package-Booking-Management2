import React from 'react';
import Lottie from 'lottie-react';
import { Link, useRouteError } from 'react-router'; 
import errorlottie from '../assets/lotties/erroranimation.json';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      
      <div className="w-full max-w-sm md:max-w-lg">
        <Lottie animationData={errorlottie} loop={true} />
      </div>

    
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mt-6 mb-2">
        Oops! You seem lost in the Himalayas.
      </h1>

 
      {error && (
        <p className="text-sm md:text-base text-gray-600 max-w-md text-center mb-4">
          {error.statusText || error.message}
        </p>
      )}

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-4 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold rounded shadow transition duration-200"
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
};

export default Error;
