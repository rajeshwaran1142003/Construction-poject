import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="w-full relative bg-fixed"
      style={{
        backgroundImage: "url('/images/img_rectangle_3381.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000099]"></div>
      
      {/* Content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[28px] sm:px-[56px] py-[66px] sm:py-[132px]">
        <div className="flex flex-col items-center justify-center gap-[19px] sm:gap-[38px] w-full max-w-[40%] mx-auto animate-fade-in">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] w-full">
            <h1 className="text-[#f9fafb] text-[15px] sm:text-[24px] md:text-[30px] font-bold leading-[18px] sm:leading-[29px] md:leading-[37px] text-center">
              Building Trust. Delivering Excellence.
            </h1>
            <p className="text-[#f9fafb] text-[10px] sm:text-[16px] md:text-[20px] font-semibold leading-[16px] sm:leading-[26px] md:leading-[32px] text-center w-full">
              Shaping communities with innovation, safety, and sustainable construction.
            </p>
          </div>
          
          {/* Description */}
          <p className="text-[#f9fafb] text-[8px] sm:text-[12px] md:text-[16px] font-medium leading-[12px] sm:leading-[18px] md:leading-[24px] text-center w-full">
            With decades of expertise in mechanical, electrical, and civil works, Amman Construction and Engineering Pte Ltd delivers projects that stand strong on precision, integrity, and innovation. From fire protection to complex renovations, we build with a vision for tomorrow.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[20px] mb-[26px] sm:mb-[52px]">
            <Button
              text="View Projects"
              text_font_size="16"
              text_font_family="Inter"
              text_font_weight="500"
              text_line_height="20px"
              text_text_align="center"
              text_color="#111827"
              fill_background_color="#F7C30E"
              border_border=""
              border_border_radius="4px"
              layout_width="auto"
              position="relative"
              variant="primary"
              size="medium"
              className=""
              onClick={() => { window.location.href = '/services'; }}
              padding="8px 16px"
            />
            <Button
              text="Contact us"
              text_font_size="16"
              text_font_family="Inter"
              text_font_weight="500"
              text_line_height="20px"
              text_text_align="center"
              text_color="#f9fafb"
              fill_background_color="transparent"
              border_border="1px solid #ffffff"
              border_border_radius="4px"
              layout_width="auto"
              position="relative"
              variant="secondary"
              size="medium"
              className=""
              onClick={() => { window.location.href = '/contact'; }}
              padding="8px 16px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;