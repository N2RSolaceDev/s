import React from "react";

export default function CareersContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-8">
      <div className="text-center max-w-xl space-y-8">
        {/* Logo / Brand */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text">
            VoidEsports
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Careers</h2>
        </div>

        {/* Main Message */}
        <p className="text-lg md:text-xl text-gray-300">
          We&apos;re building something epic — and we want you to be part of it.
        </p>

        {/* Coming Soon */}
        <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white animate-pulse">
          Coming Soon
        </div>

        {/* Subtext */}
        <p className="text-sm text-gray-400 mt-6">
          Interested in joining our team? Stay tuned or follow us on social media for updates and job openings.
        </p>

        {/* Optional: Social Media Icons (replace with your links) */}
        <div className="flex justify-center gap-4 mt-8">
          <a href="https://twitter.com/voideasports " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Twitter
          </a>
          <a href="https://instagram.com/voideasports " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Instagram
          </a>
          <a href="https://discord.gg/voideasports " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
