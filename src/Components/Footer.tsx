"use client";

import React from 'react';
import Link from 'next/link';
// Import the JPG image from src/app folder
import pic from '../app/logo.jpg'; // Make sure the path is correct
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-6 shadow-lg fixed bottom-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Footer Text */}
        <div className="flex items-center space-x-4">
          {/* Use the imported JPG image */}
          <Image src={pic} alt="Logo" width={50} height={50} className="rounded-full" />
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-500 to-blue-500">
            ©️ 2024 My Project
          </div>
        </div>
        {/* Footer Navigation Links */}
        <nav className="space-x-6">
          <Link
            href="/about"
            className="text-blue-300 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-110"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-blue-300 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-110"
          >
            Contact Information
          </Link>
          <Link
            href="/address"
            className="text-blue-300 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-110"
          >
            Home Address
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;





