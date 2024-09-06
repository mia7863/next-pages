import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo or Site Name /}
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
            My Project
          </Link>
        </div>
        {/ Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/About" className="text-blue-500 hover:underline">
            About Me
          </Link>
          <Link href="/Contact" className="text-blue-500 hover:underline">
            Contact Information
          </Link>
          <Link href="/Address" className="text-blue-500 hover:underline">
            Home Address
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;



