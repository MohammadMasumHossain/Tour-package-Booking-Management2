import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [tours, setTours] = useState([]);

  // Fetch all tours by guide email
  const fetchTours = () => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/tours?email=${user.email}`)
        .then((res) => setTours(res.data))
        .catch((err) => console.error('Error fetching tours:', err));
    }
  };

  useEffect(() => {
    fetchTours();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the tour.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/tours/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'The tour has been deleted.', 'success');
              fetchTours(); // Refresh data
            }
          })
          .catch((err) => {
            console.error('Delete error:', err);
            Swal.fire('Error!', 'Failed to delete the tour.', 'error');
          });
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center my-4">My Added Packages</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Tour Name</th>
              <th>Destination</th>
              <th>Price (Tk)</th>
              <th>Duration</th>
              <th>Departure</th>
              <th>Guide Name</th>
              <th>Guide Email</th>
              <th>Guide Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={tour.image}
                    alt="Tour"
                    className="w-16 h-12 rounded object-cover"
                  />
                </td>
                <td>{tour.tour_name}</td>
                <td>{tour.destination}</td>
                <td>{tour.price}</td>
                <td>{tour.duration}</td>
                <td>{tour.departure_date}</td>
                <td>{tour.guide_name}</td>
                <td>{tour.guide_email}</td>
                <td>{tour.guide_contact_no}</td>
                <td>
                  <button className="btn btn-sm btn-info mr-2">Update</button>
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {tours.length === 0 && (
              <tr>
                <td colSpan="11" className="text-center py-4">
                  No tours found for this guide.
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
