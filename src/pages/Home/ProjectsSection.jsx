import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Proposed sprinkler system and fire alarm system addition works at National Skin Center",
      contractor: "Deluge Fire Protection (S.E.A) Pte Ltd"
    },
    {
      title: "Installation of Sprinkler System includes Proaction System, Wet Riser System, Hydrant System and Fire alarm system",
      contractor: "Chubb Singapore Pte Ltd"
    },
    {
      title: "Proposed Renovation Work includes electrical works, plumbing, and Interior Design",
      contractor: "Stylise On"
    },
    {
      title: "Proposed Footpath Connecting Parc Rivera to new park Connector Network Near Ayer Rajah Expressway",
      contractor: "TKB C-E Contractor Pte Ltd"
    },
    {
      title: "Proposed renovation work in HDB BLK 664D includes Interior Design Work, Flooring works, Electrical and Plumbing Works",
      contractor: "HDB BLK 664D"
    }
  ];

  const years = [2023, 2024, 2025];
  const types = ['Renovation', 'Electrical', 'Fire Protection', 'Civil'];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[30px]">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-[#019248] text-[20px] font-bold leading-[25px]">
            Major Projects Track Record
          </h2>
        </div>

        {/* Simple Filters (UI only for now) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <select className="border border-[#d1d5db] rounded px-3 py-2 text-sm" aria-label="Filter by year">
            <option value="">All Years</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select className="border border-[#d1d5db] rounded px-3 py-2 text-sm" aria-label="Filter by type">
            <option value="">All Types</option>
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Projects Table */}
        <div className="w-full lg:w-[60%] mx-auto bg-[#f9fafb] rounded-[6px] overflow-hidden">
          {/* Table Header */}
          <div className="flex justify-between items-center px-[20px] py-[14px] border-b border-[#d1d5db]">
            <h3 className="text-[#374151] text-[16px] font-bold leading-[20px]">
              Project Title
            </h3>
            <h3 className="text-[#374151] text-[16px] font-bold leading-[20px]">
              Main Contractor
            </h3>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {projects?.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row justify-between items-start border-b border-[#e5e7eb] last:border-b-0">
                <div className="w-full lg:w-[34%] px-[8px] py-[16px] lg:py-[22px]">
                  <p className="text-[#374151] text-[14px] font-normal leading-[20px] text-left">
                    {project?.title}
                  </p>
                </div>
                <div className="w-full lg:w-[50%] px-[8px] py-[16px] lg:py-[30px] border-l-0 lg:border-l border-[#d1d5db]">
                  <p className="text-[#374151] text-[14px] font-normal leading-[17px] text-left">
                    {project?.contractor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;