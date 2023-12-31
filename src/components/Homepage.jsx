import React from 'react';
import aiImage from "../assets/ai.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full relative overflow-hidden z-0"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aiImage}) center/cover no-repeat fixed`,
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
      <div className="relative z-10 text-white text-center">
        <div className="glow text-5xl font-extrabold mb-4 animate__animated animate__fadeInUp">
          Welcome to My Portfolio
        </div>
        <p className="text-lg mb-8 text-center animate__animated animate__fadeIn">
          Explore my work and journey in the world of technology.
        </p>
       <button  className="bg-white text-indigo-800 font-bold w-48 py-3 px-8 rounded-full transition duration-300 hover:bg-indigo-800 hover:text-white shadow-lg animate__animated animate__fadeIn ">
       <Link
          to={"/about"}
         
        >
          <span className='flex items-center justify-around  '>
          Let's go<FaArrowRight className='' />
          </span>
        </Link>
       </button>
      </div>
    </div>
  );
};

export default Homepage;
