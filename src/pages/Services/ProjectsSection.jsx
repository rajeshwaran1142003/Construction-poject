import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      project: "Proposed sprinkler system and fire alarm system addition works at National Skin Center",
      contractor: "Deluge Fire Protection (S.E.A) Pte Ltd"
    },
    {
      project: "Installation of Sprinkler System includes Proaction System, Wet Riser System, Hydrant System and Fire alarm system",
      contractor: "Chubb Singapore Pte Ltd"
    },
    {
      project: "Proposed Renovation Work includes electrical works, plumbing, and Interior Design",
      contractor: "Stylise On"
    },
    {
      project: "Proposed Footpath Connecting Parc Rivera to new park Connector Network Near Ayer Rajah Expressway",
      contractor: "TKB C-E Contractor Pte Ltd"
    },
    {
      project: "Proposed renovation work in HDB BLK 664D includes Interior Design Work, Flooring works, Electrical and Plumbing Works",
      contractor: "HDB BLK 664D"
    }
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="text-center mb-12">
          <h2 className="text-[#019248] text-3xl font-bold mb-4">
            Major Projects Track Record
          </h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#019248] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Project Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Main Contractor
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                    <td className="px-6 py-4 text-sm text-[#374151] leading-relaxed">
                      {project.project}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151] font-medium">
                      {project.contractor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
