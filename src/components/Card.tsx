import React from 'react'
import Image from 'next/image';
interface propsType{
    title:string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105'>
  <img src={img} alt={title} className='w-full h-48 object-cover' />
  <div className='p-5'>
    <h2 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h2>
    <p className='text-gray-600 mb-4'>{desc}</p>
    <div className='flex flex-wrap gap-2'>
      {tags.map(tag => (
        <span key={tag} className='bg-blue-100 text-blue-700 text-xs font-medium rounded-full px-3 py-1'>
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>

  )
}

export default Card