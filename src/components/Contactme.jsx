// ContactMe.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaUser, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { LuDownload } from "react-icons/lu";
const ContactMe = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={800} classNames="fade-slide">
      <div className="min-h-full flex items-center justify-center">
        <div className="contact-gredient border-gradient w-full md:w-1/3  text-white p-8  transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="text-center flex flex-col items-center justify-center">
            <FaUser className="text-6xl mb-4" />
            <h2 className="text-3xl font-extrabold">Vibhuti Sengar</h2>
            <p className="text-sm">Passionate Web Developer</p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-sm" />
              <a href="mailto:vibhuti0622thakur@gmail.com" className="text-sm" target="_blank" rel="noopener noreferrer">
                vibhuti0622thakur@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-sm" />
              <a href="https://github.com/vibhuti-singh" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
              https://github.com/vibhuti-singh
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-sm" />
              <a href="https://www.linkedin.com/in/vs2206" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/vs2206
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-sm" />
              <a href="https://wa.me/9407590843" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-sm" />
              <a href="https://maps.google.com?q=Indore,India" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Indore, India
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="src/assets/vibhutiresume.pdf"
              className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out flex items-center justify-between"
              download="Vibhuti_Resume.pdf"
            >
              Download Resume <LuDownload  className='mx-2 text-2xl animate-bounce'/>
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContactMe;
