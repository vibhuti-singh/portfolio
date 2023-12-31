import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.css';
import Card from './Card'; // Import the Card component
import { Link } from 'react-router-dom';
import food from "../assets/food.mp4";
import crypto from "../assets/crypto.mp4";
import exp from "../assets/expence.mp4"
import auth from "../assets/auth.mp4"
import { BsEmojiSmileFill } from "react-icons/bs";
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint based on your design needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: 'Crypto-World',
      description: 'Crypto World, your gateway to the financial frontier. Seamlessly integrating CoinGecko API, Redux for state management, and Tailwind for sleek design, explore, search, and analyze any coin with ease. Dive into the crypto universe, where information meets style.',
      videoUrl: crypto,
      skills: ['Redux', 'Tailwind'],
      websiteLink : 'https://crypto-world-vibhuti-singh.vercel.app/'
    },
    {
      title: 'Quick Crave',
      description: 'Quick Crave, your go-to destination for instant culinary satisfaction. Powered by React for seamless functionality and adorned with Tailwind for a visually appetizing experience, explore a world of flavors and order your favorite meals effortlessly on our delectable food ordering website.',
      videoUrl: food,
      skills: ['React', 'Tailwind'],
      websiteLink:"https://foodie-git-main-vibhuti-singh.vercel.app/"
    },
    {
      title: 'Expence Manager',
      description: 'Simplify your financial journey with our Expense Manager app. Track income and expenses effortlessly, while our intuitive interface manages your data seamlessly. Visualize your financial landscape with insightful pie charts, empowering you to make informed decisions for a brighter financial future.',
      videoUrl: exp,
      skills: ['React','Bootstrap'],
      websiteLink : "https://expence-manager-vibhuti-singh.vercel.app/"
    },
    {
      title: 'Authentication',
      description: 'Experience flawless authentication with our app, ensuring a secure login and logout process. Seamlessly protect your account with a perfect blend of simplicity and security, providing you peace of mind in every session.',
      videoUrl: auth,
      skills: ['Redux', 'MaterialUI'],
      websiteLink : "https://authentication-app-vibhuti-singh.vercel.app/"
    },
    // Add more projects as needed
  ];

  return (
 
      <div className="text-white h-fit animate__animated animate__fadeIn mx-10">
      <h2 className='w-full text-center text-lg md:text-4xl text gradient-text font-extrabold md:mt-10'>Some of my projects</h2>

    <div>
    <Slider {...settings} afterChange={() => setCurrentSlide}>
      {projects.map((project, index) => (
        <div className='mt-10' key={index}>
          <Card 
            title={project.title}
            description={project.description}
            videoUrl={project.videoUrl}
            skills={project.skills}
            websiteLink={project.websiteLink}
            isMiddle={index === currentSlide}
          />
        </div>
      ))}
    </Slider>
    </div>
   <div className='w-full flex items-center justify-center mt-5'>
   <button className='border-2 border-gradient border-whiten rounded-full p-2  '><Link className='flex items-center justify-around' to={"/contact"}>
   Let's Connect <BsEmojiSmileFill className='mx-2 text-2xl text-yellow-500' />
   </Link></button>
   </div>
  </div>
 
  );
};

export default Projects;
