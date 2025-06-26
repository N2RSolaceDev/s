import React from "react";

export default function CareersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          VoidEsports Careers
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We&apos;re building something epic. Stay tuned.
        </p>
        <div className="text-5xl font-extrabold tracking-tight animate-pulse">
          Coming Soon
        </div>
        <div className="mt-10">
          <p className="text-sm text-gray-400">
            Interested in joining our team? Check back here soon or follow us on social media for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
