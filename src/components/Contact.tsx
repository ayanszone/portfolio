
// export default Contact

import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact' className='py-24 px-6 md:px-32'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 shadow-lg rounded-xl bg-white p-10'>
        <div className='space-y-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>Get in Touch</h2>
          <p className='text-gray-600 text-lg'>
            Drop me a line, give me a call, or send me a message by submitting the form below. I look forward to connecting!
          </p>
          <div className='flex items-center gap-3 text-gray-700'>
            <AiOutlineMail size={30} className='text-indigo-600' />
            <span className='text-lg'>sheikhayaan317@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 text-gray-700'>
            <BsTelephone size={30} className='text-indigo-600' />
            <span className='text-lg'>+92-330-2230-235</span>
          </div>
        </div>
        <form className='space-y-6'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-lg font-medium text-gray-700'>Name</label>
            <input
              type='text'
              id='name'
              className='h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors'
              placeholder='Your Name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-lg font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              className='h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors'
              placeholder='Your Email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message' className='text-lg font-medium text-gray-700'>Message</label>
            <textarea
              id='message'
              rows={5}
              className='p-4 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors'
              placeholder='Your Message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-indigo-600 to-indigo-900 text-white font-medium py-3 rounded-md hover:bg-accent-dark transition-colors'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
