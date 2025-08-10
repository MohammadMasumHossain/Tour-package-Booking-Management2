import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const topDestinations = [
  {
    id: 1,
    name: 'Cox’s Bazar',
    image: 'https://i.ibb.co/1fcPwwQM/coxsbazar.jpg',
    toursAvailable: 12,
    tagline: "World's longest sea beach 🌊",
  },
  {
    id: 2,
    name: 'Sundarbans',
    image: 'https://i.ibb.co/vCxZF1M4/sundarbans.jpg',
    toursAvailable: 8,
    tagline: 'Mystic land of the Royal Bengal Tiger 🐅',
  },
  {
    id: 3,
    name: 'Bandarban',
    image: 'https://i.ibb.co/hFJCjG4N/bandarban.jpg',
    toursAvailable: 10,
    tagline: 'Where clouds touch the hills ☁️⛰️',
  },
  {
    id: 4,
    name: 'Sylhet',
    image: 'https://i.ibb.co/zWmzfYSB/sylhet.jpg',
    toursAvailable: 7,
    tagline: 'Tea gardens and waterfalls 🍃☕',
  },
];

const TopDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6"
        >
          Top Destinations
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center space-y-2">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="text-sm italic text-gray-500">{destination.tagline}</p>
                <p className="text-gray-700">{destination.toursAvailable}+ tours available</p>

                {/* 🌍 Explore Button */}
                <Link to={`/packages?destination=${destination.name}`}>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
