import React from 'react';

const travelTips = [
  {
    id: 1,
    title: "Top 5 Packing Hacks for Stress-Free Travel",
    snippet: "Learn how to pack smartly and efficiently with these essential tips.",
    image: "https://i.ibb.co/7QpKsCX/packing.jpg",
    slug: "packing-hacks",
  },
  {
    id: 2,
    title: "Best Time to Visit Cox’s Bazar",
    snippet: "Discover the ideal seasons to enjoy the longest natural sea beach.",
    image: "https://i.ibb.co/1fcPwwQM/coxsbazar.jpg",
    slug: "best-time-coxsbazar",
  },
  {
    id: 3,
    title: "How to Stay Safe in Remote Destinations",
    snippet: "Safety tips and tricks to keep your trip worry-free.",
    image: "https://i.ibb.co/q1dj8T2/safety.jpg",
    slug: "stay-safe-remote",
  },
];


const TravelTips = () => {
    return (
         <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Travel Tips & Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {travelTips.map((tip) => (
            <div key={tip.id} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.snippet}</p>
                <Link
                  to={`/blog/${tip.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default TravelTips;