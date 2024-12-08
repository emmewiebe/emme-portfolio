import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import placeholder1 from '../img/about/moodboard.png';
import placeholder2 from '../img/about/haven.png';
import placeholder3 from '../img/about/soap.png';
import placeholder4 from '../img/about/guideline.png';

const Project1 = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotate full circle as user scrolls

  return (
    <section className="relative bg-white pt-24 lg:pt-32">
      {/* Scroll Down Circle */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          style={{
            rotate: rotation, // Dynamically rotate text
          }}
          className="w-16 h-16 border-2 border-[#345363] rounded-full flex items-center justify-center relative"
        >
          <p
            className="absolute text-[10px] font-bold tracking-widest text-[#345363]"
            style={{
              whiteSpace: 'nowrap',
              transform: 'rotate(-90deg)', // Start text properly aligned
            }}
          >
            SCROLL DOWN · SCROLL DOWN · SCROLL DOWN ·
          </p>
        </motion.div>
      </div>

      {/* Header Section */}
      <div className="bg-[#eef7f9] py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-hemis text-[#345363] mb-4">
          Havenmade Essentials
        </h1>
        <p className="text-gray-600 text-base lg:text-lg font-defante max-w-2xl mx-auto">
          A rebranding project for a small artisan soap business, focused on modernizing its identity, enhancing customer appeal, and creating a consistent brand presence.
        </p>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 lg:px-16 py-12 relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-10">
          <motion.div
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
            className="bg-[#345363] w-full absolute top-0"
          ></motion.div>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-16 relative z-20">
          {/* Item 1: Client Onboarding */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
          >
            <div className="w-1/3">
              <img
                src={placeholder1}
                alt="Client Onboarding"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-2/5 text-left lg:ml-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Client Onboarding & Brainstorming
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                We started with a detailed onboarding process to gather insights into the client's brand vision, values, and target audience. This helped establish a clear direction for the rebranding project.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Moodboard Creation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
          >
            <div className="w-2/5 text-right lg:mr-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Moodboard Creation
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                Based on brainstorming, we developed two moodboards reflecting different aesthetics. The client selected a natural and earthy style, which became the foundation for the brand's design.
              </p>
            </div>
            <div className="w-1/3">
              <img
                src={placeholder2}
                alt="Moodboard Creation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Item 3: Logo Redesign */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
          >
            <div className="w-1/3">
              <img
                src={placeholder3}
                alt="Logo Redesign"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-2/5 text-left lg:ml-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Logo Redesign
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                The final logo combined natural elements and clean typography, balancing authenticity with professionalism to appeal to the target audience.
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
                A comprehensive style guide was created, covering typography, color palette, and logo usage to ensure consistent branding across all platforms.
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
        </div>
      </div>
    </section>
  );
};

export default Project1;