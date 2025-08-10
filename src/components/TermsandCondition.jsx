import React from "react";

const TermsandCondition = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-12 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">
          Welcome to <span className="font-semibold">Pack & Go</span>. By
          accessing and using our platform, you agree to the following terms and
          conditions. Please read them carefully before booking any tour.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Booking Policy</h2>
          <p className="text-gray-600">
            All bookings must be made through our official website. A
            confirmation email will be sent after successful payment. We reserve
            the right to refuse any booking at our discretion.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Payment</h2>
          <p className="text-gray-600">
            Full or partial payment (as per the package) is required to secure
            your booking. Payments are processed securely via our integrated
            payment gateway.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Cancellation & Refunds
          </h2>
          <p className="text-gray-600">
            Cancellations must be made at least 7 days before the tour start
            date for a full refund. Cancellations made within 7 days may incur
            partial or no refunds based on our policy.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Traveler Responsibilities
          </h2>
          <p className="text-gray-600">
            Travelers must ensure they have the necessary travel documents,
            health insurance, and vaccinations required for the destination. Any
            costs arising from non-compliance will be the traveler’s
            responsibility.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Liability</h2>
          <p className="text-gray-600">
            Pack & Go is not responsible for delays, cancellations, or other
            issues caused by unforeseen circumstances such as weather, strikes,
            or political instability.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these terms at any time. Updates will
            be posted on this page, and continued use of the website will
            constitute acceptance of the revised terms.
          </p>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-8">
          Last updated: August 10, 2025
        </p>
      </section>
    </div>
  );
};

export default TermsandCondition;
