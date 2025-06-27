"use client";

import React from "react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
        <p className="text-lg text-gray-700 mb-8">
          We're building something amazing — and we want you to be part of it.
          Check back soon for current job openings across all departments.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Positions Coming Soon</h2>
          <p className="text-gray-600">
            We’re currently finalizing our hiring roadmap. Stay tuned for new opportunities
            in Development, design, marketing, recruitment, and more.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-gray-700 mb-4">
            In the meantime, feel free to reach out to us at{" "}
            <a href="mailto:careers@yourcompany.com" className="text-blue-600 hover:underline">
              careers@yourcompany.com
            </a>{" "}
            if you'd like to share your resume or learn more about future roles.
          </p>
          <p className="text-gray-500 italic">
            Thank you for your interest in joining our team!
          </p>
        </div>
      </div>
    </div>
  );
}
