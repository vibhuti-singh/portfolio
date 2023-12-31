import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import Homepage from './Homepage';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contactme from './Contactme';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.css'; 
import homeImage from "../assets/home.png";
import aboutImage from "../assets/about.png";
import profileImage from "../assets/project.png";
import expImage from "../assets/experience.png";
import contactImage from "../assets/contact.png";
import logo from "..//assets/logo.png"
import Progress from './Progress';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const { pathname } = useLocation();

  useEffect(() => {
    const pageName = pathname === '/' ? 'home' : pathname.slice(1);
    setActivePage(pageName);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const pageComponents = {
    home: <Homepage />,
    about: <About/>,
    experience: <Experience />,
    project: <Projects />,
    contact: <Contactme />,
  };

  const pageImages = {
    home: homeImage,
    about: aboutImage,
    experience: expImage,
    project: profileImage,
    contact: contactImage,
  };

  return (
    <>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className=" navbar text-white  animate__animated animate__fadeIn">
          <div className="text-white p-5 px-20 relative">
            <div className="flex items-center justify-between">
              {/* Logo/Name */}
              <div className=" glow text-3xl font-bold">{pathname==='/'?"Vibhuti Sengar": <img className='h-16 w-16' src={logo} alt="" />}</div>

              {/* Menu Icon */}
              <div className="glow cursor-pointer text-3xl" onClick={toggleMenu}>
                <TiThMenu />
              </div>
            </div>
          </div>
          <Progress activePage={activePage} />

          {isMenuOpen && (
            <div className="toggle-box fixed top-20 left-0 flex items-center justify-between z-50 " data-aos="zoom-out-up">
            <div className="flex h-full w-full items-center justify-center relative bg-black z-10 p-12">
              
              <div className="flex-1 h-full hidden md:block">
               <div className='flex items-center justify-center h-full p-4 '>
               <div className="nav-container relative overflow-hidden">
                  <div className="current-screen absolute w-full h-full flex items-center justify-center">
                    <img
                      src={pageImages[activePage]}
                      alt={`Image for ${activePage}`}
                      className='nav-image-container'
                    />
                  </div>
                </div>
               </div>
              </div>
                {/* Menu Section */}
                <div className="md:w-1/2 text-white flex items-center justify-center text-5xl">
                  <ul>
                    <li
                      className={`mb-2 ${activePage === 'home' && 'text-yellow-300 glow font-extrabold'}`}
                      onClick={() => handlePageClick('home')}
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className={`mb-2 ${activePage === 'about' && 'text-yellow-300 glow font-extrabold'}`}
                      onClick={() => handlePageClick('about')}
                    >
                      <Link to="/about">About Me</Link>
                    </li>
                    <li
                      className={`mb-2 ${activePage === 'experience' && 'text-yellow-300 glow font-extrabold'}`}
                      onClick={() => handlePageClick('experience')}
                    >
                      <Link to="/experience">Experience</Link>
                    </li>
                    <li
                      className={`mb-2 ${activePage === 'projects' && 'text-yellow-300 glow font-extrabold'}`}
                      onClick={() => handlePageClick('projects')}
                    >
                      <Link to="/project">Projects</Link>
                    </li>
                    <li
                      className={`${activePage === 'contact' && 'text-yellow-300 glow font-extrabold'}`}
                      onClick={() => handlePageClick('contact')}
                    >
                      <Link to="/contact">Contact Me</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;
