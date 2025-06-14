import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const AddPackage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-base-200 to-secondary p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-xl p-8 border border-base-300">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">✈️ Add Tour Package</h2>

        {/* User Photo Preview */}
        {user?.photoURL && (
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL}
              alt="User Photo"
              className="w-24 h-24 rounded-full border-2 border-primary"
            />
          </div>
        )}

        <form className="space-y-5">
          {/* Tour Name & Image URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Tour Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Bali Adventure"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Duration</span>
            </label>
            <input
              type="text"
              placeholder="e.g., 3 Days 2 Nights"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Departure Location</span>
              </label>
              <input
                type="text"
                placeholder="e.g., New York"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Destination</span>
              </label>
              <input
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
              <label className="label">
                <span className="label-text font-semibold">Price ($)</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 1500"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Departure Date</span>
              </label>
              <input type="date" className="input input-bordered w-full" required />
            </div>
          </div>

          {/* Package Details */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Package Details</span>
            </label>
            <textarea
              placeholder="Describe the tour highlights, itinerary, inclusions, etc."
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Contact */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Contact No.</span>
            </label>
            <input
              type="tel"
              placeholder="e.g., +1 123 456 7890"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Auto-filled user info */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">User Email</span>
            </label>
            <input
              type="email"
              value={user?.email || ''}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || ''}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">User Photo URL</span>
            </label>
            <input
              type="text"
              value={user?.photoURL || ''}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto px-10">
              📤 Submit Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
