"use client";

import React from "react";

export default function CareersPage() {
  return (
    <>
      {/* SEO / Meta Tags */}
      <meta charSet="UTF-8" />
      <title>Careers | Your Company</title>
      <meta name="description" content="Join our team! We're looking for passionate individuals to help shape the future of our company." />
      <meta property="og:title" content="Careers | Your Company" />
      <meta property="og:description" content="Join our team! We're looking for passionate individuals to help shape the future of our company." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.voidesports.org/careers " />
      <meta property="og:image" content="https://www.voidesports.org/logo.png" />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build the Future With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re crafting something amazing — and we want you on board.
              Check back soon for current openings across engineering, design, marketing, and more.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Positions Coming Soon
            </h2>
            <p className="text-gray-600">
              We&apos;re currently finalizing our hiring roadmap. Stay tuned for new opportunities
              in engineering, design, marketing, customer success, and more.
            </p>
          </div>
        </section>

        {/* About Our Culture */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Why Join Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-gray-600">
                  We encourage creativity and experimentation. Solve real-world problems with cutting-edge tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Growth-Focused</h3>
                <p className="text-gray-600">
                  We invest in your development. From mentorship to learning budgets, grow with us.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Remote Friendly</h3>
                <p className="text-gray-600">
                  Work from anywhere in the world. Flexible hours and inclusive culture.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Impactful Work</h3>
                <p className="text-gray-600">
                  Your work will make a difference — for users, for the planet, and for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto bg-blue-600 text-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
            <p className="mb-6">
              Want to be among the first to know when jobs are posted? Reach out now!
            </p>
            <a
              href="https://www.voidesports.org/contact"
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact us on the contact page
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="text-center text-sm text-gray-400 py-8">
          <p>© {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
