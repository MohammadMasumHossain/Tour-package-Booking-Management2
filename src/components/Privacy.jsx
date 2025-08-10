import React from "react";

const Privacy = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-12 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">Pack & Go</span>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          data when you use our platform.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We may collect personal details such as your name, email address,
            phone number, and payment information when you register, book a
            tour, or contact us. We also collect non-personal data like browser
            type and IP address for analytics purposes.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            Your data is used to process bookings, provide customer support,
            improve our services, and send relevant updates. We may also use
            anonymized data for statistical analysis and marketing insights.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Data Sharing & Disclosure
          </h2>
          <p className="text-gray-600">
            We do not sell or rent your personal information. However, we may
            share data with trusted third-party service providers (such as
            payment gateways or tour partners) necessary to complete your
            booking.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-600">
            We use industry-standard security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal data.
            You can also opt-out of promotional emails by using the unsubscribe
            link or contacting our support team.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. All changes
            will be posted on this page, and the updated date will be mentioned
            below.
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

export default Privacy;
