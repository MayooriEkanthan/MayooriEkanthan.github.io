import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Learnings from "./components/Learnings";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import LeadershipVolunteering from "./components/LeadershipVolunteering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white overflow-x-hidden">
      <Header />
      <Banner />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Learnings />
      <LeadershipVolunteering />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
