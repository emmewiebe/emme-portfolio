import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Animations for smooth scrolling effects and page transformation
import { Helmet } from 'react-helmet'; // For SEO tags and title
import placeholder1 from '../img/about/moodboard.png'; // Placeholder images for the project timeline
import placeholder2 from '../img/about/havenmoodboad.png';
import placeholder3 from '../img/about/soapbars.png';
import placeholder4 from '../img/about/brandboard.png';
import mockupImage from '../img/about/havensoapmockup.png'; // New image for the mockups section

const Project1 = () => {
  const { scrollYProgress } = useScroll(); // Keeps track of how far down the page the user has scrolled
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Makes stuff spin as the user scrolls

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Havenmade Essentials Rebranding Project by Emme Drew</title>
        <meta
          name="description"
          content="Explore how Emme Drew revitalized the Havenmade Essentials brand. Discover the new brand identity, moodboards, logo redesign, brand guidelines, and product mockups for this artisan soap business."
        />
        <meta
          name="keywords"
          content="Havenmade Essentials, Emme Drew, rebranding, artisan soap, brand strategy, logo redesign, moodboards, brand guidelines, product mockups"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Havenmade Essentials Rebranding Project" />
        <meta
          property="og:description"
          content="See how Emme Drew crafted a new brand identity for Havenmade Essentials, including a natural aesthetic, professional logo, and cohesive guidelines."
        />
        <meta property="og:image" content={mockupImage} />
        <meta property="og:type" content="website" />
      </Helmet>

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
            Havenmade Essentials
          </h1>
          <p className="text-gray-600 text-base lg:text-lg font-defante max-w-2xl mx-auto">
            A rebranding project for a small artisan soap business. The goal: give it a fresh, modern identity while keeping it relatable for its target audience.
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
            {/* Item 1: Client Onboarding */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Slide in from the left
              whileInView={{ opacity: 1, x: 0 }} // Becomes visible when scrolled into view
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
            >
              <div className="w-1/3">
                <img
                  src={placeholder1}
                  alt="Client Onboarding moodboard with natural and earthy elements"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/5 text-left lg:ml-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  Client Onboarding & Brainstorming
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  Started the project with a meeting to figure out what the client wanted, who their audience was, and how we could make it happen.
                </p>
              </div>
            </motion.div>

            {/* Item 2: Moodboard Creation */}
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Slide in from the right
              whileInView={{ opacity: 1, x: 0 }} // Becomes visible when scrolled into view
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
            >
              <div className="w-2/5 text-right lg:mr-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  Moodboard Creation
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  Made some moodboards to nail down the vibe. The client picked a natural, earthy aesthetic.
                </p>
              </div>
              <div className="w-1/3">
                <img
                  src={placeholder2}
                  alt="Moodboard featuring natural colors, textures, and organic imagery"
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
                  alt="Various soap bar mockups arranged to showcase the new logo design"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/5 text-left lg:ml-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  Logo Redesign
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  Redesigned the logo to look professional and authentic. It uses clean typography with natural elements.
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
                  Wrapped up the project by creating a guide with everything the client needs: fonts, colors, and rules for how to use the logo.
                </p>
              </div>
              <div className="w-1/3">
                <img
                  src={placeholder4}
                  alt="Brand guideline document featuring color palettes, typography, and logo usage"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Item 5: Mockups */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
            >
              <div className="w-1/3">
                <img
                  src={mockupImage}
                  alt="A realistic product mockup showing Havenmade Essentials soap packaging"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/5 text-left lg:ml-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  Mockups
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  Created realistic mockups to showcase how the new designs would look on soap packaging and other materials.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project1;