import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-1/3 flex justify-between items-center ">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `leading-6 underline-offset-8 ${ 
            isActive ? 'text-primary-500 underline' : ' text-brz-white'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
            `leading-6 underline-offset-8 ${
              isActive ? 'text-primary-500 underline' : ' text-brz-white'
            }`
          }
      >
        About Us 
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
            ` leading-6 underline-offset-8 ${
              isActive ? 'text-primary-500 underline' : ' text-brz-white'
            }`
          }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
            `leading-6 underline-offset-8 ${
              isActive ? 'text-primary-500 underline' : ' text-brz-white'
            }`
          }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
            `leading-6 underline-offset-8 ${
              isActive ? 'text-primary-500 underline' : ' text-brz-white'
            }`
          }
      >
        Contact Us
      </NavLink>
    </nav>
  );
};

export default Navigation;
