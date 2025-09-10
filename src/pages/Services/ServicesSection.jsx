import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "⚙️",
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems installation and maintenance for commercial and industrial facilities."
    },
    {
      icon: "⚡",
      title: "Electrical Works",
      description: "Full-service electrical installation, maintenance, and troubleshooting for all project types."
    },
    {
      icon: "🏗️",
      title: "Structural Engineering",
      description: "Expert structural design and implementation ensuring safety and compliance with building codes."
    },
    {
      icon: "🔧",
      title: "Plumbing",
      description: "Reliable plumbing solutions including installation and maintenance of water supply, drainage, and sanitary systems for residential, commercial, and industrial projects."
    },
    {
      icon: "🚿",
      title: "Sprinkler Piping",
      description: "Professional design and installation of sprinkler piping systems including wet riser, hydrant, and pro-action systems to ensure effective fire protection."
    },
    {
      icon: "🚨",
      title: "Fire Alarm Systems",
      description: "Advanced fire alarm system installation and maintenance, providing early detection and seamless integration to safeguard people and property."
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f9fafb] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#fb0100] rounded-full flex items-center justify-center text-white text-xl">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#019248] text-lg font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
