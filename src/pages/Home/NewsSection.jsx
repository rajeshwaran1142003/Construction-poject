import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[30px]">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-[#019248] text-[20px] font-bold leading-[25px]">
            News & Blogs
          </h2>
        </div>

        {/* News Article */}
        <div className="w-full lg:w-[78%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[50px] items-start p-[20px] border border-[#e5e7eb] rounded-[12px]">
            {/* Article Image */}
            <div className="w-full lg:w-[20%] flex-shrink-0">
              <img 
                src="/images/img_image.png" 
                alt="Green Construction"
                className="w-full h-auto rounded-[8px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="w-full lg:flex-1 flex flex-col gap-[14px]">
              <h3 className="text-[#374151] text-[14px] font-bold leading-[17px]">
                Green Construction: Building a Sustainable Tomorrow
              </h3>
              
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#374151] text-[14px] font-normal leading-[24px]">
                  In today's world, construction is no longer just about speed and scale — it's about responsibility. At Amman Construction and Engineering Pte Ltd, we believe the future of our industry lies in green construction practices that protect the environment while delivering long-lasting value to clients...
                </p>
                
                <Link 
                  to="/blog" 
                  className="text-[#1e40af] text-[14px] font-medium leading-[17px] text-left hover:underline transition-all inline-block"
                >
                  Click here to Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;