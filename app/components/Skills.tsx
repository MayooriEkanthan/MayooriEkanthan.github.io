"use client";

import React, { useRef } from 'react';
import { FaCrown, FaPuzzlePiece, FaBolt, FaComments, FaHandshake } from 'react-icons/fa';

const technicalCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" }
    ]
  },
  {
    title: "Backend and API",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "Flask", icon: "devicon-flask-original colored" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "REST APIs & Integration", icon: "devicon-bash-plain" }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "React Native", icon: "devicon-react-original colored" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
    ]
  },
  {
    title: "AI and ML",
    skills: [
      { name: "NumPy", icon: "devicon-numpy-original colored" },
      { name: "Pandas", icon: "devicon-pandas-original colored" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
      { name: "Hugging Face", icon: "devicon-hugo-plain colored" }
    ]
  },
  {
    title: "Cloud and DevOps",
    skills: [
      { name: "Microsoft Azure", icon: "devicon-azure-plain colored" },
      { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" }
    ]
  },
  {
    title: "UI UX / Design",
    skills: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Adobe Photoshop", icon: "devicon-photoshop-plain colored" },
      { name: "Adobe Illustrator", icon: "devicon-illustrator-plain colored" },
      { name: "Canva", icon: "devicon-canva-original colored" }
    ]
  },
  {
    title: "Practices and Tools",
    skills: [
      { name: "Agile/Scrum", icon: "devicon-jira-plain colored" },
      { name: "SDLC", icon: "devicon-github-original" },
      { name: "UML", icon: "devicon-unifiedmodelinglanguage-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" }
    ]
  }
];

const softSkills = [
  {
    title: "Problem Solving",
    description: "Analyze challenges, think critically, and develop creative solutions.",
    icon: <FaPuzzlePiece className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Critical Thinking",
    description: "Evaluate situations logically and make reasoned judgments.",
    icon: <FaBolt className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve existing skills.",
    icon: <FaCrown className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Team Collaboration",
    description: "Work productively with peers, share knowledge, and contribute to group success.",
    icon: <FaHandshake className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Time Management",
    description: "Organize and prioritize tasks effectively to meet deadlines.",
    icon: <FaComments className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Adaptability",
    description: "Easily adjust to new tools, environments, and technologies.",
    icon: <FaBolt className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  }
];

export default function Skills(): React.JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 324, behavior: 'smooth' }); // 300px (card) + 24px (gap)
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Technical Skills */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {technicalCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold text-purple-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-white/10 text-white/90 text-sm py-1.5 px-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/5 select-none">
                    {skill.img ? (
                      <img src={skill.img} alt={skill.name} className="w-[18px] h-[18px]" />
                    ) : (
                      <i className={`${skill.icon} text-lg`}></i>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Soft Skills
          </h2>
          <p className="text-white/70 max-w-4xl mx-auto text-lg mb-6">
            Along with my technical expertise, I bring strong interpersonal and professional skills.
          </p>
          <div className="flex items-center justify-center gap-2 text-purple-400 text-sm animate-pulse">
            <span>Swipe to see more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar pr-12 scroll-smooth">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="shrink-0 w-[300px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-200 backdrop-blur-sm relative z-10"
              >
                <div className="text-4xl mb-6">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Arrow Indicator */}
          <div 
            onClick={scrollRight}
            className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#110720] via-[#110720]/80 to-transparent z-20 flex items-center justify-end pb-8 cursor-pointer group"
          >
            <div className="bg-purple-900/50 p-2 rounded-full mr-2 group-hover:bg-purple-600 transition-colors">
              <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
