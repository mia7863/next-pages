import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-slate-900 py-6 flex items-center justify-center min-h-screen">
      <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 shadow-lg max-w-md mx-auto">
        <Image
          className="h-43 rounded-full mx-auto object-cover"
          src="/mia.jpg"
          alt="M Abdullah"
          width={150}
          height={240}
        />
        <blockquote className="text-center space-y-4">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
            &ldquo;My name is Muhammad Abdullah, and I am currently learning Artificial Intelligence under the guidance of Sir Asif Langra.&rdquo;
          </p>
        </blockquote>
        <figcaption className="text-center mt-4">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            Muhammad Abdullah
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI Student, Muhammad Abdullah
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Page;