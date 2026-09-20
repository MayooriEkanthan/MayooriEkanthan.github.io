import React from "react";
import { FaDesktop } from "react-icons/fa";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-8 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="shrink-0 flex items-center justify-center w-[160px] h-[160px]">
              <FaDesktop className="w-32 h-32 text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                System Maintenance & Data Entry Assistant
              </h3>
              <p className="text-purple-400 font-medium mb-4">
                Private Ceypetco Lanka Filling Station • Part-Time (2024 - 2025)
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Maintained daily login/logout records, inventory information, and sales records.</li>
                <li>Supported routine computer and system maintenance and digital record management.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

