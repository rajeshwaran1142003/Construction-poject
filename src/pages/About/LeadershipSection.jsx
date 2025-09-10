import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Our Leadership Team
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mr. Sundaram Muthu */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-[#019248] text-xl font-bold mb-2">
              Mr. Sundaram Muthu
            </h3>
            <p className="text-[#fb0100] text-lg font-semibold mb-4">
              Director
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              Over 25 years of experience in the mechanical industry with vast knowledge and ability to manage teams, 
              drive strategic initiatives, and deliver projects on time and within budget.
            </p>
          </div>
          
          {/* Mr. Chinnathambi Muniyandi */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-[#019248] text-xl font-bold mb-2">
              Mr. Chinnathambi Muniyandi
            </h3>
            <p className="text-[#fb0100] text-lg font-semibold mb-4">
              Director
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              More than 22 years of experience in the electrical industry with numerous successful projects completed 
              throughout his career, helping to improve our productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

