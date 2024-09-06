"use client"; // Marks the component as a Client Component

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  // State to handle popup visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4 shadow-md text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/About" className="hover:text-blue-300 font-medium">
            About Me
          </Link>
          <Link href="/Contact" className="hover:text-blue-300 font-medium">
            Contact Information
          </Link>
          <Link href="/Address" className="hover:text-blue-300 font-medium">
            Home Address
          </Link>
        </div>

        {/* Button to trigger popup */}
        <button
          onClick={togglePopup}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100"
        >
          Open Popup
        </button>
      </nav>

      {/* Popup that slides in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/About" className="text-blue-600 hover:text-blue-800 font-medium">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Contact Information
              </Link>
            </li>
            <li>
              <Link href="/Address" className="text-blue-600 hover:text-blue-800 font-medium">
                Home Address
              </Link>
            </li>
          </ul>

          {/* Close button */}
          <button
            onClick={togglePopup}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>

      {/* Overlay for popup */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={togglePopup}
          style={{ zIndex: 999 }}
        />
      )}
    </header>
  );
};

export default Header;


