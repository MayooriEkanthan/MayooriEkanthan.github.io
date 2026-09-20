import React from 'react';
import { FaCrown, FaPuzzlePiece, FaBolt, FaComments, FaHandshake } from 'react-icons/fa';

const softSkills = [
  {
    title: "Leadership",
    description: "Take initiative, guide others, and help drive projects forward with responsibility.",
    icon: <FaCrown className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Problem-Solving",
    description: "Analyze challenges, think critically, and develop creative solutions.",
    icon: <FaPuzzlePiece className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Adaptability & Quick Learning",
    description: "Easily adjust to new tools, environments, and technologies while learning fast.",
    icon: <FaBolt className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Communication Skills",
    description: "Effectively convey ideas, both written and verbal, to diverse audiences.",
    icon: <FaComments className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Teamwork & Collaboration",
    description: "Work productively with peers, share knowledge, and contribute to group success.",
    icon: <FaHandshake className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  }
];

export default function SoftSkills(): React.JSX.Element {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Other Skills</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Apart from technical skills, I&apos;m also developing<br className="hidden lg:block"/> essential personal and professional skills that<br className="hidden lg:block"/> enhance my overall growth.
          </h2>
          <p className="text-white/70 max-w-4xl mx-auto text-lg">
            Along with my technical expertise, I bring strong interpersonal and professional skills. I communicate effectively, collaborate well in teams, take initiative with leadership qualities, solve problems creatively, and quickly adapt to new challenges and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {softSkills.map((skill, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="text-4xl mb-6">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
