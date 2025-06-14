import React from 'react';
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";



const WhyChooseUs = () => {
  return (
       <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-primary">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2">Answers to your most common queries</p>
      </div>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
            What is included in a typical tour package?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            <p>
              Most packages include accommodation, guided tours, meals, transport, and entry fees to attractions.
              Check individual package details for specifics.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
            Can I customize my tour package?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            <p>
              Absolutely! We offer fully customizable packages to match your travel style, preferred destinations,
              and budget.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
            Is it safe to travel solo with your packages?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            <p>
              Yes, we prioritize safety and often group solo travelers together. You’ll have 24/7 support
              throughout your journey.
            </p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
            What if my travel plans change?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            <p>
              We understand plans can change. Many of our tours offer flexible rescheduling or cancellations. Please
              check the cancellation policy before booking.
            </p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold flex items-center gap-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
            Do you offer group discounts or corporate packages?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            <p>
              Yes! We provide discounts for group bookings, schools, and corporate trips. Contact us directly for a
              tailored quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
