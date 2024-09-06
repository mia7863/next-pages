"use client"; // Make this a Client Component

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 py-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
            My Project
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/about" className="text-blue-500 hover:text-white transition-colors duration-300">
            About Me
          </Link>
          <Link href="/contact" className="text-blue-500 hover:text-white transition-colors duration-300">
            Contact Information
          </Link>
          <Link href="/address" className="text-blue-500 hover:text-white transition-colors duration-300">
            Home Address
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;


