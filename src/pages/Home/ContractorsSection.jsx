import React from 'react';

const ContractorsSection = () => {
  const contractors = [
    {
      id: 1,
      image: "/images/img_image_14.png",
      description: "Specialized in fire protection systems and safety solutions for commercial and industrial properties."
    },
    {
      id: 2,
      image: "/images/img_image_13.png",
      description: "Leading provider of security and fire-safety solutions with a global reputation for excellence."
    },
    {
      id: 3,
      image: "/images/img_image_15.png",
      description: "Specialized in civil engineering works including infrastructure development and public facilities."
    },
    {
      id: 4,
      title: "Stylise On",
      description: "Expert in interior design and renovation works for residential and commercial spaces."
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[30px]">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-[#019248] text-[20px] font-bold leading-[25px]">
            Our Most Reputed Main Contractor's
          </h2>
        </div>

        {/* Contractors Grid */}
        <div className="flex flex-col lg:flex-row gap-[75px] lg:gap-[150px] justify-center items-start">
          {contractors?.map((contractor, index) => (
            <div key={contractor?.id} className={`flex flex-col items-center gap-[4px] w-full lg:w-[214px] ${index === 3 ? 'mt-0 lg:mt-[38px]' : ''}`}>
              {contractor?.image ? (
                <div className="bg-[#f9fafb] p-[6px] rounded-sm mb-[16px]">
                  <img 
                    src={contractor?.image} 
                    alt={`contractor ${contractor?.id}`}
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
              ) : (
                <div className="mb-[20px]">
                  <h3 className="text-[#374151] text-[14px] font-bold leading-[17px] text-center mb-[4px]">
                    {contractor?.title}
                  </h3>
                </div>
              )}
              <p className="text-[#374151] text-[12px] font-medium leading-[16px] text-center w-full">
                {contractor?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorsSection;