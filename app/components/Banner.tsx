"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Software Engineer", "Graphic Designer", "AI Enthusiast"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Flip every 4 seconds
    const flipTimer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(flipTimer);
  }, []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes waveAvatar {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: waveAvatar 2s infinite;
          transform-origin: 70% 70%;
        }
      `}} />
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left z-10 order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="">
              <p className="text-2xl text-purple-400 font-medium mb-4">Hello! I Am</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Mayoori Ekanthan
              </h1>
              
              <p className="text-3xl lg:text-5xl text-white font-bold h-[120px] lg:h-20">
                I&apos;m a <br className="lg:hidden" /><span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{displayedText}</span>
                <span className="animate-pulse text-purple-400">|</span>
              </p>
              
              <p className="text-lg text-white/80 max-w-xl mt-8 mx-auto lg:mx-0 leading-relaxed">
                Dedicated BSc (Hons) in Information Systems undergraduate with hands-on experience in web, mobile, and full-stack development. Strong problem-solving skills, with a keen interest in effectively integrating Artificial Intelligence into software solutions for real-world challenges.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]">
                  Hire Me
                </a>
                <a href="/projects/Mayoori Ekanthan_CV.pdf" download="Mayoori_Ekanthan_CV.pdf" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Flip Image (Automated) */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative [perspective:1000px]">
              <div className={`relative w-[300px] h-[350px] md:w-[400px] md:h-[450px] transition-transform duration-1000 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front (Real Photo) */}
                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center">
                  <Image
                    src="/assets/banner front pic.jpeg"
                    alt="My Photo"
                    fill
                    className="object-cover object-[center_35%] rounded-[50%] shadow-[0_0_25px_rgba(147,51,234,0.3)]"
                    priority
                  />
                </div>
                
                {/* Back (Avatar waving Video) */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <video
                    src="/assets/banner back side avatar.mp4"
                    className="w-full h-full object-cover rounded-[50%] shadow-[0_0_25px_rgba(147,51,234,0.3)]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
