import React from 'react';
import Image from 'next/image';

const ContactWithImage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 py-12 flex items-center justify-center min-h-screen">
      {/* Main Container */}
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto border border-gray-300 transition-transform duration-500 transform hover:scale-105">
        {/* Contact Info Section */}
        <div className="text-center">
          {/* Home Image */}
          <Image
            className="h-48 w-48 rounded-full mx-auto object-cover border-4 border-yellow-400 shadow-lg transition-transform duration-500 transform hover:scale-110"
            src="/contact.jpg" // Change the image source to something relevant to a home
            alt="Contact image"
            width={192}
            height={192}
          />
          <h3 className="text-2xl font-semibold text-yellow-800 mt-6">Contact Info</h3>
          <p className="text-yellow-700 mt-4">
            Phone: (+92) 304-3770-258<br />
            Email: mianofficial101@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactWithImage;