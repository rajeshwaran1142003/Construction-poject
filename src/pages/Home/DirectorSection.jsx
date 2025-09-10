import React from 'react';

const DirectorSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[32px]">
        {/* Section Title */}
        <div className="text-center mb-[32px]">
          <h2 className="text-[#019248] text-[20px] font-bold leading-[25px]">
            Director note
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[100px]">
          {/* Director Image */}
          <div className="w-full lg:w-[22%] flex-shrink-0">
            <img 
              src="/images/img_rectangle_3383.png" 
              alt="Director"
              className="w-full h-auto rounded-[24px] object-cover"
            />
          </div>

          {/* Director Message */}
          <div className="w-full lg:w-[52%]">
            <p className="text-[#374151] text-[14px] font-normal leading-[24px] text-left">
              I find immense pleasure in inviting you to the Amman Construction family, a thriving company that once started as a mere vision – a dream that turned into a reality after years of hard work.
              <br /><br />
              We comprehend that it is only our quality of services that have, over the years, delighted our customers. And that this is why our clients consider Amman Construction their ideal business solutions . We maintain a highly dependable and reliable workforce because we know that there is no substitute for quality Works.
              <br /><br />
              Our organization's work culture is built upon commitment to dedication. Our diverse & talented teams are our greatest asset. We hold steadfast to our beliefs, values and code of ethics, and these are highly nurtured inside the company. Our teams of experts share common focuses, i.e., to serve our customers with quality services; to work with utmost efficiency so as not to miss out the client's deadline; and to build solutions while maintaining affordability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;