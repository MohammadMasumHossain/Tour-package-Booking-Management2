import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const BookNow = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const tour = location.state?.tour;

  const [bookingDate, setBookingDate] = useState('');

  useEffect(() => {
    const now = new Date().toISOString(); // full ISO datetime
    setBookingDate(now);
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.status = 'pending';

    axios.post('http://localhost:3000/Book', data)
    .then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your tour has been successfully booked!",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
      } else {
        // Optional: catch case when no error but booking failed
        Swal.fire({
          icon: "warning",
          title: "Booking Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: error.response?.data?.message || "An unexpected error occurred. Please try again later.",
      });
    });
  };

  return (
    <form
      onSubmit={handleBook}
      className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-md rounded space-y-6 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6">Book Tour</h2>

   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Tour Package Name</label>
          <input
            type="text"
            name="tour_name"
            value={tour?.tour_name || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Price (USD)</label>
          <input
            type="number"
            name="price"
            value={tour?.price || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Guide Name</label>
          <input
            type="text"
            name="guide_name"
            value={tour?.guide_name || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Guide Contact</label>
          <input
            type="text"
            name="guide_contact"
            value={tour?.guide_contact_no || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Guide Email</label>
          <input
            type="email"
            name="guide_email"
            value={tour?.guide_email || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Departure Date</label>
          <input
            type="text"
            name="departure_date"
            value={tour?.departure_date || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Departure Location</label>
          <input
            type="text"
            name="departure_location"
            value={tour?.departure_location || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            value={tour?.destination || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Booking Date</label>
          <input
            type="text"
            name="booking_date"
            value={bookingDate}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Buyer Name</label>
          <input
            type="text"
            name="buyer_name"
            value={user?.displayName || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>

        <div>
          <label>Buyer Email</label>
          <input
            type="email"
            name="buyer_email"
            value={user?.email || ''}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border rounded"
          />
        </div>
      </div>

      <div>
        <label>Special Note</label>
        <textarea
          name="notes"
          rows="3"
          placeholder="Please confirm if vegetarian meals are available."
          className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookNow;
