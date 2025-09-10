import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90">
      {/* Top Header Bar */}
      <div className="w-full bg-[#fb0100]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
          <div className="flex flex-col sm:flex-row justify-center items-center py-[10px] gap-2 sm:gap-4 lg:gap-0">
            {/* Contact Info Row */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-[20px] text-xs">
              {/* Location */}
              <div className="flex items-center gap-[6px]">
                <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4" />
                <span className="text-[#f9fafb] text-xs font-normal leading-[15px]">
                  1 Soon Lee Street, #02-29 Pioneer Centre, Singapore 627605
                </span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-[6px]">
                <img src="/images/img_mail.svg" alt="email" className="w-4 h-4" />
                <span className="text-[#f9fafb] text-xs font-normal leading-[15px]">
                  sales.ammanconstruction@gmail.com
                </span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-[4px]">
                <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4" />
                <span className="text-[#f9fafb] text-xs font-normal leading-[15px]">
                  +65 81195016
                </span>
              </div>
              
              {/* UEN */}
              <div className="hidden lg:block">
                <span className="text-[#f9fafb] text-xs font-normal leading-[15px]">
                  UEN NO:202410926D
                </span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-[4px] lg:ml-[44px]">
              <span className="text-[#f9fafb] text-xs font-normal leading-[15px]">Follow us on</span>
              <a href="#" className="ml-2">
                <img src="/images/img_facebook.svg" alt="facebook" className="w-4 h-4" />
              </a>
              <a href="#">
                <img src="/images/img_instagram.svg" alt="instagram" className="w-4 h-4" />
              </a>
              <a href="#">
                <img src="/images/img_linkedin_original.svg" alt="linkedin" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white border-b border-[var(--border-light)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
          <div className="flex justify-between items-center py-[20px]">
            {/* Logo */}
            <div className="flex items-center gap-[10px]">
              <Link to="/">
                <img src="/images/img_amman_constructions.png" alt="logo" className="w-7 h-7" />
              </Link>
              <span className="text-[#374151] text-base font-bold leading-5 hidden sm:block">
                Amman Construction and Engineering PTE Ltd
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[20px]">
              <nav className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-[32px]">
                  <Link to="/" className="text-[#374151] text-sm font-bold leading-[17px] hover:text-[var(--brand-dark-green)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)] rounded transition-colors link-underline">
                    Home
                  </Link>
                  <Link to="/about" className="text-[#374151] text-sm font-medium leading-[17px] hover:text-[var(--brand-dark-green)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)] rounded transition-colors link-underline">
                    About us
                  </Link>
                  <Link to="/services" className="text-[#374151] text-sm font-medium leading-[17px] hover:text-[var(--brand-dark-green)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)] rounded transition-colors link-underline">
                    Services & Projects
                  </Link>
                  <Link to="/contact" className="text-[#374151] text-sm font-medium leading-[17px] hover:text-[var(--brand-dark-green)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)] rounded transition-colors link-underline">
                    Contact us
                  </Link>
                  
                </div>
                <div className="ml-1">
                  <img src="/images/img_line_1.svg" alt="underline" className="w-[30px] h-[1px]" />
                </div>
              </nav>
              
              <button className="p-2 hover:bg-gray-100 rounded transition-colors hover-lift" aria-label="Search">
                <img src="/images/img_search.svg" alt="search" className="w-6 h-6" />
              </button>
              
              <Button
                text="Get a Quote"
                text_font_size="14"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="17px"
                text_text_align="center"
                text_color="#f9fafb"
                fill_background_color="#019248"
                border_border_radius="4px"
                padding="8px 16px"
                border_border=""
                layout_width="auto"
                position="relative"
                variant="primary"
                size="medium"
                className=""
                onClick={() => { window.location.href = '/blog'; }}
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="block lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-[#374151] transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-[#374151] mt-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-[#374151] mt-1 transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-200`}>
            <nav className="flex flex-col gap-4 pt-4">
              <Link to="/" className="text-[#374151] text-sm font-bold leading-[17px] text-left hover:text-[#019248] transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-[#374151] text-sm font-medium leading-[17px] text-left hover:text-[#019248] transition-colors">
                About us
              </Link>
              <Link to="/services" className="text-[#374151] text-sm font-medium leading-[17px] text-left hover:text-[#019248] transition-colors">
                Services & Projects
              </Link>
              <Link to="/contact" className="text-[#374151] text-sm font-medium leading-[17px] text-left hover:text-[#019248] transition-colors">
                Contact us
              </Link>
              
              <div className="flex items-center gap-4 pt-2">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors hover-lift" aria-label="Search">
                  <img src="/images/img_search.svg" alt="search" className="w-6 h-6" />
                </button>
                <Button
                  text="Get a Quote"
                  text_font_size="14"
                  text_font_family="Inter"
                  text_font_weight="500"
                  text_line_height="17px"
                  text_text_align="center"
                  text_color="#f9fafb"
                  fill_background_color="#019248"
                  border_border_radius="4px"
                  padding="8px 16px"
                  border_border=""
                  layout_width="auto"
                  position="relative"
                  variant="primary"
                  size="medium"
                  className=""
                  onClick={() => { window.location.href = '/blog'; }}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;