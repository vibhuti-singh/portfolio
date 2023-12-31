// Card.js
import React, { useState } from 'react';

const Card = ({ title, description, videoUrl, skills, websiteLink }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="border-gradient w-11/12 h-10/12 overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="w-full h-1/3 overflow-hidden">
        <iframe
          className="h-full w-full object-cover"
          src={videoUrl}
          title={`Video for ${title}`}
          frameBorder="0"
          allow="accelerometer; autoplay;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-6 py-4 contact-gredient">
        <div className="font-bold md:text-xl mb-2 text-gray-200">{title}</div>
        <p className="text-gray-400 text-xs md:text-sm mb-4">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
          <span
            className=" cursor-pointer text-yellow-300"
            onClick={toggleDescription}
          >
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        </p>
        <div className="text-sm mb-2">
          <strong className="text-gray-200">Skills:</strong>{' '}
          <span className="text-gray-400">{skills.join(', ')}</span>
        </div>
        <div className="text-sm border-2 border-yellow-300 h-8 rounded-full flex items-center justify-center">
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
