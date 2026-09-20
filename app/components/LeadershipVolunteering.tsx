import React from 'react';
import { FaHandshake, FaPalette, FaBolt, FaUsers, FaLaptopCode, FaStar } from 'react-icons/fa';

const volunteeringRoles = [
  {
    title: "Selected Volunteer",
    organization: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    description: [
      "Selected volunteer supporting faculty activities and initiatives."
    ],
    icon: <FaHandshake className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Active Graphic Design Volunteer",
    organization: "Multiple Organizations",
    description: [
      "IEEE Student Branch of Sabaragamuwa University of Sri Lanka",
      "WIE (Women in Engineering) Affinity group of Sabaragamuwa University of Sri Lanka",
      "IEEE Computer Society Chapter of Sabaragamuwa University of Sri Lanka",
      "Rotaract Club of Sabaragamuwa University of Sri Lanka",
      "Leo Club of Sabaragamuwa University of Sri Lanka"
    ],
    icon: <FaBolt className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Head Designer",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    description: [
      "Vision Vibe Monthly Magazine Series 2026-2027"
    ],
    icon: <FaPalette className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  }
];

export default function LeadershipVolunteering(): React.JSX.Element {
  return (
    <section id="leadership" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Leadership & Volunteering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteeringRoles.map((role, idx) => (
            <div key={idx} className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-8 border-t-3 border-purple-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">
                {role.icon}
              </div>
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{role.organization}</h3>
              <p className="text-purple-400 font-medium text-sm mb-4">
                {role.title}
              </p>
              <ul className="list-disc list-inside text-white/70 text-sm mb-6 flex-grow space-y-1">
                {role.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
