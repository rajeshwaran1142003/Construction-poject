import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#019248]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px] py-[36px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[78%] gap-8 lg:gap-0">
            {/* Company Info */}
            <div className="flex flex-col gap-[10px] w-full lg:w-[24%]">
              <div className="flex items-center gap-5 mb-2">
                <img src="/images/img_group_221.png" alt="logo" className="w-12 h-12" />
                <h3 className="text-[#f9fafb] text-base font-bold leading-6">
                  Amman Construction and<br />Engineering PTE Ltd
                </h3>
              </div>
              <p className="text-[#f9fafb] text-sm font-normal leading-5 mb-4">
                Delivering high-quality construction<br />solutions across Singapore
              </p>
              <div className="flex items-center gap-[10px]">
                <a href="tel:+6581195016" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4" />
                </a>
                <a href="#location" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4" />
                </a>
                <a href="mailto:sales.ammanconstruction@gmail.com" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_mail.svg" alt="email" className="w-4 h-4" />
                </a>
                <a href="#facebook" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_facebook.svg" alt="facebook" className="w-4 h-4" />
                </a>
                <a href="#instagram" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_instagram.svg" alt="instagram" className="w-4 h-4" />
                </a>
                <a href="#linkedin" className="hover:opacity-80 transition-opacity">
                  <img src="/images/img_linkedin_original.svg" alt="linkedin" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer Links and Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[66%] gap-8 sm:gap-4">
              {/* Explore Links */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <h4 className="text-[#f9fafb] text-base font-medium leading-5">Explore</h4>
                <ul className="flex flex-col gap-[10px]">
                  <li>
                    <a href="/" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Our Team */}
              <div className="flex flex-col gap-[14px] w-full sm:w-auto">
                <h4 className="text-[#ffffff] text-base font-medium leading-5">Our Team</h4>
                <div className="flex flex-col gap-[10px]">
                  {/* Mr. Sankar */}
                  <div className="flex flex-col gap-1">
                    <h5 className="text-[#f9fafb] text-sm font-semibold leading-[17px]">Mr. Sankar</h5>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <img src="/images/img_mail.svg" alt="email" className="w-4 h-4" />
                        <a href="mailto:sankar0306@gmail.com" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                          sankar0306@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4" />
                        <a href="tel:+6598415366" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                          +65 98415366
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mr. Raja */}
                  <div className="flex flex-col gap-1">
                    <h5 className="text-[#f9fafb] text-sm font-semibold leading-[17px]">Mr. Raja</h5>
                    <div className="flex items-center gap-1">
                      <img src="/images/img_mail.svg" alt="email" className="w-4 h-4" />
                      <a href="mailto:bharathicdm@gmail.com" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                        bharathicdm@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4" />
                      <a href="tel:+6581195016" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                        +65 81195016
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-[14px] w-full sm:w-[36%]">
                <h4 className="text-[#f9fafb] text-base font-medium leading-5">Contact</h4>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-start gap-1">
                    <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4 mt-1" />
                    <address className="text-[#f9fafb] text-sm font-normal leading-5 not-italic">
                      1 Soon Lee Street,<br />
                      #02-29 Pioneer Centre,<br />
                      Singapore 627605
                    </address>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/images/img_mail.svg" alt="email" className="w-4 h-4" />
                    <a href="mailto:sales.ammanconstruction@gmail.com" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      sales.ammanconstruction@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4" />
                    <a href="tel:+6581195016" className="text-[#f9fafb] text-sm font-normal leading-[17px] hover:text-white transition-colors">
                      +65 81195016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <img 
              src="/images/img_footer_logo.png" 
              alt="footer logo" 
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[202px] lg:h-[202px] rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;