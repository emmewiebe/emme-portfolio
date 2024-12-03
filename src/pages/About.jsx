import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emme1 from '../img/about/emme1.jpg';
import emme2 from '../img/about/emme2.jpg';
import emme3 from '../img/about/emme3.jpg';
import emme4 from '../img/about/emme4.jpg';
import photoshop from '../img/about/photoshop.png';
import illustrator from '../img/about/illustrator.png';
import figma from '../img/about/figma.png';
import aftereffects from '../img/about/aftereffects.png';
import html from '../img/about/html.png';
import js from '../img/about/js.png';

const About = () => {
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
      <div className="bg-[#345363] py-16 text-center">
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
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-end gap-4 lg:gap-8 relative"
          >
            <div className="w-1/3">
              <img
                src={emme1}
                alt="About Image 1"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-2/5 text-left lg:ml-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                Hi, I'm Emme!
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                I specialize in brand strategy and digital marketing, helping
                craft brand identities that truly reflect your values and
                mission. I’m passionate about getting to know my clients,
                understanding their vision, and turning it into a brand story
                that feels authentic and impactful.
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
          >
            {/* Text Section */}
            <div className="w-2/5 text-right lg:mr-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#345363]">
                What do I bring to the table?
              </h2>
              <p className="text-gray-600 text-sm lg:text-base font-defante">
                I specialize in branding and design, with skills in Photoshop,
                Illustrator, and Figma. My tools extend to motion graphics using
                Adobe After Effects, allowing me to bring ideas to life with
                dynamic visuals. Additionally, my knowledge of JavaScript and
                HTML enables me to collaborate effectively with developers,
                bridging the gap between design and development to create
                seamless, impactful projects.
              </p>
            </div>

            {/* Icons Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center w-1/3 relative lg:ml-8"
            >
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

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                In my free time, I love traveling, going on hikes, snapping film
                photos, and stopping to pet every dog I meet.
              </p>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center lg:justify-start gap-4 lg:gap-8 relative"
          >
            <div className="w-2/5 text-right lg:mr-8">
            
            </div>
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
  );
};

export default About;