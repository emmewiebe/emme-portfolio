import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Havenmade Essentials Branding',
    description:
      'A branding project for Havenmade Essentials, focusing on clean, natural aesthetics that align with their organic product offerings.',
    image: '/img/portfolio/1.png',
    link: '/project-1',
  },
  {
    id: 2,
    title: 'More Cookies Branding',
    description:
      'Fun and quirky branding for More Cookies, a business specializing in customizable cookies for every occasion.',
    image: '/img/portfolio/2.png',
    link: '/project-2',
  },
  {
    id: 3,
    title: 'Cove Coffee Shop Branding',
    description:
      'Sleek and modern branding for Cove Coffee Shop, aiming to attract a youthful, energetic clientele.',
    image: '/img/portfolio/3.png',
    link: '/project-3',
  },
  {
    id: 4,
    title: 'TNT Hay Branding',
    description:
      'Rustic and bold branding for TNT Hay, a family-run business with a rich agricultural heritage.',
    image: '/img/portfolio/4.png',
    link: '/project-4',
  },
];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition1}
      className="min-h-screen bg-cover bg-center bg-fixed pt-24 lg:pt-32 pb-12" // Adjust padding to avoid being cut off
      style={{
        backgroundImage: `url('/src/img/background.png')`, // Ensure path matches your project
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="h1 font-hemis text-[#345363]">My Latest Work</h1>
        </div>
    

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-[#345363] rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <Link to={item.link} className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Text */}
            <div className="md:w-1/2 w-full p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-200 mb-6">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </motion.section >
  );
};

export default Portfolio;