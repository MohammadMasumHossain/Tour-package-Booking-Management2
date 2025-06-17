import React, { useEffect, useState, useContext } from 'react';
import { useParams,  } from 'react-router';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePackage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  
  const [tourData, setTourData] = useState(null);

  // Fetch existing tour data
  useEffect(() => {
    axios.get(`http://localhost:3000/tours/${id}`)
      .then(res => setTourData(res.data))
      .catch(err => toast.error("Failed to load package"));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    axios.put(`http://localhost:3000/tours/${id}`, updatedData)
      .then(res => {
        toast.success("Package updated successfully!");
         // or redirect to /packages
      })
      .catch(err => {
        console.error(err);
        toast.error("❌ Failed to update package!");
      });
  };

  if (!tourData) return <div className="p-10 text-center">Loading tour package...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-base-200 to-secondary p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-xl p-8 border border-base-300">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">🛠️ Update Tour Package</h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Tour Name & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Tour Name</span></label>
              <input name="tour_name" defaultValue={tourData.tour_name} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Image URL</span></label>
              <input name="image" defaultValue={tourData.image} className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="label"><span className="label-text font-semibold">Duration</span></label>
            <input name="duration" defaultValue={tourData.duration} className="input input-bordered w-full" required />
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Departure Location</span></label>
              <input name="departure_location" defaultValue={tourData.departure_location} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Destination</span></label>
              <input name="destination" defaultValue={tourData.destination} className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Price & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Price ($)</span></label>
              <input name="price" defaultValue={tourData.price} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Departure Date</span></label>
              <input type="date" name="departure_date" defaultValue={tourData.departure_date?.slice(0, 10)} className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Package Details */}
          <div>
            <label className="label"><span className="label-text font-semibold">Package Details</span></label>
            <textarea name="package_details" defaultValue={tourData.package_details} className="textarea textarea-bordered w-full" rows={4} required />
          </div>

          {/* Guide Contact Info */}
          <div>
            <label className="label"><span className="label-text font-semibold">Guide Contact No.</span></label>
            <input name="guide_contact_no" defaultValue={tourData.guide_contact_no} className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Email</span></label>
            <input name="guide_email" defaultValue={user?.email || tourData.guide_email} readOnly className="input input-bordered w-full " />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Name</span></label>
            <input name="guide_name" defaultValue={user?.displayName || tourData.guide_name} readOnly className="input input-bordered w-full " />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Photo URL</span></label>
            <input name="guide_photo" defaultValue={user?.photoURL || tourData.guide_photo} readOnly className="input input-bordered w-full " />
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto px-10">
              💾 Save Changes
            </button>
          </div>
        </form>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default UpdatePackage;
