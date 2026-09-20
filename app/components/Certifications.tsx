import React from 'react';

const certifications = [
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/9DF8DBE25F1B" },
  { name: "JavaScript (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/09F3D1D9D013" },
  { name: "Python (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/83F700C1831A" },
  { name: "Java (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/2b3b0fc2e9bb" },
  { name: "Azure Course", issuer: "Great Learning Academy", url: "https://www.mygreatlearning.com/certificate/SCFHGJJO?referrer_code=GLGF0CEW" },
  { name: "Project Management 101", issuer: "Simplilearn", url: "https://simpli-web.app.link/e/4AOarJt5W5b" },
  { name: "IT for Business Success", issuer: "HP LIFE", url: "https://www.life-global.org/certificate/13e92118-7623-4270-a047-c36b86be7a6e" },
  { name: "Machine Learning for Beginners", issuer: "Simplilearn", url: "https://simpli-web.app.link/e/6Er9UrytV5b" },
  { name: "Introduction to Artificial Intelligence", issuer: "Simplilearn", url: "https://simpli-web.app.link/e/4AOarJt5W5b" },
  { name: "Intro to Critical Infrastructure Protection (ICIP)", issuer: "OPSWAT Academy", url: "https://learn.opswatacademy.com/certificate/XETx_vvp6Q" },
  { name: "Beginner's Guide to GitHub", issuer: "Alison", url: "https://alison.com/verify/1d4dd4cea5" }
];

export default function Certifications(): React.JSX.Element {
  return (
    <section id="certifications" className="py-20 px-6 bg-slate-950/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert, idx) => (
            <a key={idx} href={cert.url} target="_blank" rel="noopener noreferrer" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-start gap-4">
              <div className="text-purple-400 mt-1 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                <p className="text-white/50 text-xs flex items-center gap-1">
                  {cert.issuer}
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
