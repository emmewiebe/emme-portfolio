import React from 'react';

// Importing icons for social media links
import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24"> {/* Only show on larger screens */}
      <ul className="flex gap-x-4"> {/* Creates a horizontal row of social icons */}
        {/* Facebook */}
        <li>
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
            {/* Opens Facebook in a new tab */}
            <ImFacebook /> {/* Facebook icon */}
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
            {/* Opens Twitter in a new tab */}
            <ImTwitter /> {/* Twitter icon */}
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            {/* Opens Instagram in a new tab */}
            <ImInstagram /> {/* Instagram icon */}
          </a>
        </li>

        {/* YouTube */}
        <li>
          <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
            {/* Opens YouTube in a new tab */}
            <ImYoutube /> {/* YouTube icon */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;