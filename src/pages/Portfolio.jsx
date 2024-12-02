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
      className="min-h-screen bg-cover bg-center bg-fixed py-12"
      style={{
        backgroundImage: `url('/src/img/background.png')`, // Update path to match your project structure
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="h1 text-center mb-12 text-white">My Latest Work</h1>
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center justify-between gap-8 mb-12`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full bg-gray-100 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-90 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {item.description}
              </p>
              <Link
                to={item.link}
                className="text-white bg-primary hover:bg-opacity-80 px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;