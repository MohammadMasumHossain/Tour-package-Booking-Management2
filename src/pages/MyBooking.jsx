import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/Book?email=${user.email}`)
        .then(res => setBookings(res.data))
        .catch(err => console.error('Error fetching bookings:', err));
    }
  }, [user]);

  const handleConfirm = (_e, _id) => {
    axios
      .patch(`http://localhost:3000/Book/${_id}`, { status: 'completed' })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Booking Confirmed!',
            showConfirmButton: false,
            timer: 1500,
          });

          // Update the status in the state without refetching
          setBookings(prev =>
            prev.map(booking =>
              booking._id === _id ? { ...booking, status: 'completed' } : booking
            )
          );
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Failed to confirm booking',
          text: 'Please try again later.',
        });
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Guide Name</th>
              <th>Guide Contact</th>
              <th>Departure Date</th>
              <th>Departure Location</th>
              <th>Destination</th>
              <th>Special Note</th>
              <th>Status</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.tour_name}</td>
                <td>{booking.guide_name}</td>
                <td>{booking.guide_contact || booking.guide_contact_no}</td>
                <td>{booking.departure_date}</td>
                <td>{booking.departure_location}</td>
                <td>{booking.destination}</td>
                <td>{booking.notes || 'N/A'}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.status === 'completed'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {booking.status || 'pending'}
                  </span>
                </td>
                <td>
                  {booking.status !== 'completed' ? (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={(e) => handleConfirm(e, booking._id)}
                    >
                      Confirm
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">Done</span>
                  )}
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
