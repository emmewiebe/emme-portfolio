import React from 'react';

// Importing icons for social media links
import { ImLinkedin, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24"> {/* Only show on larger screens */}
      <ul className="flex gap-x-4"> {/* Creates a horizontal row of social icons */}
        {/* Instagram */}
        <li>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            {/* Opens Instagram in a new tab */}
            <ImInstagram /> {/* Instagram icon */}
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            {/* Opens LinkedIn in a new tab */}
            <ImLinkedin /> {/* LinkedIn icon */}
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