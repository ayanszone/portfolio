
// export default Skills

import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className='container py-32'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-white-800 mb-4'>Technologies I Work With</h2>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
          I have a strong foundation in modern web development, utilizing a diverse set of technologies to build user-centric and performant applications.
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12'>
        {[
          { name: 'TypeScript', color: 'bg-blue-600' },
          { name: 'React.js', color: 'bg-blue-500' },
          { name: 'Next.js', color: 'bg-emerald-500' },
          { name: 'Tailwind CSS', color: 'bg-teal-500' },
          { name: 'CSS', color: 'bg-blue-400' },
          { name: 'Node.js', color: 'bg-green-600' }
        ].map((tech, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white ${tech.color} transform hover:-translate-y-2 transition-transform duration-300`}
          >
            <h3 className='text-2xl font-semibold'>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
