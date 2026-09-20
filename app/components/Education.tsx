import React from "react";
import { FaGraduationCap, FaScroll, FaSchool } from "react-icons/fa";

interface EducationCard {
  id: number;
  title: string;
  institution: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const educationCards: EducationCard[] = [
  {
    id: 2,
    title: "BSc (Hons) in Information Systems",
    institution: "Sabaragamuwa University of \nSri Lanka",
    date: "07/2024 - Present",
    description: "Current GPA: 3.30/4.00",
    icon: <FaGraduationCap className="w-24 h-24 text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
  },
  {
    id: 1,
    title: "Diploma in Software Engineering",
    institution: "Sabaragamuwa University of \nSri Lanka",
    date: "09/2026 - Present",
    description: "",
    icon: <FaScroll className="w-24 h-24 text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
  },
  {
    id: 3,
    title: "G.C.E. Advanced Level",
    institution: "J/Methodist Girls' High School",
    date: "2020 - 2022",
    description: "",
    icon: <FaSchool className="w-24 h-24 text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
  },
];

export default function Education(): React.JSX.Element {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-slate-900 to-purple-950/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all flex flex-col h-full"
            >
              <div className="mb-6 flex justify-center items-center h-[120px]">
                {card.icon}
              </div>
              <div className="text-center flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-purple-400 font-medium mb-2 whitespace-pre-line">
                  {card.institution}
                </p>
                <p className="text-white/50 text-sm mb-4">
                  {card.date}
                </p>
                {card.description && (
                  <p className="text-white/80 text-sm">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
