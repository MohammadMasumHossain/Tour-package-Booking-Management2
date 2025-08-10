import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At <strong>Your Company</strong>, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy outlines how we
        collect, use, and safeguard your data when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, contact
        number, and payment information when you register, make purchases, or use
        our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used to provide, improve, and personalize our services.
        We may also use it to communicate important updates, promotions, and policy
        changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Protection</h2>
      <p className="mb-4">
        We use industry-standard encryption and security measures to protect your
        data. However, please note that no method of transmission over the Internet
        is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share data with trusted
        service providers for order processing, payment handling, and marketing, but
        only when necessary.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal data. You can
        also opt out of marketing emails at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy periodically. Any changes will be posted on
        this page with the updated date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPage;
