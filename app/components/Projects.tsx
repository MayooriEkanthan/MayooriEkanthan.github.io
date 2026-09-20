import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
  imageStyle?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "RideSync - Intelligent Transit Booking",
    description: "Contributed to mobile frontend and backend development for the Passenger and Operator applications, implementing bus booking, seat selection, fare breakdown, booking confirmation, payment, and user profile features through RESTful API and Firebase integration. Implemented real-time GPS tracking, route optimization, distance-based fare management, and seat management, supporting integrated Passenger, Operator, and Admin functionalities.",
    link: "https://github.com/Rishikesan05/RideSync-App-Development.git",
    images: ["/projects/ridesync-passenger.jpg", "/projects/ridesync.png"],
    imageStyle: "object-contain"
  },
  {
    id: 2,
    title: "Makeupbrand_MAYO - E-Commerce Platform",
    description: "Developed a responsive e-commerce platform using React.js and Tailwind CSS, with product browsing, navigation, reusable components, and shopping cart functionality. Developing the Node.js/Express.js backend with MongoDB and REST APIs for authentication, product management, orders, and payment processing.",
    link: "https://github.com/MayooriEkanthan/Makeupbrand_Mayo.git",
    image: "/projects/mayo-ecommerce.png",
  },
  {
    id: 3,
    title: "DiaSaver - AI-Powered Diabetes Prediction",
    description: "Contributed to preprocessing and feature engineering of healthcare dataset features and trained supervised machine learning classification models using Scikit-learn for diabetes risk prediction. Developed a Flask REST API for real-time model inference and integrated it with a responsive React.js frontend for dynamic risk assessment and recommendations.",
    link: "https://github.com/MayooriEkanthan/DiaSaver.git",
    image: "/projects/diasaver.jpg",
  },
  {
    id: 4,
    title: "Zellynx - Smart Stock Clearance Platform",
    description: "Contributed to mobile application development, implementing expiry-based inventory tracking, automated notifications, and stock clearance strategies to reduce product waste. Developed real-time data synchronization and analytics features, supporting inventory management, product clearance, and data-driven profitability decisions.",
    link: "https://github.com/MayooriEkanthan/Zellynx.git",
    image: "/projects/zellynx.jpg",
    imageStyle: "object-contain p-2 bg-white/5"
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl flex gap-2 lg:gap-3 group">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`View ${project.title} repository`}></a>
                    )}
                    {project.images ? (
                      project.images.map((img, i) => (
                        <div key={i} className="relative w-full h-full rounded-lg overflow-hidden flex-1 bg-slate-900/50">
                          <Image
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className={`${project.imageStyle || 'object-cover'}`}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="relative w-full h-full rounded-lg overflow-hidden flex-1 bg-slate-900/50">
                        <Image
                          src={project.image!}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className={`${project.imageStyle || 'object-cover'}`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

