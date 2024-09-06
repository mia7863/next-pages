"use client"; // Add this directive to make the component a Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  // Add a sticky effect based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scroll ? 'bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700' : 'bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900'
      } py-4 shadow-lg transition-all duration-500 fixed top-0 w-full z-20`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-500 to-blue-500 transition-transform duration-300 hover:scale-110">
          <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
            My Project
          </Link>
        </div>
        {/* Navigation Links */}
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
    </header>
  );
};

export default Header;

