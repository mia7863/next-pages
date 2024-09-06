import React from 'react';
import Image from 'next/image';

const HomeAddress = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 py-12 flex items-center justify-center min-h-screen">
      {/* Main Container */}
      <figure className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto border border-gray-300 transition-transform duration-500 transform hover:scale-105">
        {/* Home Image */}
        <Image
          className="h-48 w-48 rounded-full mx-auto object-cover border-4 border-teal-400 shadow-lg transition-transform duration-500 transform hover:scale-110"
          src="/house.jpg" // Change the image source to something relevant to a home
          alt="Home image"
          width={192}
          height={192}
        />
        {/* Address Section */}
        <blockquote className="text-center space-y-4 mt-6">
          <p className="text-xl font-medium text-gray-700">
            &ldquo;Welcome! Here is the address where you can reach out to me.&rdquo;
          </p>
        </blockquote>
        {/* Address Details Section */}
        <figcaption className="text-center mt-6">
          <div className="text-2xl font-bold text-gray-800">
            My Home
          </div>
          <div className="text-lg text-gray-600 mt-2">
            Link Road<br />
            Abbasia Town, House Number: 3<br />
            Pakistan
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default HomeAddress;