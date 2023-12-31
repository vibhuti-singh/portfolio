// Card.js
import React, { useState } from 'react';

const Card = ({ title, description, videoUrl, skills, websiteLink }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="border-gradient w-11/12 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="w-full h-full">
        <iframe
          className="h-full w-full"
          src={videoUrl}
          title={`Video for ${title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-6 py-4 bg-white h-3/5">
        <div className="font-bold  md:text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-xs">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleDescription}
          >
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        </p>
        <div className="mt-3">
          <strong className="text-gray-700 text-xs md:text-sm">Skills:</strong>{' '}
          <span className="text-gray-600 text-xs md:text-sm">{skills.join(', ')}</span>
        </div>
          <div className="mt-3 text-xs md:text-sm border-2 bg-blue-500 h-8 rounded-full flex items-center justify-center">
            <a
              href= {websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Visit Website
            </a>
          </div>
    
      </div>
    </div>
  );
};

export default Card;
