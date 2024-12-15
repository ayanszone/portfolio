
// export default Footer

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-16 py-8 bg-gray-900 text-white'>
      <div className='container mx-auto flex flex-col items-center space-y-4'>
        <div className='flex space-x-4'>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-gray-400'>
            <FaLinkedin />
          </a>
          <a href='https://www.github.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-gray-400'>
            <FaGithub />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-gray-400'>
            <FaTwitter />
          </a>
        </div>
        <p className='text-sm md:text-base'>
          © Ayaan | All rights reserved 2024.
        </p>
        <p className='text-xs text-gray-500'>
          Designed and built with love and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
