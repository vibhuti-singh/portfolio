import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Progressbar = () => {
  const points = [
    { value: 'Home', position: '0%' },
    { value: 'About', position: '25%' },
    { value: 'Experience', position: '50%' },
    { value: 'Project', position: '75%' },
    { value: 'Contact', position: '100%' },
  ];

  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='progressbar w-1/12 fixed left-0 top-32'>
      <div className="relative h-full flex items-center justify-center">
        <div className="line w-0.5 bg-gray-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col items-center">
          {points.map((point, index) => (
            <Link
              key={index}
              to={index === 0 ? '/' : point.value.toLowerCase()}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="point h-1 w-1 bg-white rounded-full cursor-pointer hover:opacity-80"
                style={{ position: 'absolute', top: point.position, transform: 'translate(-50%, -50%)' }}
              />
              <span
                className={`text-lg ${pathname === (index === 0 ? '/' : `/${point.value.toLowerCase()}`) ? 'text-white' : 'text-gray-500 text-sm'}`}

                style={{ position: 'absolute', top: point.position, transform: 'translateY(-50%)', marginLeft: "10px" }}
              >
                {hoveredIndex === index ? point.value : index + 1}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progressbar;