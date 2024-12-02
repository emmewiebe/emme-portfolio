import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

// Example portfolio data  - switch this up with my real stuff
const portfolioItems = [
  {
    id: 1,
    title: '378 WH',
    image: '/img/portfolio/1.png',
    link: '/project-1',
  },
  { 
    id: 2,
    title: 'Branding App',
    image: '/img/portfolio/2.png',
    link: '/project-2',
  },
  {
    id: 3,
    title: 'Coffee Shop Branding',
    image: '/img/portfolio/3.png',
    link: '/project-3',
  },
  {
    id: 4,
    title: 'Cookie business Branding',
    image: '/img/portfolio/4.png',
    link: '/project-4',
  },
];

const PortfolioCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides scrolled at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition1}
      className="min-h-screen bg-gray-100 py-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="h1 text-center mb-8">Portfolio</h1>
        <Slider {...settings}>
          {portfolioItems.map((item) => (
            <div key={item.id} className="px-2">
              <div className="relative group">
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a
                    href={item.link}
                    className="text-white text-lg font-bold bg-primary py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-80"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default PortfolioCarousel;