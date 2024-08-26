import React, { useState } from 'react';
import Nav from "./Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'; // Import faBars for the menu button
import { breezeLogo, breezeProfPic } from "../../assets/imgs-brz/images";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    //* Header styles*//
    <header className="sticky top-0 z-[1] mx-auto py-4 px-6 md:px-8 bg-primary-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={breezeLogo} alt="Breeze Logo" className="w-12 h-12" />
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <Nav />
        </div>
        
        {/* Cart icon and profile */}
        <div className="hidden md:flex p-1 gap-4 items-center">
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon 
              icon={faCartShopping} // Use faCartShopping here
              style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
              className="text-xl w-7 h-5" // Tailwind class for icon size
            />
          </Link>
          <Link to="/" className="flex items-center">
            <img src={breezeProfPic} alt="Breeze Profile Picture" className="w-10 h-10 rounded-full" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon 
            icon={faBars} // Use faBars for the menu button
            style={{ color: "rgba(180, 136, 127, 1)" }} 
            className="text-xl w-8 h-8" 
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Nav />
        <div className="flex flex-col items-center p-4">
          <Link to="/" className="flex items-center mb-4">
            <FontAwesomeIcon 
              icon={faCartShopping} 
              style={{ color: "rgba(180, 136, 127, 1)" }} 
              className="text-xl w-7 h-5" 
            />
          </Link>
          <Link to="/" className="flex items-center">
            <img src={breezeProfPic} alt="Breeze Profile Picture" className="w-10 h-10 rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};
