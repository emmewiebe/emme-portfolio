import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Animations for smooth scrolling effects and page transformation
import placeholder1 from '../img/about/cove-concept.png'; // Placeholder images for the project timeline
import placeholder2 from '../img/about/cove-moodboard.png';
import placeholder3 from '../img/about/cove-logo.png';
import placeholder4 from '../img/about/cove-brandboard.png';
import mockup1 from '../img/about/cove-mockup1.png';
import mockup2 from '../img/about/cove-mockup2.png';
import mockup3 from '../img/about/cove-mockup3.png';
import mockup4 from '../img/about/cove-mockup4.png';
import mockup5 from '../img/about/cove-mockup5.png';

const Project2 = () => {
  const { scrollYProgress } = useScroll(); // Keeps track of how far down the page the user has scrolled
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Makes stuff spin as the user scrolls

  return (
    <section className="relative bg-white pt-24 lg:pt-32">
      {/* Scroll Down Circle Animation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          style={{
            rotate: rotation, // Rotates the circle as the user scrolls
          }}
          className="w-16 h-16 border-2 border-[#345363] rounded-full flex items-center justify-center relative"
        >
          <p
            className="absolute text-[10px] font-bold tracking-widest text-[#345363]"
            style={{
              whiteSpace: 'nowrap',
              transform: 'rotate(-90deg)', // Keeps the text upright even as the circle spins!
            }}
          >
            SCROLL DOWN · SCROLL DOWN · SCROLL DOWN ·
          </p>
        </motion.div>
      </div>

      {/* Header Section */}
      <div className="bg-[#eef7f9] py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-hemis text-[#345363] mb-4">
          Cove Coffee Branding
        </h1>
        <p className="text-gray-600 text-base lg:text-lg font-defante max-w-2xl mx-auto">
          A branding project for a modern coffee shop. The goal: design a clean, youthful aesthetic that appeals to a vibrant audience.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 lg:px-16 py-12 relative">
        {/* Vertical Line for Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-10">
          <motion.div
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']), // Fills the line as the user scrolls
            }}
            className="bg-[#345363] w-full absolute top-0"
          ></motion.div>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-16 relative z-20">
          {/* Item 1: Concept Creation */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Slide in from the left
            whileInView={{ opacity: 1, x: 0 }} // Becomes visible when scrolled into view
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
          >
            <div className="w-1/3">
              <img
                src={placeholder1}
                alt="Concept Creation"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-2/5 text-left lg:ml-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Concept Creation
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                Worked on the initial concept of the brand, focusing on creating a fresh, modern identity for the coffee shop.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Moodboard Development */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Slide in from the right
            whileInView={{ opacity: 1, x: 0 }} // Becomes visible when scrolled into view
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
          >
            <div className="w-2/5 text-right lg:mr-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Moodboard Development
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                Crafted moodboards to capture the overall vibe. The client selected a sleek and energetic theme.
              </p>
            </div>
            <div className="w-1/3">
              <img
                src={placeholder2}
                alt="Moodboard Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Item 3: Logo Design */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
          >
            <div className="w-1/3">
              <img
                src={placeholder3}
                alt="Logo Design"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-2/5 text-left lg:ml-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Logo Design
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                Designed a modern logo with clean lines and bold text to reflect the youthful energy of the brand.
              </p>
            </div>
          </motion.div>

          {/* Item 4: Brand Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
          >
            <div className="w-2/5 text-right lg:mr-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Brand Guidelines
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                Developed guidelines for consistent branding across all platforms, including fonts, colors, and logo placement.
              </p>
            </div>
            <div className="w-1/3">
              <img
                src={placeholder4}
                alt="Brand Guidelines"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Item 5: Mockups */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <img src={mockup1} alt="Mockup 1" className="rounded-lg shadow-lg max-w-[300px]" />
            <img src={mockup2} alt="Mockup 2" className="rounded-lg shadow-lg max-w-[300px]" />
            <img src={mockup3} alt="Mockup 3" className="rounded-lg shadow-lg max-w-[300px]" />
            <img src={mockup4} alt="Mockup 4" className="rounded-lg shadow-lg max-w-[300px]" />
            <img src={mockup5} alt="Mockup 5" className="rounded-lg shadow-lg max-w-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;