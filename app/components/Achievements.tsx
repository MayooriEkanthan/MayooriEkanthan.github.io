"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTrophy, FaMedal, FaRocket, FaCode, FaPaintBrush, FaPenNib, FaTimes } from 'react-icons/fa';

const academicAchievements = [
  {
    title: "Top 10 Team, Pitch Perfect 2025, SLIIT",
    description: "Zellynx.",
    year: "2025",
    icon: <FaMedal className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
    images: [
      "/achievements/pitch-perfect-group.jpg",
      "/achievements/pitch-perfect-award.png",
      "/achievements/pitch-perfect-cert.jpg",
      "/achievements/pitch-perfect-presentation.png"
    ],
    bannerStyle: "object-contain object-center p-2"
  },
  {
    title: "First-Round Selection",
    description: "IDEALIZE Mora 2025 and DiaSaver Project.",
    year: "2025",
    icon: <FaRocket className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
    images: [
      "/achievements/idealize-diasaver.jpg",
      "/achievements/idealize-shortlist.jpg"
    ]
  },
  {
    title: "Intermediate Tier, CodeRally 6.0",
    description: "Competitive Programming.",
    year: "2024",
    icon: <FaCode className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
    images: [
      "/achievements/coderally-cert.jpg"
    ]
  }
];

const extracurricularAchievements = [
  {
    title: "Top 10 Best Performing Leo Award",
    description: "Graphic Design volunteering.",
    year: "2026",
    icon: <FaTrophy className="text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />,
    images: [
      "/achievements/top-10-leo-2.jpg",
      "/achievements/top-10-leo-1.jpg",
      "/achievements/top-10-leo-3.jpg",
      "/achievements/top-10-leo-4.jpg",
      "/achievements/top-10-leo-5.jpg"
    ],
    bannerStyle: "object-cover object-top"
  }
];

export default function Achievements(): React.JSX.Element {
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  const renderCard = (achievement: any, idx: number) => (
    <div 
      key={idx} 
      className={`bg-white/5 border border-white/10 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full relative overflow-hidden group ${achievement.images.length > 0 ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (achievement.images && achievement.images.length > 0) {
          setSelectedAchievement(achievement);
        }
      }}
    >
      {achievement.images && achievement.images.length > 0 ? (
        <div className="w-full h-48 relative overflow-hidden bg-black/40">
          <Image 
            src={achievement.images[0]} 
            alt={achievement.title}
            fill
            className={`${achievement.bannerStyle || 'object-cover object-center'} group-hover:scale-105 transition-transform duration-500`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
          {achievement.images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-semibold text-white">
              +{achievement.images.length - 1} photo
            </div>
          )}
        </div>
      ) : (
        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">
          {achievement.icon}
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {(!achievement.images || achievement.images.length === 0) && (
          <div className="text-4xl mb-4">{achievement.icon}</div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
        <p className="text-white/60 text-sm mb-4 flex-grow">
          {achievement.description}
        </p>
        <div className="inline-block bg-purple-900/40 text-purple-300 py-1 px-3 rounded-full text-xs font-semibold self-start mt-auto border border-purple-500/20">
          {achievement.year}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
            Achievements
          </h2>
          
          {/* Academic Achievements */}
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <h3 className="text-2xl font-bold text-purple-300 border-b-2 border-purple-600/50 pb-2 px-4">
                Academic Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicAchievements.map(renderCard)}
            </div>
          </div>

          {/* Extracurricular Achievements */}
          <div>
            <div className="flex justify-center mb-8">
              <h3 className="text-2xl font-bold text-purple-300 border-b-2 border-purple-600/50 pb-2 px-4">
                Extracurricular Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extracurricularAchievements.map(renderCard)}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl shadow-purple-900/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/40 p-2 rounded-full"
              onClick={() => setSelectedAchievement(null)}
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-12">
              {selectedAchievement.title}
            </h3>
            <p className="text-purple-300 mb-8">{selectedAchievement.description}</p>
            
            <div className={`grid grid-cols-1 ${selectedAchievement.images.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
              {selectedAchievement.images.map((img: string, idx: number) => (
                <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50">
                  <Image 
                    src={img}
                    alt={`${selectedAchievement.title} photo ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
