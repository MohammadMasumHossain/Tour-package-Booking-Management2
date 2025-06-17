import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPackage = () => {
  const { user } = useContext(AuthContext);

  const handleAddPackage = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const packages = Object.fromEntries(formData.entries());

    // Add default fields not from form
    packages.bookingCount = 0;
    packages.created_at = new Date();

    axios.post('http://localhost:3000/tours', packages,)
      .then(res => {
        toast.success("Package added successfully!");
        console.log(res);
        form.reset();
      })
      .catch(error => {
        toast.error('❌ Something went wrong!');
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-base-200 to-secondary p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-xl p-8 border border-base-300">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">✈️ Add Tour Package</h2>

        <form onSubmit={handleAddPackage} className="space-y-5">
          {/* Tour Name & Image URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Tour Name</span></label>
              <input
                name="tour_name"
                type="text"
                placeholder="e.g., Bali Adventure"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Image URL</span></label>
              <input
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="label"><span className="label-text font-semibold">Duration</span></label>
            <input
              name="duration"
              type="text"
              placeholder="e.g., 3 Days 2 Nights"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Departure Location</span></label>
              <input
                name="departure_location"
                type="text"
                placeholder="e.g., New York"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Destination</span></label>
              <input
                name="destination"
                type="text"
                placeholder="e.g., Maldives"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Price & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Price ($)</span></label>
              <input
                name="price"
                type="number"
                placeholder="e.g., 1500"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">Departure Date</span></label>
              <input
                name="departure_date"
                type="date"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Package Details */}
          <div>
            <label className="label"><span className="label-text font-semibold">Package Details</span></label>
            <textarea
              name="package_details"
              placeholder="Describe the tour highlights, itinerary, inclusions, etc."
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Guide Contact Info */}
          <div>
            <label className="label"><span className="label-text font-semibold">Guide Contact No.</span></label>
            <input
              name="guide_contact_no"
              type="tel"
              placeholder="e.g., +1 123 456 7890"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Email</span></label>
            <input
              name="guide_email"
              type="email"
              value={user?.email || ''}
              readOnly
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Name</span></label>
            <input
              name="guide_name"
              type="text"
              value={user?.displayName || ''}
              readOnly
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">Guide Photo URL</span></label>
            <input
              name="guide_photo"
              type="text"
              value={user?.photoURL || ''}
              readOnly
              className="input input-bordered w-full "
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto px-10">
              📤 Submit Package
            </button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default AddPackage;
