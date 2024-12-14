import React from 'react';
import WomanImg from '../img/contact/woman.png'; // Placeholder image for the contact section
import { motion } from 'framer-motion'; // For smooth animations
import { transition1 } from '../transitions.jsx'; // Custom transition settings
import { Helmet } from 'react-helmet'; // For SEO tags and title

const Contact = () => {
  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Emme - Get in Touch for Branding & Digital Marketing</title>
        <meta 
          name="description" 
          content="Contact Emme for brand strategy, digital marketing, design inquiries, and collaborations. Connect to discuss your branding and content creation needs." 
        />
        <meta 
          name="keywords" 
          content="Contact, Branding, Digital Marketing, Graphic Design, Motion Graphics, Brand Strategy, Content Creation, Emme" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Emme - Get in Touch" />
        <meta 
          property="og:description" 
          content="Reach out to Emme to learn more about her branding and marketing services or to start your next project." 
        />
        <meta property="og:image" content={WomanImg} />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        // Animation for the section when it enters and exits
        initial={{ opacity: 0, y: '100%' }} // Starts off-screen (below)
        animate={{ opacity: 1, y: 0 }} // Slides into view
        exit={{ opacity: 0, y: '100%' }} // Slides out when navigating away
        transition={transition1} // Transition timing
        className="section bg-white"
      >
        <div className="container mx-auto h-full">
          {/* Wrapper for the contact section layout */}
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
            {/* Background Placeholder */}
            <div
              className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
            >
              {/* This is just a decorative background */}
            </div>

            {/* Text and Form Section */}
            <motion.div
              // Animation for this block when it enters and exits
              initial={{ opacity: 0, y: '-80%' }} // Starts slightly above
              animate={{ opacity: 1, y: 0 }} // Slides into place
              exit={{ opacity: 0, y: '-80%' }} // Slides out when leaving
              transition={transition1} // Smooth timing
              className="lg:flex-1 lg:pt-32 px-4"
            >
              <h1 className="h1">Contact me</h1> {/* Section title */}

              {/* Contact Form */}
              <form className="flex flex-col gap-y-4">
                {/* Row for Name and Email */}
                <div className="flex gap-x-10">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your name" // Placeholder text
                  />
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your email address" // Placeholder text
                  />
                </div>

                {/* Message Input */}
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your message" // Placeholder text
                />

                {/* Submit Button */}
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                  Send it {/* Button text */}
                </button>
              </form>
            </motion.div>

            {/* Image Section (currently empty) */}
            <motion.div
              // Animation for this block when it enters and exits
              initial={{ opacity: 0, y: '100%' }} // Starts off-screen (below)
              animate={{ opacity: 1, y: 0 }} // Slides into view
              exit={{ opacity: 0, y: '100%' }} // Slides out when navigating away
              transition={{ transition: transition1, duration: 1.5 }} // Smooth timing with a longer duration
              className="lg:flex-1"
            >
              {/* Placeholder for an image or additional content */}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;