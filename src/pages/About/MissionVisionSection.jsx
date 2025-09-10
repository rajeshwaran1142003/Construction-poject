import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/images/img2.png" 
              alt="Fire protection system" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Our Mission */}
            <div>
              <h2 className="text-[#019248] text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-[#374151] text-base leading-relaxed">
                To be a leading construction firm that delivers excellent value and innovative solutions to our clients. 
                We are committed to providing high-level service, improving team competence, and building a safety culture 
                to achieve zero accidents in all our projects.
              </p>
            </div>
            
            {/* Our Vision */}
            <div>
              <h2 className="text-[#019248] text-2xl font-bold mb-6">
                Our Vision
              </h2>
              
              <div className="space-y-6">
                {/* Excellence */}
                <div>
                  <h3 className="text-[#019248] text-lg font-semibold mb-2">
                    Excellence
                  </h3>
                  <p className="text-[#374151] text-base leading-relaxed">
                    We strive for excellence in every project we undertake, ensuring quality workmanship and attention to detail.
                  </p>
                </div>
                
                {/* Innovation */}
                <div>
                  <h3 className="text-[#019248] text-lg font-semibold mb-2">
                    Innovation
                  </h3>
                  <p className="text-[#374151] text-base leading-relaxed">
                    We embrace innovative construction solutions to meet the evolving needs of our clients and the industry.
                  </p>
                </div>
                
                {/* Safety */}
                <div>
                  <h3 className="text-[#019248] text-lg font-semibold mb-2">
                    Safety
                  </h3>
                  <p className="text-[#374151] text-base leading-relaxed">
                    We are committed to maintaining the highest safety standards, working towards our goal of zero accidents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

