import React from 'react';
import { motion } from 'framer-motion'; 
import { transition1 } from '../transitions'; 
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';

import havenmade from '../img/portfolio/havenmade.png';
import morecookies from '../img/portfolio/morecookies.png';
import covecoffee from '../img/portfolio/covecoffee.png';
import tnthay from '../img/portfolio/tnthay.png';

import poster1 from '../img/portfolio/olderposter.jpg';
import poster2 from '../img/portfolio/gameday.png';
import poster3 from '../img/about/cove-logo.png';
import poster4 from '../img/about/cove-mockup5.png';

const portfolioItems = [
  {
    id: 1,
    title: 'Havenmade Essentials Branding',
    description: 'A branding project for Havenmade Essentials, focusing on clean, natural aesthetics that align with their organic product offerings.',
    image: havenmade,
    link: '/project-1',
  },
  {
    id: 2,
    title: 'More Cookies Branding',
    description: 'Fun and quirky branding for More Cookies, a business specializing in customizable cookies for every occasion.',
    image: morecookies,
    link: '/project-3',
  },
  {
    id: 3,
    title: 'Cove Coffee Shop Branding',
    description: 'Sleek and modern branding for Cove Coffee Shop, aiming to attract a youthful, energetic clientele.',
    image: covecoffee,
    link: '/project-2',
  },
  {
    id: 4,
    title: 'Fiorino Ad Concept Poster',
    description: 'Fiorino: Crafting a fresh brand identity for the cans and developing a vibrant ad concept to bring the product to life.',
    image: tnthay,
    link: '/project-4',
  },
];

const Portfolio = () => {
  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Emme Drew’s Portfolio – Branding, Design & Marketing Projects</title>
        <meta 
          name="description" 
          content="Explore Emme Drew’s latest work in branding, design, and digital marketing. View projects for Havenmade Essentials, More Cookies, Cove Coffee, and more." 
        />
        <meta 
          name="keywords" 
          content="Emme Drew, Portfolio, Branding, Design, Digital Marketing, Creative Projects, Havenmade Essentials, More Cookies, Cove Coffee" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Emme Drew’s Portfolio – Branding & Design Projects" />
        <meta 
          property="og:description" 
          content="Explore a collection of Emme Drew’s branding, design, and marketing projects, showcasing her creative skill and strategic thinking." 
        />
        {/* Choose a representative image from your portfolio */}
        <meta property="og:image" content={havenmade} />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition1}
        className="min-h-screen bg-cover bg-center bg-fixed pt-24 lg:pt-32 pb-12"
        style={{
          backgroundImage: `url('/src/img/background.png')`,
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
                <Link to={item.link} className="md:w-1/2 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </Link>

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

          {/* Conveyor Belt Section */}
          <div className="overflow-hidden mt-16 relative">
            <div className="conveyor flex">
              {/* First set of images */}
              <img src={poster1} alt="Older Poster Design" className="w-48 h-64 mx-4" />
              <img src={poster2} alt="Game Day Poster Design" className="w-48 h-64 mx-4" />
              <img src={poster3} alt="Cove Logo Concept" className="w-48 h-64 mx-4" />
              <img src={poster4} alt="Cove Mockup Design" className="w-48 h-64 mx-4" />
              {/* Duplicate set of images to create the seamless loop */}
              <img src={poster1} alt="Older Poster Design Duplicate" className="w-48 h-64 mx-4" />
              <img src={poster2} alt="Game Day Poster Design Duplicate" className="w-48 h-64 mx-4" />
              <img src={poster3} alt="Cove Logo Concept Duplicate" className="w-48 h-64 mx-4" />
              <img src={poster4} alt="Cove Mockup Design Duplicate" className="w-48 h-64 mx-4" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;