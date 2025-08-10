import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Amazing experience! Highly recommend this tour."
  },
  {
    id: 2,
    name: "John Smith",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    comment: "Very good service and friendly guide."
  },
  {
    id: 3,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 3,
    comment: "It was okay, but could improve on timing."
  },
  {
    id: 4,
    name: "Bob Lee",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    comment: "Best trip I've ever had! Thanks a lot."
  },
  {
    id: 5,
    name: "Mary Brown",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    comment: "Good experience, the guide was very knowledgeable."
  }
];

const Review = ({ name, photo, rating, comment }) => {
  const renderStars = () => {
    const stars = [];
    for(let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-card bg-white shadow-md rounded-lg p-5 m-4 flex-shrink-0 w-80">
      <div className="flex items-center mb-3">
        <img
          src={photo}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <div>{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

const ReviewsCarousel = () => {
  return (
    <>
      <style>{`
        .scrolling-wrapper {
          display: flex;
          animation: scroll-left 60s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="overflow-hidden border-t border-b border-gray-300 py-6 bg-white">
        <div className="scrolling-wrapper">
          {reviews.map(({id, name, photo, rating, comment}) => (
            <Review
              key={id}
              name={name}
              photo={photo}
              rating={rating}
              comment={comment}
            />
          ))}

          {/* Duplicate reviews to make continuous scroll seamless */}
          {reviews.map(({id, name, photo, rating, comment}) => (
            <Review
              key={"dup-" + id}
              name={name}
              photo={photo}
              rating={rating}
              comment={comment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsCarousel;
