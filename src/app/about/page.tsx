import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-blue-900 to-gray-800 py-12 flex items-center justify-center min-h-screen">
      {/* Main Container */}
      <figure className="bg-white rounded-2xl p-10 shadow-xl max-w-lg mx-auto border border-gray-300">
        {/* Profile Image */}
        <Image
          className="h-45 w-40 rounded-full mx-auto object-cover border-4 border-blue-500"
          src="/aboutme.jpg"
          alt="Portrait of M Abdullah"
          width={160}
          height={160}
        />
        {/* Introduction Section */}
        <blockquote className="text-center space-y-4 mt-6">
          <p className="text-xl font-semibold text-gray-800">
            &ldquo;Hello! I&apos;m Muhammad Abdullah, a lifelong learner with a passion for Artificial Intelligence. Currently, I&apos;m learning Generative AI and my mentor is Sir Asif Langra.&rdquo;
          </p>
        </blockquote>
        {/* Personal Info Section */}
        <figcaption className="text-center mt-6">
          <div className="text-2xl font-bold text-gray-900">
            Muhammad Abdullah
          </div>
          <div className="text-lg text-gray-600">
            AI Engineer
          </div>
        </figcaption>
        {/* Additional Content Section */}
        <div className="text-center mt-8 space-y-6">
          {/* Personal Interests */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">My Interests</h3>
            <p className="text-gray-700 mt-2">
              I love coding, exploring new tech, reading about scientific advancements, and playing football. I believe in the power of curiosity and creativity to change the world.
            </p>
          </div>
          {/* Goals Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">My Goals</h3>
            <p className="text-gray-700 mt-2">
              My goal is to master AI and use it to create solutions that improve people&apos;s lives. I am committed to learning and growing every day.
            </p>
          </div>
          {/* Favorite Quote */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Favorite Quote</h3>
            <p className="text-gray-700 mt-2">
              &ldquo;We experience what we intend for others.&rdquo;
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default About;