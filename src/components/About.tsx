
// export default About

import React from 'react';

const About = () => {
  return (
    <section id='about' className='container mx-auto py-24 px-6 lg:px-20 '>
      <div className='flex flex-col items-start space-y-8'>
        <h2 className='text-5xl font-extrabold text-white-800 mb-6'>About Me</h2>
        <p className='text-gray-300 text-lg leading-relaxed'>
          I'm a passionate student at GIAIC, immersed in a comprehensive course that explores the realms of Artificial Intelligence, Web 3.0, and Metaverse technologies. My fascination with tech drives me to push boundaries and create meaningful, future-focused solutions.
        </p>
        <p className='text-gray-300 text-lg leading-relaxed'>
          I specialize in blending modern web development practices with new-age technologies, ensuring a user-first approach in all my projects. Collaborative, inquisitive, and solution-driven, I’m always looking to learn, grow, and contribute to innovative tech spaces.
        </p>
      </div>
    </section>
  );
};

export default About;
  