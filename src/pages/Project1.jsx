import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Project1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition1}
      className="min-h-screen bg-cover bg-center bg-fixed py-12"
      style={{
        backgroundImage: `url('/src/img/background.png')`, // Ensure path matches your project structure
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">
          Havenmade Essentials Branding
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          A branding project for Havenmade Essentials, focusing on clean, natural aesthetics that align with their organic product offerings.
        </p>
        <img
          src="/img/portfolio/1.png"
          alt="Havenmade Essentials Branding"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default Project1;