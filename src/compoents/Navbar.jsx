

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBard from '../common/SideBard';
import logo from '../../public/logo.png';
const Navbar = ({color,name,img}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add sidebar state

  // Logo component since we don't have the actual logo file
  const Logo = () => (
    <div className="text-white text-2xl font-bold">
      {/* <span className="text-white">✈</span> LEJHRO */}
      <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-36 mt-3">
        <img className="h-10" src={logo} alt="" />
      </div>
    </div>
  );

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`bg-[${color}] min-h-[40vh] relative`}>
        {/* Navigation */}
        <div className="flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-16 pt-6 sm:pt-8 md:pt-11">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Menu */}
          <div
            style={{
              fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            }}
            className="hidden lg:flex justify-center mt-6 gap-4 xl:gap-8 2xl:gap-12 text-[#fdfdfd] text-base lg:text-lg xl:text-[20px] mr-10 lg:mr-20 xl:mr-40 font-medium"
          >
            <div className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">
              <Link to="/innovations">Innovations</Link>
            </div>
            <div className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">
              <Link to="/business-services">Business Services</Link>
            </div>
            <div className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">
              <Link to="/financial-services">Financial Services</Link>
            </div>
            <div className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">
              <Link to="/bootcamp">Bootcamp</Link>
            </div>

            {/* Desktop Hamburger Menu - Updated to open sidebar */}
            <div className="hidden lg:block">
              <button
                onClick={handleSidebarToggle} // Updated to toggle sidebar
                aria-label="Open Drawer"
                type="button"
                className="flex flex-col justify-center items-center ml-4 lg:ml-6 xl:ml-9 w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fdfdfd] rounded-full p-2 border border-[#fdfdfd] hover:bg-white hover:border-white focus:bg-white focus:border-white transition-colors"
              >
                <div className="w-3 lg:w-4 h-0.5 bg-black my-[1px]"></div>
                <div className="w-2 h-0.5 bg-black my-[1px]"></div>
                <div className="w-3 lg:w-4 h-0.5 bg-black my-[1px]"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              type="button"
              className="flex flex-col justify-center items-center w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] bg-[#fdfdfd] rounded-full p-2 border mr-4 sm:mr-8 md:mr-16 lg:mr-52 border-[#fdfdfd] hover:bg-white hover:border-white focus:bg-white focus:border-white transition-colors"
            >
              <div className="w-3 sm:w-4 h-0.5 bg-black my-[1px] sm:my-[2px]"></div>
              <div className="w-2 h-0.5 bg-black my-[1px] sm:my-[2px]"></div>
              <div className="w-3 sm:w-4 h-0.5 bg-black my-[1px] sm:my-[2px]"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#d6932c] shadow-lg transition-all duration-300 z-50 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
            <div
              style={{
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
              }}
              className="text-[#fdfdfd] text-base sm:text-lg font-medium hover:text-white cursor-pointer transition-colors py-2 border-b border-[#fdfdfd]/20"
            >
              <Link to="/innovations">Innovations</Link>
            </div>
            <div
              style={{
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
              }}
              className="text-[#fdfdfd] text-base sm:text-lg font-medium hover:text-white cursor-pointer transition-colors py-2 border-b border-[#fdfdfd]/20"
            >
              <Link to="/business-services">Business Services</Link>
            </div>
            <div
              style={{
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
              }}
              className="text-[#fdfdfd] text-base sm:text-lg font-medium hover:text-white cursor-pointer transition-colors py-2 border-b border-[#fdfdfd]/20"
            >
              <Link to="/financial-services">Financial Services</Link>
            </div>
            <div
              style={{
                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
              }}
              className="text-[#fdfdfd] text-base sm:text-lg font-medium hover:text-white cursor-pointer transition-colors py-2"
            >
              <Link to="/bootcamp">Bootcamp</Link>
            </div>
          </div>
        </div>

        {/* Blog Title */}
       {img?<div><img  src={img} alt="" /></div>: <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 sm:px-6 md:px-8 lg:pl-[8vw] xl:pl-[13vw] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 font-semibold">
          {name}
        </div>}
      </div>

      {/* Sidebar Component */}
      <SideBard 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default Navbar;