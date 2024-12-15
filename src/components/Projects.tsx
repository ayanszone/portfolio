
// export default Projects

import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: 'Rock, Paper, & Scissors Game',
    desc: 'A fun, interactive game built with HTML, CSS, and JavaScript.',
    img: '/path/to/image1.jpg',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 1,
    title: 'Weather App',
    desc: 'A responsive app providing real-time weather updates with an elegant UI.',
    img: '/path/to/image2.jpg',
    tags: ['React', 'API', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Portfolio Website',
    desc: 'Showcasing my projects and skills in a professional layout.',
    img: '/path/to/image3.jpg',
    tags: ['React', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Expense Tracker',
    desc: 'An app for managing expenses with data visualization.',
    img: '/path/to/image4.jpg',
    tags: ['React', 'Chart.js', 'CSS']
  },
  {
    id: 4,
    title: 'E-commerce Store',
    desc: 'A fully functional store with search and filter capabilities.',
    img: '/path/to/image5.jpg',
    tags: ['Next.js', 'CSS', 'API']
  },
  {
    id: 5,
    title: 'To-Do List App',
    desc: 'A minimalistic app for organizing daily tasks.',
    img: '/path/to/image6.jpg',
    tags: ['JavaScript', 'HTML', 'CSS']
  }
];

const Projects = () => {
  return (
    <div id='projects' className='container mx-auto py-16 px-6 lg:px-12'>
      <Heading title='My Projects' />
      <div className='grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
