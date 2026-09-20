import Image from "next/image";

export default function About(): React.JSX.Element {
  const coreFocus = [
    { title: "Full-Stack & Mobile", desc: "Building seamless apps with MERN stack & Flutter." },
    { title: "AI Integration", desc: "Leveraging machine learning for smart, predictive solutions." },
    { title: "Agile & Problem Solving", desc: "Collaborating effectively to deliver user-centric software." }
  ];

  const hobbies = ["Music", "Travel", "Movie", "Sports"];

  return (
    <section id="about" className="py-20 px-6 bg-slate-950/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Dedicated BSc (Hons) in Information Systems undergraduate with hands-on experience in web, mobile, and full-stack development through academic, personal, and competitive projects. Experienced in React.js, Flutter, Node.js, PHP, Firebase, REST APIs, and relational databases, with a strong foundation in software development, testing, and Agile practices.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Strong problem-solving and collaboration skills, with a keen interest in effectively integrating Artificial Intelligence into software solutions to develop scalable, efficient, and innovative applications for real-world challenges.
            </p>

            <h3 className="text-2xl font-semibold text-purple-400 mb-4">My Approach</h3>
            <ul className="space-y-4 mb-8">
              {coreFocus.map((focus, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-0.5 text-xl">▹</span>
                  <div>
                    <strong className="text-white font-medium">{focus.title}:</strong> <span className="text-white/70">{focus.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, idx) => (
                <span key={idx} className="bg-purple-900/40 border border-purple-500/30 text-purple-200 py-2 px-4 rounded-full font-medium">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
            <Image
              src="/assets/illustration.png"
              alt="About Me Illustration"
              width={600}
              height={600}
              className="object-contain mx-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
