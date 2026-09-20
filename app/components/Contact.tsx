import React from 'react';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Contact Me</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Have a Project?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project or idea you&apos;d like to bring to life? I&apos;d love to collaborate and contribute my skills to create something meaningful. Feel free to reach out—I&apos;m always eager to learn, help, and work together on exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={5}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shrink-0">
                📍
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Address:</h4>
                <p className="text-white/60">East Street, Valvettithurai, Jaffna</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Phone:</h4>
                <p className="text-white/60">+94 77 152 2504<br/>+94 70 107 0935</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email:</h4>
                <a href="mailto:mayooriekanthan12@gmail.com" className="text-white/60 hover:text-purple-400 transition-colors">
                  mayooriekanthan12@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shrink-0">
                <i className="devicon-linkedin-plain text-white/80"></i>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">LinkedIn:</h4>
                <a href="https://www.linkedin.com/in/mayoori-ekanthan-7888a6337" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-purple-400 transition-colors">
                  Mayoori Ekanthan
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shrink-0">
                <i className="devicon-github-original text-white/80"></i>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">GitHub:</h4>
                <a href="https://github.com/MayooriEkanthan" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-purple-400 transition-colors">
                  MayooriEkanthan
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
