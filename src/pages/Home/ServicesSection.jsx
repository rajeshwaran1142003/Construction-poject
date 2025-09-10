import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/images/img_frame_215.svg",
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems installation and maintenance for commercial and industrial facilities."
    },
    {
      id: 2,
      icon: "/images/img_frame_214.svg",
      title: "Electrical Works",
      description: "Full-service electrical installation, maintenance, and troubleshooting for all project types."
    },
    {
      id: 3,
      icon: "/images/img_frame_213.svg",
      title: "Structural Engineering",
      description: "Expert structural design and implementation ensuring safety and compliance with building codes."
    }
  ];

  return (
    <section 
      id="services"
      className="w-full relative"
      style={{
        backgroundImage: "url('/images/img_rectangle_3389.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000b2]"></div>
      {/* Content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[21px] sm:px-[42px] py-[42px]">
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[76%] mx-auto">
          {/* Section Title */}
          <h2 className="text-[#f9fafb] text-[20px] font-bold leading-[25px] text-center">
            Our Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
            {services?.map((service) => (
              <a key={service?.id} href="/services" className="group flex flex-col items-center gap-[14px] w-full lg:w-[216px] transform transition-all hover:-translate-y-1">
                {/* Service Icon */}
                <div className="bg-[var(--brand-accent-yellow)] p-[10px] rounded-[30px] shadow-md group-hover:shadow-lg transition-shadow">
                  <img 
                    src={service?.icon} 
                    alt={service?.title}
                    className="w-[60px] h-[60px]"
                  />
                </div>

                {/* Service Content */}
                <div className="flex flex-col items-center gap-[8px] lg:gap-[10px] w-full">
                  <h3 className="text-[#f9fafb] text-[14px] font-bold leading-[17px] text-center group-hover:text-[var(--brand-accent-yellow)] transition-colors">
                    {service?.title}
                  </h3>
                  <p className="text-[#f9fafb] text-[12px] font-normal leading-[16px] text-center w-full">
                    {service?.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Explore All Button */}
          <div className="w-full flex justify-center mt-[32px]">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--brand-accent-yellow)] text-[#111827] font-semibold shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)]"
              aria-label="Explore all services and projects"
            >
              Explore All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;