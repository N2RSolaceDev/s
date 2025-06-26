import React from "react";

const CareersPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          VoidEsports Careers
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          We're preparing exciting opportunities. Stay tuned for more updates.
        </p>
        <div className="text-4xl md:text-6xl font-black text-white animate-pulse">
          Coming Soon
        </div>
        <p className="mt-10 text-sm text-gray-400">
          Want to be the first to know? Follow us on our socials or check back soon!
        </p>
      </div>
    </main>
  );
};

export default CareersPage;
