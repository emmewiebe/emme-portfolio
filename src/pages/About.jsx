import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Framer Motion for animations
import { Helmet } from 'react-helmet'; // For adding SEO meta tags and title
import emme1 from '../img/about/emme1.jpg'; // About images
import emme2 from '../img/about/emme2.jpg';
import emme3 from '../img/about/emme3.jpg';
import emme4 from '../img/about/emme4.jpg';
import photoshop from '../img/about/photoshop.png'; // Skill icons
import illustrator from '../img/about/illustrator.png';
import figma from '../img/about/figma.png';
import aftereffects from '../img/about/aftereffects.png';
import html from '../img/about/html.png';
import js from '../img/about/js.png';

const About = () => {
  const { scrollYProgress } = useScroll(); // Tracks how far down the user has scrolled
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotates a circle as you scroll

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>About Emme - Brand Strategy & Digital Marketing Specialist</title>
        <meta
          name="description"
          content="Learn about Emme, a specialist in brand strategy, digital marketing, and design. Explore her expertise in branding, motion graphics, and content creation, and discover her personal interests and journey."
        />
        <meta
          name="keywords"
          content="Brand Strategy, Digital Marketing, Graphic Design, Motion Graphics, Branding, Content Creation, Adobe Photoshop, Adobe Illustrator, Figma, Adobe After Effects, HTML, JavaScript, Creative Consultant, Emme"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Emme - Brand Strategy & Digital Marketing Specialist" />
        <meta
          property="og:description"
          content="Discover Emme's passion for creating authentic brand identities, her skills in various design and marketing tools, and her personal interests."
        />
        <meta property="og:image" content={emme1} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative bg-white pt-24 lg:pt-32">
        {/* Scroll Down Circle */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <motion.div
            style={{
              rotate: rotation, // Circle rotates as the user scrolls
            }}
            className="w-16 h-16 border-2 border-[#345363] rounded-full flex items-center justify-center relative"
          >
            <p
              className="absolute text-[10px] font-bold tracking-widest text-[#345363]"
              style={{
                whiteSpace: 'nowrap',
                transform: 'rotate(-90deg)', // Keeps the text upright as the circle rotates
              }}
            >
              SCROLL DOWN · SCROLL DOWN · SCROLL DOWN ·
            </p>
          </motion.div>
        </div>

        {/* Header Section */}
        <div className="bg-[#345363] py-16 text-center">
          {/* Optional title or introduction here */}
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto px-4 lg:px-16 py-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-10">
            <motion.div
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']), // Line fills as you scroll
              }}
              className="bg-[#345363] w-full absolute top-0"
            ></motion.div>
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 relative z-20">
            {/* Item 1: Intro */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Starts off-screen (to the left)
              whileInView={{ opacity: 1, x: 0 }} // Slides into view
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
            >
              {/* Image */}
              <div className="w-1/3">
                <img
                  src={emme1}
                  alt="About Image 1"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Text */}
              <div className="w-2/5 text-left lg:ml-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  Hi, I'm Emme!
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  I specialize in brand strategy and digital marketing, helping
                  clients create authentic and impactful brand identities.
                </p>
              </div>
            </motion.div>

            {/* Item 2: Skills */}
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Starts off-screen (to the right)
              whileInView={{ opacity: 1, x: 0 }} // Slides into view
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
            >
              {/* Text */}
              <div className="w-2/5 text-right lg:mr-8">
                <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                  What do I bring to the table?
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  Skills in branding, design, and motion graphics using tools like
                  Photoshop, Illustrator, Figma, After Effects, HTML, and
                  JavaScript.
                </p>
              </div>

              {/* Icons Grid */}
              <motion.div
                initial={{ opacity: 0 }} // Starts invisible
                whileInView={{ opacity: 1 }} // Fades in
                transition={{ duration: 0.6, delay: 0.3 }} // Staggered animation
                className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center w-1/3 relative lg:ml-8"
              >
                {/* Skill Icons */}
                <motion.img
                  src={photoshop}
                  alt="Adobe Photoshop"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.img
                  src={illustrator}
                  alt="Adobe Illustrator"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                <motion.img
                  src={figma}
                  alt="Figma"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                <motion.img
                  src={aftereffects}
                  alt="Adobe After Effects"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                />
                <motion.img
                  src={html}
                  alt="HTML"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                />
                <motion.img
                  src={js}
                  alt="JavaScript"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Item 3: Personal Interests */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Starts off-screen (to the left)
              whileInView={{ opacity: 1, x: 0 }} // Slides into view
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
            >
              <div className="w-1/3">
                <img
                  src={emme3}
                  alt="About Image 3"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/5 text-left lg:ml-8">
                <p className="text-gray-600 text-sm lg:text-base font-defante">
                  In my free time, I love traveling, hiking, snapping film photos,
                  and petting every dog I meet.
                </p>
              </div>
            </motion.div>

            {/* Item 4: Closing Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
            >
              <div className="w-1/3">
                <img
                  src={emme4}
                  alt="About Image 4"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;