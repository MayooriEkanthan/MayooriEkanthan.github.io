import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-16 px-6 bg-[#0c0518] border-t border-purple-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Lets talk about</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Let&apos;s talk about ideas, projects, and opportunities! I&apos;m always open to sharing knowledge, discussing innovative concepts, and collaborating with others to turn visions into reality.
            </p>
            <Link href="#contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]">
              Contact Me
            </Link>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Learnings', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-xs">❯</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Current Learnings</h3>
            <div className="flex flex-wrap gap-2">
              {['Full-Stack Web Dev', 'AI-Powered Apps', 'Software Architecture', 'Cloud & DevOps', 'API Integration'].map((learning) => (
                <Link 
                  key={learning} 
                  href="#learnings" 
                  className="text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-purple-900/40 border border-white/10 hover:border-purple-500/50 py-2 px-4 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                  {learning}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Have Questions?</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/mayoori-ekanthan-7888a6337" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 flex justify-center items-center">
                  <i className="devicon-linkedin-plain text-2xl group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"></i>
                </div>
                <span className="text-sm font-medium">Mayoori Ekanthan</span>
              </a>
              <a href="https://github.com/MayooriEkanthan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 flex justify-center items-center">
                  <i className="devicon-github-original text-2xl group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"></i>
                </div>
                <span className="text-sm font-medium">MayooriEkanthan</span>
              </a>
              <a href="mailto:mayooriekanthan12@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 flex justify-center items-center">
                  <span className="text-xl group-hover:scale-110 transition-transform">✉️</span>
                </div>
                <span className="text-sm font-medium">mayooriekanthan12@gmail.com</span>
              </a>
              <a href="tel:+94771522504" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 flex justify-center items-center">
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                </div>
                <span className="text-sm font-medium">+94 77 152 2504</span>
              </a>
              <a href="tel:+94701070935" className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 flex justify-center items-center">
                </div>
                <span className="text-sm font-medium">+94 70 107 0935</span>
              </a>
            </div>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mayoori Ekanthan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

