import React from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.css';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
const About = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Set arrows to false to hide navigation arrows
    autoplay: true,
    autoplaySpeed: 700 ,
    
  };
  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 85 },
    { name: 'JavaScript', value: 92 },
    { name: 'React.js', value: 95 },
    { name: 'Redux', value: 90 },
    { name: 'Tailwind', value: 90 },
    { name: 'BootStrap', value: 92 },
    { name: 'MaterialUi', value: 85 },
    // Add more skills as needed
  ];

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="flex flex-col overflow-hidden text-white md:pt-10">
        {/* Top Section - Image */}
        <div className="md:h-1/2 w-full md:w-2/3 flex items-center justify-center animate__animated animate__fadeIn animate__delay-1s">
         
          <img
            src={profile}
            alt="Profile"
            className="h-24 md:h-40 md:w-40 w-24 p-2 rounded-full border-4 border-white shadow-lg transform hover:rotate-6 transition duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          <div className="md:w-2/3 w-full relative p-8 flex flex-col items-center justify-center animate__animated animate__fadeIn animate__delay-2s">
            <h1 className="glow text-lg md:text-3xl font-extrabold mb-2">
              Hello, I'm vibhuti
            </h1>
            <p className="md:text-sm text-xs text-gray-300 text-start mb-4">
    A passionate Computer Science graduate, specializing in crafting digital experiences with precision and creativity. My journey began with a B.Sc in Computer Science, followed by the completion of my MCA in 2020. I thrive on the challenge of turning ideas into beautifully designed, user-centric realities. Let's collaborate and transform your concepts into impactful digital solutions. In my academic pursuits, I've delved into diverse projects that have strengthened my problem-solving skills and fostered a keen eye for detail. Beyond the code, I enjoy staying updated with the latest technologies, attending hackathons, and contributing to the tech community. I believe in the power of innovation to shape the future and am excited about the endless possibilities that technology holds. Let's embark on a journey where creativity meets functionality, and together, we can bring your visions to life.
  </p>
  <div className="w-full md:hidden relative animate__animated animate__fadeIn animate__delay-2s">
          <div className='easy-in-out'>
            <h2 className="text-sm font-extrabold mb-4 glow">My Skills are</h2>
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <div key={index} className="text-sm bg-violet-950 text-center w-3/12 glow">
                  {skill.name}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      
  


            <div className="mt-6 flex">
              <button
                className="bg-white text-purple-800 hover:bg-purple-700 text-sm border border-purple-800 hover:text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hidden md:block "
                onClick={() => openLinkInNewTab('https://www.linkedin.com/in/vs2206')}
              >
                 <FaLinkedin className='text-2xl' />
              </button>
              <button
                className="bg-white text-purple-800 hover:bg-purple-700 text-sm border border-purple-800 hover:text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 mx-5 hidden md:block "
                onClick={() => openLinkInNewTab('https://github.com/vibhuti-singh')}
              >
                 <FaGithub className='text-2xl' />
              </button>
              <button
                className="bg-white text-purple-800 hover:bg-purple-700 text-sm border border-purple-800 hover:text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 "
              >
               <Link to={"/experience"}> Explore my experience</Link>
              </button>
            </div>
          </div>

          {/* Right Section - Skill Ratings */}
          <div className="w-1/3 hidden sm:block relative p-8 animate__animated animate__fadeIn animate__delay-2s">
          <div>
          <h2 className="text-xl font-extrabold mb-4 glow">My Skills</h2>
            <div className="space-y-3 w-full">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-3 w-full">
                  <div className="w-16 text-sm glow">{skill.name}</div>
                  <div className="flex-grow mx-2 h-2 relative overflow-hidden rounded-full bg-gray-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 w-full rounded-full animate__animated animate__fadeIn`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                  <div className="ml-2 text-sm text-gray-300  glow">{skill.value}%</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default About;
