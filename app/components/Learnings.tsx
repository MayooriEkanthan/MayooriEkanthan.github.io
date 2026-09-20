import React from 'react';
import { FaLaptopCode, FaPlug, FaProjectDiagram, FaRobot, FaDatabase, FaCloud, FaShieldAlt, FaCodeBranch } from 'react-icons/fa';

const learnings = [
  {
    title: "Full-Stack Web Development",
    description: "Building robust, scalable web applications with modern frontend frameworks and powerful backend architectures.",
    icon: <FaLaptopCode className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "API Design & Integration",
    description: "Creating efficient RESTful APIs and seamlessly integrating third-party services and intelligent AI endpoints.",
    icon: <FaPlug className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Software Architecture",
    description: "Applying clean code principles, microservices, and design patterns to build maintainable, enterprise-grade software.",
    icon: <FaProjectDiagram className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "AI-Powered Applications",
    description: "Enhancing traditional software by integrating Large Language Models (LLMs) and machine learning capabilities.",
    icon: <FaRobot className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Database Management",
    description: "Structuring relational and NoSQL databases for high performance, data integrity, and efficient querying.",
    icon: <FaDatabase className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Deploying applications to cloud platforms, utilizing CI/CD pipelines, and managing containerized environments.",
    icon: <FaCloud className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "System Security",
    description: "Implementing authentication, authorization, and secure coding practices to protect user data and applications.",
    icon: <FaShieldAlt className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  },
  {
    title: "Agile & Version Control",
    description: "Collaborating efficiently using Git workflows, continuous integration, and agile project management practices.",
    icon: <FaCodeBranch className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
  }
];

// Blog section uses a direct medium link now.

export default function Learnings(): React.JSX.Element {
  return (
    <section id="learnings" className="py-20 px-6 bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        
        {/* Learnings Section */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Learnings</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Newly Interested & Eager to Learn:<br/> Exploring and Building Knowledge in Key Tech Areas
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            I&apos;m diving into new technologies with curiosity and dedication, building hands-on experience while expanding my knowledge in key areas of tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {learnings.map((learning, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4 bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center border border-purple-500/20">{learning.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{learning.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {learning.description}
              </p>
            </div>
          ))}
        </div>

        {/* Blog Section */}
        <div className="text-center mb-16" id="blog">
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Blog</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My Blog
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Currently planning to start blogging about tech, design, and personal growth.
          </p>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://medium.com/@MayooriEkanthan"
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full max-w-md bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] block"
          >
            <div className="text-3xl mb-6 bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center border border-purple-500/30 text-white group-hover:text-purple-400 transition-colors mx-auto">
              <svg className="w-8 h-8" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">Read my articles on Medium</h3>
            <p className="text-white/60 text-center text-sm leading-relaxed mb-6">
              Dive into my thoughts, technical learnings, and experiences in software engineering and design.
            </p>
            <div className="flex justify-center text-purple-400 font-medium items-center gap-2">
              Visit Profile 
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
